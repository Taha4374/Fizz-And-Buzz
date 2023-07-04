document.addEventListener("DOMContentLoaded", function () {
    let checkButton = document.getElementById("checkButton");
    let resetButton = document.getElementById("resetButton");
    let numberInput = document.getElementById("numberInput");
    let result = document.getElementById("result");

    checkButton.addEventListener("click", checkNumber);
    resetButton.addEventListener("click", resetFields);

    function checkNumber() {
        let number = numberInput.value;

        if (number % 3 === 0 && number % 5 === 0) {
            result.textContent = "FizzBuzz";
        } else if (number % 3 === 0) {
            result.textContent = "Fizz";
        } else if (number % 5 === 0) {
            result.textContent = "Buzz";
        } else {
            result.textContent = "The number is neither divisible by 3 nor by 5.";
        }
    }

    function resetFields() {
        numberInput.value = "";
        result.textContent = "";
    }
});
