class FindNumberPar {
  constructor(num) {
    this.num = num;
  }

  getParNumbers() {
    const digits = this.num.toString().split('');
    const evenDigits = digits.filter(digit => digit % 2 === 0);
    return evenDigits.map(digit => parseInt(digit));
  }
}

function findParNumbers() {
  const num = document.getElementById("num").value;
  const resultElement = document.getElementById("result");

  if (isNaN(num)) {
    resultElement.textContent = "Ingresa un número válido";
    return;
  }

  const n = new FindNumberPar(num);
  const parNumbers = n.getParNumbers();

  if (parNumbers.length === 0) {
    resultElement.textContent = "No hay números pares en el número ingresado";
  } else {
    const resultString = "Los números pares en " + num + " son: " + parNumbers.join(", ");
    resultElement.textContent = resultString;
  }
}