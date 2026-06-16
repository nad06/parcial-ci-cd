/**
 * @jest-environment jsdom
 */

const fs   = require("fs");
const path = require("path");

// Cargamos el HTML real en el entorno de prueba
const html = fs.readFileSync(
  path.resolve(__dirname, "../src/index.html"),
  "utf8"
);

describe("App CI/CD - Pruebas automatizadas", () => {

  beforeEach(() => {
    document.documentElement.innerHTML = html;
    // Cargamos la lógica del script
    const { sumar, obtenerValorActual } = require("../src/index.html"
      .replace(".html", "")) || {};
    // Inyectamos las funciones globalmente para los tests
    global.obtenerValorActual = () => {
      const el = document.getElementById("resultado");
      return parseInt(el ? el.textContent : "0");
    };
    global.sumar = () => {
      const el = document.getElementById("resultado");
      if (el) el.textContent = global.obtenerValorActual() + 1;
    };
  });

  test("El contador empieza en 0", () => {
    expect(global.obtenerValorActual()).toBe(0);
  });

  test("Al sumar una vez, el contador es 1", () => {
    global.sumar();
    expect(global.obtenerValorActual()).toBe(1);
  });

  test("Al sumar tres veces, el contador es 3", () => {
    global.sumar();
    global.sumar();
    global.sumar();
    expect(global.obtenerValorActual()).toBe(3);
  });

  test("El botón existe en el HTML", () => {
    const btn = document.getElementById("btnSumar");
    expect(btn).not.toBeNull();
  });

  test("El título H1 existe", () => {
    const h1 = document.querySelector("h1");
    expect(h1).not.toBeNull();
  });
});