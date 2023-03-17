class SumDigits {
  constructor(num) {
    this.num = num;
  }

  getSum() {
    const number = this.num.toString();
    let result = 0;
    for (let i = 0; i < number.length; i++) {
      result += parseInt(number[i]);
    }
    return result;
  }
}

function sumDigits() {
  const numberInput = document.getElementById("numberInput");
  const resultDiv = document.getElementById("result");
  const num = parseInt(numberInput.value);
  const sumDigits = new SumDigits(num);
  const sum = sumDigits.getSum();
  resultDiv.innerHTML = `La suma de los dígitos de ${num} es: ${sum}`;
}
