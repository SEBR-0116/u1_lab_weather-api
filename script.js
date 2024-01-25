
const apiKey = '0c8f5665928e42018dc141038242501'
const button = document.querySelector('#submitButton')
const cityName = document.querySelector('#cityName')
let temp = document.querySelector('#temp')
let icon = document.querySelector('#icon')
const region = document.querySelector('#region')
let localTime = document.querySelector('#localTime')
const timeZone = document.querySelector('#timeZone')
let feelsLike = document.querySelector('#feelsLike')


button.addEventListener('click', async (event) => {
    event.preventDefault()
    const inputBar = document.querySelector('#textInput').value
    //let conditionIcon = document.querySelector('#conditionIcon')
    console.log(inputBar)
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputBar}`)
    const weatherData = response.data
    cityName.innerText = weatherData.location.name
    temp.innerText = `${weatherData.current.temp_f}`
    region.innerText = `${weatherData.location.region}`
    localTime.innerText = `${weatherData.location.localtime}`
    timeZone.innerText = `${weatherData.location.tz_id}`
    feelsLike.innerText = `${weatherData.current.feelslike_f}`
    //conditionIcon.innerText = weatherData.current.condition
    icon.src = `${weatherData.current.condition.icon}`
})