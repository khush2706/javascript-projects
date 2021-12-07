const appid = "ffe55dd155c8ba35e726f6aa1f348f9b";
function fetchWeather(city) {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    appid;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      displayWeather(data);
    })
    .catch((e) => {
      alert("something went wrong");
    });
}

function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, temp_min, temp_max } = data.main;
  console.log(name, icon, description, temp, temp_min, temp_max);
  document.querySelector(".city").innerText = name;
  document.querySelector(".description").innerText = description;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  document.querySelector(".temp").innerText = temp + "°";
  document.querySelector(".max p").innerText = temp_max + "°";
  document.querySelector(".min p").innerText = temp_min + "°";
  document.querySelector(".card").classList.remove("loading");
}

function search() {
  fetchWeather(document.querySelector(".search-bar").value);
}

document.querySelector("button").addEventListener("click", search);
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      search();
    }
  });
