class RangoNumeros {
  constructor(init, fin) {
    this.init = init;
    this.fin = fin;
  }

  getNumeros() {
    let number = [];
    for (let i = this.init; i < this.fin; i++) {
      number.push(i);
    }
    return number;
  }

  printNumeros() {
    const resultado = document.getElementById("resultado");
    resultado.innerText = `Números en el rango (${this.init} - ${this.fin}) sin contar el último sería: ${this.getNumeros()}`;
  }
}

const rango = new RangoNumeros(4, 10);
rango.printNumeros();