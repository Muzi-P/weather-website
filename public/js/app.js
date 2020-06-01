console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageWeather = document.querySelector("#message-weather");
const messageError = document.querySelector("#message-error");
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  messageWeather.textContent = 'loading...'
  messageError.textContent = ''
  fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        messageError.textContent = data.error;
        messageWeather.textContent = '';
      } else {
        messageWeather.textContent = data.forecast;
        messageError.textContent = data.location;
      }
    });
  });
});
