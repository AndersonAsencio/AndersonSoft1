function calculateFactorial() {
  const numberInput = document.getElementById("number");
  const resultDisplay = document.getElementById("result");
  const number = parseInt(numberInput.value);

  if (isNaN(number)) {
    resultDisplay.innerText = "Por favor ingresa un número válido";
  } else {
    const factorial = Factorial.factorial(number);
    resultDisplay.innerText = `El factorial de ${number} es ${factorial}`;
  }
}

class Factorial {
  static factorial(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
}