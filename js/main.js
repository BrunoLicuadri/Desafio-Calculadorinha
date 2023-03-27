console.log("Ola");

const inputNumber1 = document.querySelector('[id="number1"]');
const inputNumber2 = document.querySelector('[id="number2"]');
const inputResult = document.querySelector("#result-box");
const btnPlus = document.querySelector("#btn-plus");
const btnTimes = document.querySelector("#btn-times");
const btnClear = document.querySelector("#btn-clear");


//console.log(inputResult);

inputNumber2.classList.remove("input-error");



btnPlus.addEventListener('click', handleBtnPlusClick);

function handleBtnPlusClick(){
    const numb1 = Number(inputNumber1.value);
    const numb2 = Number(inputNumber2.value);

    if (isNumber(numb1)){
        if (isNumber(numb2)){
            inputResult.innerHTML=numb1+numb2;
        }
        else{
            inputNumber2.classList.add("input-error")
        }
    }
    else{
        inputNumber2.classList.add("input-error")   
    }

}

btnTimes.addEventListener('click', handleBtnTimesClick);

function handleBtnTimesClick(){
    const numb1 = Number(inputNumber1.value);
    const numb2 = Number(inputNumber2.value);

    if (isNumber(numb1)){
        if (isNumber(numb2)){
            inputResult.innerHTML=numb1*numb2;
        }
        else{
            inputNumber2.classList.add("input-error")
        }
    }
    else{
        inputNumber2.classList.add("input-error")   
    }
}

btnClear.addEventListener('click', handleBtnClearClick);

function handleBtnClearClick(){
    inputNumber1.value = '';
    inputNumber2.value = '';
    inputResult.innerHTML=0;
}


function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    }






