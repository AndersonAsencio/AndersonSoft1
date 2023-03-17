class SumDivisors {
  constructor(num, init) {
    this.num = num;
    this.init = init;
  }

  getResult() {
    let result = 0;
    for (let i = this.init; i < this.num; i++) {
      if (this.num % i === 0) {
        result += i;
      }
    }
    return result;
  }

  printResult() {
    const resultEl = document.getElementById("result");
    resultEl.innerText = `La suma de los divisores de ${this.num} son: ${this.getResult()}`;
  }
}

function calculate() {
  const num = parseInt(document.getElementById("number").value);
  const init = parseInt(document.getElementById("init").value);
  const s = new SumDivisors(num, init);
  s.printResult();
}