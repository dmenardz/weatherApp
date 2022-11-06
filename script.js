// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '91576c70afmshf0a3de024d9c1bfp1d8501jsnd52115d0c529',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));


// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
return fetch(`${URL}?q=${city}&appid=${API_KEY}`)
.then(res => res.json())
.then(data =>data)
}

const searchCity  = async() => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  const data = await getWeatherData(city)
  showWeatherData(data)
}

const showWeatherData = (weatherData) => {
  const temp = weatherData.main.temp
  const cityName = weatherData.name
  const weatherType = weatherData.weather[0].main
  const minTemp = weatherData.main.temp_min
  const maxTemp = weatherData.main.temp_max

  document.getElementById('temp').innerHTML = `${temp}`
  document.getElementById('city-name').innerHTML = `${cityName}`
  document.getElementById('weather-type').innerHTML = `${weatherType}`
  document.getElementById('min-temp').innerHTML = `${minTemp}`
  document.getElementById('max-temp').innerHTML = `${maxTemp}`
}

