/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

describe("App CI/CD - Pruebas automatizadas", () => {

  beforeEach(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../src/index.html"),
      "utf8"
    );
    document.documentElement.innerHTML = html;

    const { sumar, obtenerValorActual } = require("../src/app.js");
    global.sumar = sumar;
    global.obtenerValorActual = obtenerValorActual;
  });

  test("El contador empieza en 0", () => {
    expect(global.obtenerValorActual()).toBe(0);
  });

  test("Al sumar una vez el contador es 1", () => {
    global.sumar();
    expect(global.obtenerValorActual()).toBe(1);
  });

  test("Al sumar tres veces el contador es 3", () => {
    global.sumar();
    global.sumar();
    global.sumar();
    expect(global.obtenerValorActual()).toBe(3);
  });

  test("El boton existe en el HTML", () => {
    expect(document.getElementById("btnSumar")).not.toBeNull();
  });

  test("El titulo H1 existe", () => {
    expect(document.querySelector("h1")).not.toBeNull();
  });

});