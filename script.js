const cookies = document.querySelector(".cookies");

let temperaturesC = [];

let temperaturesF = [];

function acceptCookies() {
  cookies.remove();
}

async function displayAlert(name) {
  
  const key = "1e0f7fbbaacc1935428ddad5b8ccc43a";  
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${key}`);
  const data = await response.json();
  console.log(data);
  temperaturesF = data.list.map((elem)=>{
    return [Math.round(elem.main.temp_min*9/5-459.67),Math.round(elem.main.temp_max*9/5-459.67)];
  })
  temperaturesC = data.list.map((elem)=>{
    return [Math.round(elem.main.temp_min-273.15),Math.round(elem.main.temp_max-273.15)];
  })

  const temp = document.querySelector("#temperature").value;

  weatherHigh = document.querySelectorAll(".high");
  weatherLow = document.querySelectorAll(".low");

  for (let index = 0; index < weatherHigh.length; index++) {
    const high = weatherHigh[index];
    const low = weatherLow[index];
    if (temp == "farenheit") {
      high.innerText = temperaturesF[index][1] + "º";
      low.innerText = temperaturesF[index][0] + "º";
    }else{
      high.innerText = temperaturesC[index][1] + "º";
      low.innerText = temperaturesC[index][0] + "º";
    }    
  }

  cityName.innerText = name;
}

const weatherCards = document.querySelectorAll(".card");

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

displayAlert("Lima");