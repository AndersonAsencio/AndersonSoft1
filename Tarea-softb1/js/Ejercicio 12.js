class LastDigit {
  constructor(num) {
    this.num = num;
  }

  get lastDigit() {
    return parseInt(this.num.toString().slice(-1));
  }

  printLastDigit() {
    console.log(`El último dígito del número ${this.num} es ${this.lastDigit}`);
  }
}

function getLastDigit() {
  const input = document.getElementById('numInput');
  const number = new LastDigit(input.value);
  const result = document.getElementById('result');
  result.textContent = `El último dígito del número ${input.value} es ${number.lastDigit}`;
}