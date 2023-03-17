class Divisores {
  constructor(number, init) {
    this.number = number;
    this.init = init;
  }

  getResult() {
    const result = [];
    for (let i = this.init; i <= this.number; i++) {
      if (this.number % i === 0) {
        result.push(i);
      }
    }
    return result;
  }
}

function calcular() {
  const number = parseInt(document.getElementById("number").value);
  const init = parseInt(document.getElementById("init").value);

  const d = new Divisores(number, init);
  const result = d.getResult();

  document.getElementById("result").innerHTML = result.join(", ");
}