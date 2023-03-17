
class NumberPerfect {
  constructor(serie) {
    this.serie = serie;
  }

  perfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum === num;
  }

  sumNumberPerfect() {
    const sumar = this.serie.filter(this.perfect).reduce((acc, num) => acc + num, 0);
    return sumar;
  }
}

const serie = [6, 5, 25, 24, 28, 34, 29, 633];
const np = new NumberPerfect(serie);
const result = np.sumNumberPerfect();

document.getElementById("resultado").textContent = "La suma de los números perfectos es: " + result;