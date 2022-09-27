class Auto {
  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.ubicacion = "N"
  }

  mostrarPosicion() {
    return this.posX.toString() + ","+this.posY.toString()+this.ubicacion;
  }
  avanzarenX(){
    this.posX = this.posX + 1;
  }
  avanzarenY(){
    this.posY = this.posY + 1;
  }
  girar(){
    if(this.ubicacion == "N"){
      this.ubicacion = "O"
    }
  }
}

export default Auto;
