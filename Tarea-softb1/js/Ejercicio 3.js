class Potencia {
  constructor(base, expo) {
    this.base = base;
    this.expo = expo;
  }

  getResult() {
    let result = 1;
    for (let i = 0; i < this.expo; i++) {
      result *= this.base;
    }
    return result;
  }
}

function calcular() {
  const base = parseInt(document.getElementById("base").value);
  const expo = parseInt(document.getElementById("expo").value);

  const p = new Potencia(base, expo);
  const result = p.getResult();

  document.getElementById("result").innerHTML = `El resultado de base ${base} con exponente ${expo} es: ${result}`;
}