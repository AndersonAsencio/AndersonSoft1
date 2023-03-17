class FirstDigit {
  constructor(num) {
    this.num = num;
  }

  getFirstDigit() {
    const number = this.num.toString();
    const firstChar = number.charAt(0);
    const digit = parseInt(firstChar);
    return digit;
  }
}

function obtenerPrimerDigito() {
  const num = document.getElementById("numero").value;
  const firstDigit = new FirstDigit(num);
  const resultado = document.getElementById("resultado");
  resultado.textContent = `El primer dígito del número ${num} es ${firstDigit.getFirstDigit()}`;
}
