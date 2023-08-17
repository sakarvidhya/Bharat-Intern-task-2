const convertButton = document.getElementById("convertButton");
const temperatureInput = document.getElementById("temperature");
const fromUnitSelect = document.getElementById("fromUnit");
const toUnitSelect = document.getElementById("toUnit");
const resultParagraph = document.getElementById("result");
const colors = ['#87CEEB', '#4682B4', '#90EE90', '#FFD700', '#FFA500', '#FF6347']; // Add more colors if desired
let currentIndex = 0;

function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 5000); // Change color every 5 seconds

convertButton.addEventListener("click", () => {
  const temperature = parseFloat(temperatureInput.value);
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  if (!isNaN(temperature)) {
    let convertedTemperature;

    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
      } else if (toUnit === "kelvin") {
        convertedTemperature = temperature + 273.15;
      } else {
        convertedTemperature = temperature;
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        convertedTemperature = (temperature - 32) * 5/9;
      } else if (toUnit === "kelvin") {
        convertedTemperature = (temperature - 32) * 5/9 + 273.15;
      } else {
        convertedTemperature = temperature;
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        convertedTemperature = temperature - 273.15;
      } else if (toUnit === "fahrenheit") {
        convertedTemperature = (temperature - 273.15) * 9/5 + 32;
      } else {
        convertedTemperature = temperature;
      }
    }

    resultParagraph.textContent = `${temperature.toFixed(2)} ${fromUnit} is ${convertedTemperature.toFixed(2)} ${toUnit}`;
  } else {
    resultParagraph.textContent = "Please enter a valid temperature.";
  }
});
