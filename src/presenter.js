import Auto from "./autoDirigido";

const comando = document.querySelector("#comando");
const form = document.querySelector("#comando-form");
const div = document.querySelector("#resultado-div");
let autoDirigido = new Auto();
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const comandoALeer = comando.value;
  autoDirigido.leercomando(comandoALeer);


  div.innerHTML = "<p>" + "Su posicion actual es: " + autoDirigido.mostrarPosicion() + "</p>";
});
