function changeCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("#mainCity");
  if (cityInput.value) {
    h1.innerHTML = `${cityInput.value}`;
  } else {
    h1.innerHTML = null;
    alert(`Try once more`);
  }
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", changeCity);

let currentDayTime = document.querySelector("#time");
let date = new Date();
function formatDate(date) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuersday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[dayIndex];
  let currentDate = date.getDate();
  let currentMonth = months[date.getMonth()];
  let currentYear = date.getUTCFullYear();
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();

  return ` ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear} ${currentHour}:${currentMinute}`;
}

currentDayTime.innerHTML = formatDate(date);

function showTemperature(response) {
  let temp = Math.round(response.data.main.temp);
  let heading = document.querySelector("#mainTemperaturа");
  heading.innerHTML = ` ${temp}`;
}

function retrievePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "193cf6571704df8179cc4bb2e1e65ae5";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=${units}`;

  ///let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}
navigator.geolocation.getCurrentPosition(retrievePosition);
