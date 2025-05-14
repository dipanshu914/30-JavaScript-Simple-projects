const apiURl =
	"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function chechWeather(city) {
	try {
		const response = await fetch(apiURl + city + `&appid=${WEATHER_API_KEY}`);

		var data = await response.json();

		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temp").innerHTML =
			Math.round(data.main.temp) + "°c";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr.";

		if (data.weather[0].main == "Clouds") {
			weatherIcon.src = "images/clouds.png";
		} else if (data.weather[0].main == "Clear") {
			weatherIcon.src = "images/clear.png";
		} else if (data.weather[0].main == "Drizzel") {
			weatherIcon.src = "images/drizzel.png";
		} else if (data.weather[0].main == "Humidity") {
			weatherIcon.src = "images/humidity.png";
		} else if (data.weather[0].main == "Mist") {
			weatherIcon.src = "images/mist.png";
		} else if (data.weather[0].main == "Rain") {
			weatherIcon.src = "images/rain.png";
		} else if (data.weather[0].main == "Snow") {
			weatherIcon.src = "images/snow.png";
		} else if (data.weather[0].main == "Wind") {
			weatherIcon.src = "images/wind.png";
		}
	} catch (error) {
		console.log(error);
	}
}

searchBtn.addEventListener("click", () => {
	chechWeather(searchBox.value);
});
