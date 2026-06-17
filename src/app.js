function obtenerValorActual() {
  const el = document.getElementById("resultado");
  return parseInt(el ? el.textContent : "0");
}

function sumar() {
  const el = document.getElementById("resultado");
  if (el) {
    el.textContent = obtenerValorActual() + 1;
  }
}

if (typeof document !== "undefined") {
  document.getElementById("btnSumar")
    .addEventListener("click", sumar);
}

// Necesario para Jest
if (typeof module !== "undefined") {
  module.exports = { sumar, obtenerValorActual };
}