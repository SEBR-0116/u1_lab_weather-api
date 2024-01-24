const apiKey = "e90f19b241f847c28d8143541242501" 
const icon = document.querySelector('#icon')
const temp = document.querySelector('#temp')
const f = document.querySelector('#f')
const c = document.querySelector('#c')
const feelslike = document.querySelector("#feelslike")
const textInput = document.querySelector("#textInput")
const submitButton = document.querySelector("#submitButton")
const cityandcountry = document.querySelector("#cityandcountry")
const cloud = document.querySelector("#cloud")
const wind = document.querySelector("#wind")
const precip = document.querySelector("#precip")
const humid = document.querySelector("#humid")

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
})

//button.addEventListener('click', async () => {
   // let textInput = document.querySelector("#inputBar").value
    //console.log(textInput)
    //let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    //console.log(response.data.sprites.other.home.front_default)
    //let pokePic = response.data.sprites.other.home.front_default
    //pokemonImage.setAttribute ('src',`${pokePic}`)

    //let pokeName = response.data.name
    //pokemonName.innerHTML = (`${pokeName}`)
    //console.log(response.data.name)
//})