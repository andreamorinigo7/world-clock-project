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
updateCity();
setInterval(updateCity, 1000);
