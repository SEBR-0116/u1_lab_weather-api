const apiKey = "d03205e7d95c41f2b35141140242501"
const icon = document.querySelector('#icon')
const temp = document.querySelector('#temp')
const f = document.querySelector('#f')
const c = document.querySelector('#c')
const feelslike = document.querySelector('#feelslike')
const textInput = document.querySelector('#textInput').value
const submitButton = document.querySelector('#submitButton')
const cityandcountry = document.querySelector('#cityandcountry')
const cloud = document.querySelector('#cloud')
const wind = document.querySelector('#wind')
const precip = document.querySelector('#precip')
const humid = document.querySelector('#humid')
const group1 = document.querySelector('#group1')



submitButton.addEventListener('click', async () => {
    let textInput = document.querySelector('#textInput').value
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${textInput}&aqi=no`)
    console.log(response)
    let city = response.data.location.name
    let country = response.data.location.country
    cityandcountry.innerHTML = `${city}, ${country}`

    let temperature = response.data.current.temp_f
    temp.innerHTML = `${temperature} °F`

    let feels = response.data.current.feelslike_f
    feelslike.innerHTML = `${feels} °F`

    let cloudoutput = response.data.current.cloud
    let uvoutput = response.data.current.uv
    cloud.innerHTML = `${cloudoutput},${uvoutput}`

    let windoutput = response.data.current.wind_mph
    wind.innerHTML = `${windoutput} mph`

    let precipitation = response.data.current.precip_in
    precip.innerHTML = `${precipitation} %`

    let humidity = response.data.current.humidity
    humid.innerHTML = `${humidity} %`

    // let weathericon = response.data.current.condition.icon
    // icon.innerHTML = `https${weathericon}`
})
