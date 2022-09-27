import Auto from "./autoDirigido.js";

describe("posicionInicial", () => {
  let auto = new Auto();
  it("deberia mostrar que esta ubicado en la posicion 0,0 ", () => {
    expect(auto.mover()).toEqual("0,0");
  });
});
