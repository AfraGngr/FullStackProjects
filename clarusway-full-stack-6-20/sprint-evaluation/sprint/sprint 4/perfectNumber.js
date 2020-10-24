const inputNumber = document.getElementById("number")
const checkButton = document.querySelector("#btn")
const result = document.querySelector("#result")

checkButton.addEventListener("click", checkNumber)



function checkNumber () {
    var number = 1 

    for (var i = 2 ; i < inputNumber.value; i++) {
        if(inputNumber.value % i == 0){
            number += i
        }
    }
    console.log(inputNumber.value)
    console.log(number)
    if (number == inputNumber.value){
        result.innerHTML = inputNumber.value + "is a Perfect Number."
    } else {
        result.innerHTML = inputNumber.value + "is not a Perfect Number."
    }
}





