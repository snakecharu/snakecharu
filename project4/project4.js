function appendNumber(num) {
    const input = document.getElementById("input");
    input.value += num;
}

function clearInput() {
    document.getElementById("input").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").classList.remove("show");
}

function convert() {
    const input = document.getElementById("input");
    const number = Number(input.value);
    const result = document.getElementById("result");

    let text = "";

    if (number < 3) {
        text = `${number} Months = 5.8% snakecharu`;
    } else if (number >= 3 && number <= 6) {
        text = `${number} Months = 6.5% snakecharu`;
    } else if (number >= 7 && number <= 9) {
        text = `${number} Months = 6.8% snakecharu`;
    } else if (number >= 10) {
        text = `${number} Months = 7% snakecharu`;
    } else {
        text = "Please enter a valid number.";
    }

    result.classList.remove("show");
    result.innerHTML = text;

    
    input.value = text;

    
    setTimeout(() => {
        result.classList.add("show");
    }, 50);
}
