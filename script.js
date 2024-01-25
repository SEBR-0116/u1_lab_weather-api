// Search Constants
const apiKey = '23055ee2beb14716a94141112242501'

const searchButton = document.querySelector('#searchButton')
const searchInput = document.querySelector('#searchInput')


// // Capitalize Input / Output
// function capitalize(string) {
//     let arr = string.split('')
//     let first = arr[0].toUpperCase()
//     arr = arr.splice(1)
//     arr = arr.join('')
//     let finalString = first + arr
//     return finalString
// }

// Desired Location's Weather Information
let cityName = document.querySelector('#cityName')
let cityRegion = document.querySelector('#cityRegion')
// let cityCountry = document.querySelector('#cityCountry')

let weatherIcon = document.querySelector('#weatherIcon')
let currentWeather = document.querySelector('#currentWeather')
let currentTemp = document.querySelector('#currentTemp')
let feelsTemp = document.querySelector('#feelsTemp')


// Search Axioss / API
searchButton.addEventListener('click', async () => {
    // Define Variables
    let searchCity = searchInput.value
    
    // Search Results
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchCity}&aqui=no`)
    
    let cityOutput = response.data.location.name
    let regionOutput = response.data.location.region
    let countryOutput = response.data.location.country
    let iconOutput = response.data.current.condition.icon
    let weatherOutput = response.data.current.condition.text
    let tempOutput = response.data.current.temp_f
    let feelsOutput = response.data.current.feelslike_f
    
    // Outputs
    document.querySelector(".output").style.display = "flex";

    cityName.innerHTML = `${cityOutput}`
    cityRegion.innerHTML = `${regionOutput} &#x2022; ${countryOutput}`
    
    weatherIcon.innerHTML = `<img src='${iconOutput}' width='80px'/>`
    currentWeather.innerHTML = `Currently ${weatherOutput}`
    currentTemp.innerHTML = `Current Temperature <b>${tempOutput}\u00B0</b> F`
    feelsTemp.innerHTML = `Feels Like <b>${feelsOutput}\u00B0</b> F`

    // Switch to Pressure & Humidty
    weatherIcon.addEventListener('click', async () => {
        // Search Results
        let humidityOutput = response.data.current.humidity
        let pressureOutput = response.data.current.pressure_in

        // Outputs of New Results
        currentTemp.innerHTML = `Pressure Index <b>${pressureOutput}</b> inHg`
        feelsTemp.innerHTML = `Humidity <b>${humidityOutput}%</b>`

        // Switch to Wind Speed & Direction
        weatherIcon.addEventListener('click', async () => {
            // Search Results
            let windSpeedOutput = response.data.current.wind_mph
            let windDirectionOutput = response.data.current.wind_dir
                
            // Outputs of New Results
            currentTemp.innerHTML = `Wind Speed <b>${windSpeedOutput}</b> mph`
            feelsTemp.innerHTML = `<b>${windDirectionOutput}</b>`

            // Switch to Visibility & UV
            weatherIcon.addEventListener('click', async () => {
                // Search Results
                let visibilityOutput = response.data.current.vis_miles
                let uvOutput = response.data.current.uv
        
                // Outputs of New Results
                currentTemp.innerHTML = `Visibility <b>${visibilityOutput}</b> Miles`
                feelsTemp.innerHTML = `UV Index <b>${uvOutput}</b>`

                // Switch to Temp & Feels like
                weatherIcon.addEventListener('click', async () => {
                    // Outputs of New Results
                    currentTemp.innerHTML = `Current Temperature <b>${tempOutput}\u00B0</b> F`
                    feelsTemp.innerHTML = `Feels Like <b>${feelsOutput}\u00B0</b> F`
                })
            })
        })
    })
})

///////////////////////////////////////////
//            Ideas to Expand            //
///////////////////////////////////////////
// - fix issue w centering on mobile-first/reactive CSS
// - get the onclick for the weather icon to loop through information instead of just nest series of onclick commands
//    -> base which info comes up on first click (temp will always be first) based on Current Condition; need full list of possible states
//        -> Ex. "sunny" will show UV & vis first, "rain" will show precip, "mist" will show humidity, etc.
// - get the error message if the input is invalid (see code below)



// searchButton.addEventListener('click', async () => {
//     const searchInput = document.querySelector('#searchInput').value
//     let cityName = document.querySelector('#cityName')

//     try {
//         let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchInput}&aqui=no`)
//         console.log(response.status)
//         console.log(response)
//         if (response && response.data.location && response.data.location.name) {
//             cityName.textContent = response.data.name
//             console.log(response.data.location.name)
//         }
//     } catch (error)
// })