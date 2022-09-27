import Auto from "./autoDirigido.js";

describe("posicionInicial", () => {
  let auto = new Auto();
  it("deberia mostrar que esta ubicado en la posicion 0,0 y ubicacion N", () => {
    expect(auto.mostrarPosicion()).toEqual("0,0N");
  });
  it("deberia moverse solo en el eje x", () => {
    auto.avanzarenX();
    expect(auto.mostrarPosicion()).toEqual("1,0N");
  });
  it("deberia moverse solo en el eje y", () => {
    auto.avanzarenY();
    expect(auto.mostrarPosicion()).toEqual("1,1N");
  });
});
