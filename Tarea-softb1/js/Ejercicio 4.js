class Potencias {
  constructor(numbers) {
    this.numbers = numbers;
  }

  getResult() {
    const result = [];
    for (let i = 0; i < this.numbers.length; i++) {
      result.push(Math.pow(this.numbers[i], this.numbers[i]));
    }
    return result;
  }
}

function calcular() {
  const numbers = document.getElementById("numbers").value.split(",").map(Number);

  const p = new Potencias(numbers);
  const result = p.getResult();

  document.getElementById("result").innerHTML = `El resultado de elevar los números ${numbers.join(", ")} a sí mismos es: ${result.join(", ")}`;
}