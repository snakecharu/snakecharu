function converter1() {
      const celcius = Number(document.getElementById("input").value);
      const result1 = document.getElementById("result1");
      const result2 = document.getElementById("result2");
       

      if (isNaN(celcius)) {
        result1.innerHTML = "Enter a valid number.";
        return;
      }
      const fahrenheit = (celcius * 9 / 5) + 32;
      result1.innerHTML = `${celcius}°C = ${fahrenheit.toFixed(2)}°F`;
      result1.classList.add("show");
      result2.innerHTML = "";
      result2.classList.remove("show");
    }

    function converter2() {
      const cm = Number(document.getElementById("input").value);
      const result1 = document.getElementById("result1");
      const result2 = document.getElementById("result2");
      

      if (isNaN(cm)) {
        result2.innerHTML = "Enter a valid number.";
        return;
      }
      const inches = cm / 2.54;
      result2.innerHTML = `${cm} cm = ${inches.toFixed(2)} inches`;
      result2.classList.add("show");
      result1.innerHTML = ""; 
      result1.classList.remove("show");
    }