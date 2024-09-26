function updateCity() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");

  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  let limaElement = document.querySelector("#lima");
  let limaDateElement = limaElement.querySelector(".date");
  let limaTimeElement = limaElement.querySelector(".time");
  let limaTime = moment().tz("America/Lima");

  limaDateElement.innerHTML = limaTime.format("MMMM Do YYYY");

  limaTimeElement.innerHTML = limaTime.format("h:mm:ss [<small>] A [</small>]");
}

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
      </div>`;
}

updateCity();
setInterval(updateCity, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateSelectCities);
