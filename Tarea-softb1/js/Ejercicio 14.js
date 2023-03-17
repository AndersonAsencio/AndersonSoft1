class Factorial {
  static factorialesArreglo(arreglo) {
    let factoriales = [];
    for (let i = 0; i < arreglo.length; i++) {
      let factorial = 1;
      for (let j = 1; j <= arreglo[i]; j++) {
        factorial *= j;
      }
      factoriales.push(factorial);
    }
    return factoriales;
  }
}

const arreglo = [3, 2, 4];
const factoriales = Factorial.factorialesArreglo(arreglo);
const resultado = document.getElementById("resultado");
resultado.textContent = `Factoriales de ${arreglo}: ${factoriales}`;