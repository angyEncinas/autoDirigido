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
  it("deberia retroceder solo en el eje x", () => {
    auto.retrocederenX();
    expect(auto.mostrarPosicion()).toEqual("0,1N");
  });
  it("deberia retroceder solo en el eje y", () => {
    auto.retrocederenY();
    expect(auto.mostrarPosicion()).toEqual("0,0N");
  });
  it("deberia girar a la derecha mostrando que esta mirando al oeste", () => {
    auto.avanzarenX();
    auto.avanzarenY();
    auto.girarDerecha();
    expect(auto.mostrarPosicion()).toEqual("1,1O");
  });
  it("deberia girar a la derecha mostrando que esta mirando al sur", () => {
    auto.girarDerecha();
    expect(auto.mostrarPosicion()).toEqual("1,1S");
  });
  it("deberia girar a la derecha mostrando que esta mirando al este", () => {
    auto.girarDerecha();
    expect(auto.mostrarPosicion()).toEqual("1,1E");
  });
  it("deberia girar a la derecha mostrando que esta mirando al norte", () => {
    auto.girarDerecha();
    expect(auto.mostrarPosicion()).toEqual("1,1N");
  });
  it("deberia girar a la izquierda mostrando que esta mirando al Este", () => {
    auto.girarIzquierda();
    expect(auto.mostrarPosicion()).toEqual("1,1E");
  });
  it("deberia moverse con comando simple", () => {
    let auto2 = new Auto();
    auto2.leercomando("ADA");
    expect(auto2.mostrarPosicion()).toEqual("1,1O");
  });
  it("deberia moverse con comando complejo", () => {
    let auto3 = new Auto();
    auto3.leercomando("AADAAIA");
    expect(auto3.mostrarPosicion()).toEqual("3,2N");
  });
  it("deberia moverse con comando complejo", () => {
    let auto3 = new Auto();
    auto3.leercomando("DAIAD");
    expect(auto3.mostrarPosicion()).toEqual("1,1O");
  });
  it("deberia verificar que no se puede retroceder si la ubicacion es 0,0", () => {
    let auto4 = new Auto();
    auto4.leercomando("IA");
    expect(auto4.mostrarPosicion()).toEqual("0,0E");
  });
});
