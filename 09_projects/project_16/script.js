const selectEl = document.querySelector("select");
const btn = document.getElementById("get-weather-btn");
const weatherDisplay = document.getElementById("weather-display");

// When button is clicked
btn.addEventListener("click", function () {
  const city = selectEl.value;
  // Only do something if a city is selected
  if (city) {
    showWeather(city);
  }
});

// This function FETCHES the weather data
async function getWeather(city) {
  try {
    const response = await fetch(
      "https://weather-proxy.freecodecamp.rocks/api/city/" + city
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// This function SHOWS the weather data on the page
async function showWeather(city) {
  const data = await getWeather(city);

  // If getWeather failed, show alert and stop
  if (!data) {
    alert("Something went wrong, please try again later");
    return;
  }

  // Show the weather display
  weatherDisplay.classList.remove("hidden"); // made a mistake here:

  // Location name
  document.getElementById("location").innerText = data.name || "N/A";

  // Weather icon
  document.getElementById("weather-icon").src = data.weather[0].icon || ""; // made  a mistake here in data taking

  // Weather type (like "Clouds" or "Rain")
  document.getElementById("weather-main").innerText =
    data.weather[0].main || "N/A";

  // Temperature
  if (data.main.temp !== undefined) {
    document.getElementById("main-temperature").innerText = data.main.temp;
  } else {
    document.getElementById("main-temperature").innerText = "N/A";
  }

  // Feels like
  if (data.main.feels_like !== undefined) {
    document.getElementById("feels-like").innerText = data.main.feels_like;
  } else {
    document.getElementById("feels-like").innerText = "N/A";
  }

  // Humidity
  if (data.main.humidity !== undefined) {
    document.getElementById("humidity").innerText = data.main.humidity;
  } else {
    document.getElementById("humidity").innerText = "N/A";
  }

  // Wind speed
  if (data.wind.speed !== undefined) {
    document.getElementById("wind").innerText = data.wind.speed;
  } else {
    document.getElementById("wind").innerText = "N/A";
  }

  // Wind gust (some cities dont have this, so it shows N/A)
  if (data.wind.gust !== undefined) {
    document.getElementById("wind-gust").innerText = data.wind.gust;
  } else {
    document.getElementById("wind-gust").innerText = "N/A";
  }
}