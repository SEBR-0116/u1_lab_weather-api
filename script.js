
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'e303f285b643436a84f141042242501';
    const button = document.querySelector('#submitButton');
    const select = document.querySelector('#searchType');
    const futureDateInput = document.querySelector('#futureDateInput');
    const specificDateInput = document.querySelector('#specificDate');

    button.addEventListener('click', function () {
        const input = document.querySelector('#textInput').value;
        const searchType = select.value;

        if (searchType === 'future'||searchType === 'astronomy') {
 
            futureDateInput.style.display = 'block';
        } else {
 
            futureDateInput.style.display = 'none';
        }
    });

    button.addEventListener('click', async function () {
        const input = document.querySelector('#textInput').value;
        const searchType = select.value;
        const specificDate = specificDateInput.value;
        let apiUrl = `http://api.weatherapi.com/v1/${searchType}.json?key=${apiKey}&q=${input}`;
        if ((searchType === 'future' || searchType === 'astronomy') && specificDate) {

            apiUrl += `&dt=${specificDate}`;
        }
         if (searchType === 'current' ) {
 
            apiUrl += `&aqi=no`;
        }
        else if (searchType === 'forecast' ) {
 
            apiUrl += `&days=1&aqi=no&alerts=no`;
        }
        else if (searchType === 'marine' ) {
 
            apiUrl += `&day=1`;
        }

        try {
            
            const response = await axios.get(apiUrl);
            const data = response.data;
            console.log(data);
            document.getElementById('cityName').textContent = `City: ${data.location.name}`;
            document.getElementById('country').textContent = `Country: ${data.location.country}`;
           
            if(searchType==='current'){
            document.getElementById('temp').textContent = `Temperature: ${data.current.temp_c}°C`;
            document.getElementById('wind_mph').textContent = `Wind Speed: ${data.current.wind_mph} mph`;
            document.getElementById('precip_mm').textContent = `Precipitation: ${data.current.precip_mm} mm`;
            document.getElementById('condition').textContent = `condition: ${data.current.condition.text} `;
            const iconUrl = `http:${data.current.condition.icon}`;
            document.getElementById('weatherIcon').src = iconUrl;
            }
            else if(searchType==='forecast'){
                document.getElementById('sunrise').textContent = `Sunrise: ${data.forecast.forecastday.astro.sunrise}`;
                document.getElementById('sunset').textContent = `Sunset: ${data.forecast.forecastday.astro.sunset}`;
            }
            else if(searchType==='timezone'){
                document.getElementById('tz_id').textContent = `Tz_id: ${data.location.tz_id}`;
                document.getElementById('localtime').textContent = `Lacal Time: ${data.location.localtime}`;
                document.getElementById('localtime_epoch').textContent = `Lacal Time: ${data.location.localtime_epoch}`;
            }

            else if(searchType==='sports'){
                document.getElementById('football').textContent = `Football: ${data.football}`;
                document.getElementById('golf').textContent = `Golf: ${data.golf}`;
                document.getElementById('cricket').textContent = `Cricket: ${data.cricket}`; 
            }
            else if(searchType==='astronomy'){
                document.getElementById('sunrise').textContent = `Sunrise: ${data.forecast.forecastday[1].astro.sunrise}`;
                document.getElementById('sunset').textContent = `Sunset: ${data.forecast.forecastday[1].astro.sunset}`;

            }
            else if(searchType==='marine'){
                document.getElementById('tz_id').textContent = `Tz_id: ${data.location.tz_id}`;
                document.getElementById('localtime').textContent = `Lacal Time: ${data.location.localtime}`;
                document.getElementById('localtime_epoch').textContent = `Lacal Time: ${data.location.localtime_epoch}`;

            }else if (searchType === 'future') {
                document.getElementById('sunrise').textContent = `Sunrise: ${data.forecast.forecastday[1].astro.sunrise}`;
                document.getElementById('sunset').textContent = `Sunset: ${data.forecast.forecastday[1].astro.sunset}`;

            }

        }catch (error) {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data. Please try again.');
        }
    });
});
