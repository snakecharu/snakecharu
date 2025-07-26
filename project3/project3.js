
    
    function convert1() {
  const str = document.getElementById("input").value.trim();
  const words = str === "" ? [] : str.split(/\s+/);
  const count = words.length;

  const result1 = document.getElementById("result1");
  const result2 = document.getElementById("result2");

  
  result1.innerHTML = `Word Count: ${count}`;
  result1.classList.add("show");

  
  result2.innerHTML = "";
  result2.classList.remove("show");
}

function convert2() {
  const str = document.getElementById("input").value;
  const charactersOnly = str.replace(/\s/g, "");
  const count = charactersOnly.length;

  const result1 = document.getElementById("result1");
  const result2 = document.getElementById("result2");

  result2.innerHTML = `Character Count: ${count}`;
  result2.classList.add("show");

  result1.innerHTML = "";
  result1.classList.remove("show");
}
