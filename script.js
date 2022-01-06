const cookies = document.querySelector(".cookies");

function acceptCookies() {
  cookies.remove();
}

function displayAlert(name) {
  alert("Loading weather report...");
  cityName.innerText = name;
}

const weatherCards = document.querySelectorAll(".card");

const temperaturesC = [
  [24, 18],
  [27, 19],
  [21, 16],
  [26, 21],
];

const temperaturesF = [
  [75, 65],
  [80, 66],
  [69, 61],
  [78, 70],
];

const cityName = document.querySelector(".cityName");

function changeTemp(element) {
  const temp = element.value;

  if (temp == "farenheit") {
    for (let index = 0; index < weatherCards.length; index++) {
      const element = weatherCards[index];
      const high = element.querySelector(".high");
      const low = element.querySelector(".low");
      high.innerText = temperaturesF[index][0] + "º";
      low.innerText = temperaturesF[index][1] + "º";
    }
  } else {
    for (let index = 0; index < weatherCards.length; index++) {
      const element = weatherCards[index];
      const high = element.querySelector(".high");
      const low = element.querySelector(".low");
      high.innerText = temperaturesC[index][0] + "º";
      low.innerText = temperaturesC[index][1] + "º";
    }
  }
}
