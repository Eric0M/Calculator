
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
        previousScreen.textContent = previousValue + operator;
        currentScreen.textContent = currentValue

    }))

    clear.addEventListener('click', function(){
        currentValue = '';
        previousValue = '';
        operators = '';
        currentScreen.textContent = '';
        previousScreen.textContent = '';
    })

    equal.addEventListener('click', function(){
        calculate()
        previousScreen.textContent = '';
        currentScreen.textContent = previousValue;
    })

    decimal.addEventListener('click', function(e){
        addDecimal(e.target.textContent)
        currentScreen.textContent = currentValue
    })
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

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);


    if(operator === '+'){
        previousValue += currentValue;
    }else if(operator === '-'){
        previousValue -= currentValue;
    }else if(operator === '*'){
        previousValue *= currentValue;
    }else{
        previousValue /= currentValue;
    }
    previousValue = round(previousValue)
    previousValue = previousValue.toString()
    currentValue = previousValue.toString()
   
}


function round(num){
    return Math.round(num*1000)/1000
}

function addDecimal(){
    if(!currentValue.includes('.')){
        currentValue += '.'
    }
}


