//working with Cody, Felix, Maddie, and myself (Stephanie)
const key = `3bdd5c08b5384683b56141137242501`;
const button = document.querySelector('#submitButton');
const input = document.querySelector('#textInput');
const weatherIcon = document.querySelector('#weatherIcon');
let weatherCard = document.querySelector('#weatherCard');

//Location Weather information
let cityName = document.querySelector('#cityName');
let cityTempInF = document.querySelector('#tempInF');
let cityTempInC = document.querySelector('#tempInC');
let humidityInCity = document.querySelector('#humidity');
let countryLocation = document.querySelector('#locationCountry');

button.addEventListener('click', async () => {
    let city = input.value;
    
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`);
    let cityCapName = response.data.location.name;
    let tempInF = response.data.current.temp_f;
    let tempInC = response.data.current.temp_c;
    let cityWeatherIcon = response.data.current.condition.icon;
    let cityHumidity = response.data.current.humidity;
    let cityCountry = response.data.location.country;
    console.log(city);
    console.log(`Temperature in Celcius: ${tempInC}`);
    console.log(response);
    
    //Output
    cityName.innerHTML = `${cityCapName}`;
    cityTempInF.innerHTML = `${tempInF}&deg; Fahrenheit`;
    cityTempInC.innerHTML = `${tempInC}&deg; Celcius`;
    humidityInCity.innerHTML = `${cityHumidity}&#37;`;
    countryLocation.innerHTML = `${cityCountry}`;
    weatherIcon.setAttribute('src', `${cityWeatherIcon}`);
    weatherCard.style.opacity ='1';
});