const apiKey = "3eb85cbe007c47ed9cf141121242501"
const button = document.querySelector('#submitButton')
const cityName = document.querySelector('#cityName')
const temp = document.querySelector ('#temp')  
const condition = document.querySelector ('#condition')
const icon = document.querySelector ('#icon')
const time = document.querySelector ('#time')

button.addEventListener('click', async (event) => {
    event.preventDefault();
    const input = document.querySelector('#textInput').value;
  
    try {
      let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}=no`);
      const weatherData = response.data;
  
      cityName.innerText = weatherData.location.name;
      temp.innerText = `${weatherData.current.temp_f}\u00B0F`;
      condition.innerText = `${weatherData.current.condition.text}`;
      time.innerText = `${weatherData.location.localtime}`;
      icon.src = `http:${weatherData.current.condition.icon}`;
  
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Handle error, show a message, etc.
    }
  })

//button.addEventListener('click', async (event) => {
   // event.preventDefault()
    //const input = document.querySelector('#textInput').value
    //let response = await axios.get (`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}=no`)
    //console.log()
   //const weatherData = response.data
    //cityName.innerText = weatherData.location.name
    //temp.innerText = `${weatherData.current.temp_f}\u00B0F`
    //condition.innerText = `${weatherData.current.condition.text}`
    //icon.innerText = `${weatherData.current.condition.icon}`
//icon.src = `${weatherImg.icon}`;
  //})

  //cdn.weatherapi.com/weather/64x64/day/116.png