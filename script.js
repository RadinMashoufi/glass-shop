const inputOne = document.querySelector("#inputOne")
const inputTwo = document.querySelector("#inputTwo")
const btnCalculate = document.querySelector("#btnCalculate")
const x = 20000
const total = document.querySelector("#total")
btnCalculate.addEventListener('click', () => total.innerHTML = inputOne.value * inputTwo.value * x)