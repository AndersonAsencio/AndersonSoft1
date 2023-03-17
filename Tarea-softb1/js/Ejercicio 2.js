class NumberPrimo {
  constructor(numbers) {
    this.numbers = numbers;
  }

  isPrimo(num) {
    let numPrimo = true;
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        numPrimo = false;
        break;
      }
    }
    return num > 1 && numPrimo;
  }

  getPrimos() {
    const primos = [];
    for (let i = 0; i < this.numbers.length; i++) {
      if (this.isPrimo(this.numbers[i])) {
        primos.push(this.numbers[i]);
      }
    }
    return primos;
  }
}

const np = new NumberPrimo([6, 5, 3, 7, 11]);
const primos = np.getPrimos();

let result = "Números primos: ";
for (let i = 0; i < primos.length; i++) {
  result += primos[i] + " ";
}
document.getElementById("result").innerHTML = result;