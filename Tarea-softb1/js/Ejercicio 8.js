class NumberArr {
  constructor(num) {
    this.num = num;
  }

  getReverseArray() {
    return this.num.toString()
      .split("")
      .reverse()
      .map(function (a) {
        return parseInt(a, 10);
      });
  }
}

const n = new NumberArr(32456);
const resultEl = document.getElementById("result");
const numberEl = document.getElementById("number");

numberEl.innerText = n.num;
n.getReverseArray().forEach(function(item) {
  const li = document.createElement("li");
  li.innerText = item;
  resultEl.appendChild(li);
});