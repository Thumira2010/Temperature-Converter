let isCtoF = true;

function convert() {
  const input = document.getElementById("temperatureInput").value.trim();
  const resultArea = document.querySelector(".result-area");
  const resultText = document.getElementById("resultText");
  const error = document.getElementById("error");

  resultArea.classList.remove("show");
  error.innerText = "";

  if (input === "" || isNaN(input)) {
    error.innerText = "❗ Please enter a valid number.";
    return;
  }

  const temp = parseFloat(input);
  let result;

  if (isCtoF) {
    result = (temp * 9 / 5) + 32;
    resultText.innerText = `${temp}°C = ${result.toFixed(2)}°F`;
  } else {
    result = (temp - 32) * 5 / 9;
    resultText.innerText = `${temp}°F = ${result.toFixed(2)}°C`;
  }

  resultArea.classList.add("show");
}

function swapUnits() {
  isCtoF = !isCtoF;
  document.getElementById("fromUnit").innerText = isCtoF ? "Celsius" : "Fahrenheit";
  document.getElementById("toUnit").innerText = isCtoF ? "Fahrenheit" : "Celsius";
  reset(); // Clear input and result
}

function reset() {
  document.getElementById("temperatureInput").value = "";
  document.getElementById("resultText").innerText = "";
  document.querySelector(".result-area").classList.remove("show");
  document.getElementById("error").innerText = "";
}

function copyResult() {
  const text = document.getElementById("resultText").innerText;
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  });
}

document.getElementById("swapBtn").addEventListener("click", swapUnits);
