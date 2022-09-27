class Auto {
  constructor() {
    this.posX = 0;
    this.posY = 0;
  }

  mover() {
    return this.posX.toString() + ","+this.posY.toString();
  }
}

export default Auto;
