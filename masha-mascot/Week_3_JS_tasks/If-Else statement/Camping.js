function checkWeather() {
  if (weatherIsSunny === true) {
    johnsAnswer = "- I'm going camping.";
  } else {
    johnsAnswer = "- I'm staying home.";
  }
}

weatherIsSunny = confirm("Is it sunny today?");
checkWeather(weatherIsSunny);
console.log(johnsAnswer);
