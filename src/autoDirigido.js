class Auto {
  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.ubicacion = "N";
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
  retrocederenX(){
    this.posX = this.posX - 1;
  }
  retrocederenY(){
    this.posY = this.posY - 1;
  }
  girarDerecha(){
    if(this.ubicacion == "N"){
      this.ubicacion = "O";
      return
    }
    if(this.ubicacion == "S"){
      this.ubicacion = "E";
      return
    }
    if(this.ubicacion == "E"){
      this.ubicacion = "N";
      return
    }
    if(this.ubicacion == "O"){
      this.ubicacion = "S";
      return
    }
  }
  girarIzquierda(){
    if(this.ubicacion == "N"){
      this.ubicacion = "E";
      return
    }
    if(this.ubicacion == "S"){
      this.ubicacion = "O";
      return
    }
    if(this.ubicacion == "E"){
      this.ubicacion = "S";
      return
    }
    if(this.ubicacion == "O"){
      this.ubicacion = "N";
      return
    }
  }
  moverse(){
    if(this.ubicacion == "N"){
      this.avanzarenX();
      return
    }
    if(this.ubicacion == "S"){
      this.avanzarenX();
      return
    }
    if(this.ubicacion == "O"){
      this.avanzarenY();
      return
    }
    if(this.ubicacion == "E"){
      this.retrocederenY();
      return
    }
  }
  leercomando(comando){
    for(var i =0;i<comando.length;i++){
      if(comando[i]== 'A'){
        this.moverse();
      }
      if(comando[i]== 'D'){
        this.girarDerecha();
      }
      if(comando[i]== 'I'){
        this.girarIzquierda();
      }
    }
  }
}

export default Auto;
