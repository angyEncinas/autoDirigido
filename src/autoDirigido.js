class Auto {
  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.ubicacion = "N"
  }

  mover() {
    return this.posX.toString() + ","+this.posY.toString()+this.ubicacion;
  }
}

export default Auto;
