const apiKey = "00cbc331aece7eba74b0077beb26f67a";

const btn = document.getElementById("btn");
const cityInput = document.getElementById("cityInput");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

btn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.cod === "404") {
        alert("City not found");
        return;
      }
      city.textContent = data.name;
      temp.textContent = `🌡 Temperature: ${data.main.temp}°C`;
      condition.textContent = `☁ Condition: ${data.weather[0].description}`;
      humidity.textContent = `💧 Humidity: ${data.main.humidity}%`;
      wind.textContent = `💨 Wind: ${data.wind.speed} m/s, Direction: ${data.wind.deg}°`;
    })
    .catch(() => {
      alert("Something went wrong, Please try again");
    });
});
