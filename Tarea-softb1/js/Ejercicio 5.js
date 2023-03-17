class MultiplyTable {
  constructor(base) {
    this.base = base;
  }

  getTable() {
    let table = "";
    for (let i = 1; i <= 12; i++) {
      table += `${this.base} x ${i} = ${this.base * i}<br>`;
    }
    return table;
  }
}

function calcular() {
  const base = document.getElementById("base").value;

  const m = new MultiplyTable(base);
  const table = m.getTable();

  document.getElementById("result").innerHTML = table;
}