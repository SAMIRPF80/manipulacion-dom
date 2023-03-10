const h1 = document.querySelector("h1");
const in1 = document.querySelector("#calculo1");
const in2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#resultado");

btn.addEventListener("click", clickBoton);

function clickBoton() {
  const sumaIn = parseInt(in1.value) + parseInt(in2.value);
  pResultado.innerText = "Resultado: " + sumaIn;
}
