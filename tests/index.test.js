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
  });

  test("El contador empieza en 0", () => {
    const el = document.getElementById("resultado");
    expect(el).not.toBeNull();
    expect(el.textContent.trim()).toBe("0");
  });

  test("El boton existe en el HTML", () => {
    const btn = document.getElementById("btnSumar");
    expect(btn).not.toBeNull();
  });

  test("El titulo H1 existe", () => {
    const h1 = document.querySelector("h1");
    expect(h1).not.toBeNull();
  });

  test("La pagina tiene titulo en head", () => {
    const title = document.querySelector("title");
    expect(title).not.toBeNull();
  });

  test("El div resultado existe", () => {
    const resultado = document.getElementById("resultado");
    expect(resultado).not.toBeNull();
  });

});