function updateCity() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");

  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  //lima
  let limaElement = document.querySelector("#lima");
  let limaDateElement = limaElement.querySelector(".date");
  let limaTimeElement = limaElement.querySelector(".time");
  let limaTime = moment().tz("America/Lima");

  limaDateElement.innerHTML = limaTime.format("MMMM Do YYYY");

  limaTimeElement.innerHTML = limaTime.format("h:mm:ss [<small>] A [</small>]");

  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");

  tokyoTimeElement.innerHTML = tokyoTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  //seoul
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");

  seoulTimeElement.innerHTML = seoulTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}

//city drop down
function updateSelectCities(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let countryName = cityTimeZone.split("/")[0];

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city" >
        <div >
            <h2>${cityName}</h2>
            <div class="country">${countryName}</div>
          </div>
          <div class="time-date">
            <div class="time">${cityTime.format(
              "h:mm:ss "
            )}  <small> ${cityTime.format("A")}  </small></div>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          
        </div>
      </div>
      <a href = "/">🏠</a>`;
}

updateCity();
setInterval(updateCity, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateSelectCities);
