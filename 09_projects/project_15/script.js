const tempHumidity = document.getElementById("humidity")
const windSpeed = document.getElementById("wind")
const windGustSpeed = document.getElementById("wind-gust")
const temperature = document.getElementById("main-temperature")
const feelsLikeTemp = document.getElementById("feels-like")
const searchBtn = document.getElementById("get-weather-btn");
const cityDropdown = document.querySelector("select");
const weatherDisplay = document.getElementById("weather-display")
const imageValue = document.querySelector("img")

async function getWeather(city) {
  try {
    // 1. Define the variable first
    const url = `https://weather-proxy.freecodecamp.rocks/api/city/${city}`;
    
    // 2. Use the variable in the console log
    console.log("Fetching from:", url);

    // 3. Use the variable in the fetch call
    const response = await fetch(url);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error(error);
    throw error
  }
}
async function showWeather(city) {
  try {
    const weatherData = await getWeather(city);

    // If getWeather fails or returns nothing, throw to trigger the catch block alert
    if (!weatherData) {
      throw new Error("No data received");
    }
    
    const temp = weatherData.main?.temp ?? "N/A";
    const feelsLike = weatherData.main?.feels_like ?? "N/A";
    const humidity = weatherData.main?.humidity ?? "N/A";
    const wind = weatherData.wind?.speed ?? "N/A";
    const windGust = weatherData.wind?.gust ?? "N/A";
    const description = weatherData.weather?.[0]?.main ?? "N/A";
    const cityName = weatherData.name ?? "N/A";

    document.getElementById("main-temperature").textContent = temp;
    document.getElementById("feels-like").textContent = feelsLike;
    document.getElementById("humidity").textContent = humidity;
    document.getElementById("wind").textContent = wind;
    document.getElementById("wind-gust").textContent = windGust;
    document.getElementById("weather-main").textContent = description;
    document.getElementById("location").textContent = cityName;


    // 4. Reveal the display
    weatherDisplay.classList.remove("hidden");

  } catch (error) {
    // This handles the alert requirement for "Something went wrong"
    alert("Something went wrong, please try again later");
  }
}

searchBtn.addEventListener("click", () => {

  const dataValue = cityDropdown.value
  
  if (dataValue) {
    showWeather(dataValue);
  }
});
