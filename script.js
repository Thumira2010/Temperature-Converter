let isCtoF = true;

    function convert() {
      const input = document.getElementById("temperatureInput").value.trim();
      const resultText = document.getElementById("resultText");
      const resultWords = document.getElementById("resultWords");
      const error = document.getElementById("error");

      resultText.value = "";
      resultWords.innerText = "";
      error.innerText = "";

      if (input === "" || isNaN(input)) {
        if (input !== "") error.innerText = "❗ Please enter a valid number.";
        return;
      }

      const temp = parseFloat(input);
      let result;

      if (isCtoF) {
        result = (temp * 9 / 5) + 32;
        resultText.value = `${result.toFixed(2)} °F`;
        resultWords.innerText = `${temp} degrees Celsius = ${result.toFixed(2)} degrees Fahrenheit`;
      } else {
        result = (temp - 32) * 5 / 9;
        resultText.value = `${result.toFixed(2)} °C`;
        resultWords.innerText = `${temp} degrees Fahrenheit = ${result.toFixed(2)} degrees Celsius`;
      }
    }

    function swapUnits() {
      isCtoF = !isCtoF;
      document.getElementById("fromUnit").innerText = isCtoF ? "Celsius" : "Fahrenheit";
      document.getElementById("toUnit").innerText = isCtoF ? "Fahrenheit" : "Celsius";
      document.getElementById("inputLabel").innerText = isCtoF ? "Celsius:" : "Fahrenheit:";
      document.getElementById("outputLabel").innerText = isCtoF ? "Fahrenheit:" : "Celsius:";
      reset();
    }

    function reset() {
      document.getElementById("temperatureInput").value = "";
      document.getElementById("resultText").value = "";
      document.getElementById("resultWords").innerText = "";
      document.getElementById("error").innerText = "";
    }

    function copyResult() {
      const text = document.getElementById("resultText").value;
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
      });
    }

    document.getElementById("swapBtn").addEventListener("click", swapUnits);