
let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function() {
    // Store all components linking to HTML
    let numbers = document.querySelectorAll(".buttonNumber");
    let operators = document.querySelectorAll(".buttonOperator");

    let decimal = document.querySelector(".buttonDecimal");
    let equal = document.querySelector(".buttonEqual");
    let clear = document.querySelector("#buttonClear");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue

    }))
})

function handleNumber(num){
    if(currentValue.length <= 11){
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}





