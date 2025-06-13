    let isCtoF = true;

    function convert() {
      const input = document.getElementById("temperatureInput").value.trim();
      const resultText = document.getElementById("resultText");
      const resultWords = document.getElementById("resultWords");
      const error = document.getElementById("error");

      resultText.value = "";
      resultWords.classList.remove("visible");
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

      setTimeout(() => resultWords.classList.add("visible"), 10);
    }

    function swapUnits() {
      isCtoF = !isCtoF;
      const fromUnit = document.getElementById("fromUnit");
      const toUnit = document.getElementById("toUnit");
      const inputLabel = document.getElementById("inputLabel");
      const outputLabel = document.getElementById("outputLabel");

      fromUnit.style.opacity = 0;
      toUnit.style.opacity = 0;
      inputLabel.style.opacity = 0;
      outputLabel.style.opacity = 0;

      setTimeout(() => {
        fromUnit.innerText = isCtoF ? "Celsius" : "Fahrenheit";
        toUnit.innerText = isCtoF ? "Fahrenheit" : "Celsius";
        inputLabel.innerText = isCtoF ? "Celsius:" : "Fahrenheit:";
        outputLabel.innerText = isCtoF ? "Fahrenheit:" : "Celsius:";
        fromUnit.style.opacity = 1;
        toUnit.style.opacity = 1;
        inputLabel.style.opacity = 1;
        outputLabel.style.opacity = 1;
      }, 150);

      reset();
    }

    function reset() {
      document.getElementById("temperatureInput").value = "";
      document.getElementById("resultText").value = "";
      const resultWords = document.getElementById("resultWords");
      resultWords.classList.remove("visible");
      resultWords.innerText = "";
      document.getElementById("error").innerText = "";
    }

    function copyResult() {
      const copyBtn = document.getElementById("copyBtn");
      const text = document.getElementById("resultText").value;
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.classList.add("clicked");
        setTimeout(() => copyBtn.classList.remove("clicked"), 300);

      });
    }

    document.getElementById("swapBtn").addEventListener("click", swapUnits);