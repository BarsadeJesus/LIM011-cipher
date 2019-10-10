window.cipher = {
  encode: (string, offset) => {
      let cadena='';
      for(i=0; i<string.length ; i++) {
        //Obtengo el codigo ascii de la letra
        let codeAsci = string.charCodeAt(i);
        if(codeAsci !== 32) {
        //Obtengo la posicion de la nueva posicion(posicion desplazada)
          let posDesp = ((codeAsci-65 + offset)%26)+65;
          //Obtengo la letra de la nueva posicion
          let letDesp = String.fromCharCode(posDesp);
          cadena = cadena + letDesp;
         } else {
          cadena = cadena + ' ';
         }
       }
       return cadena;
},
   decode: (string,offset) => {

     let cadenaD='';
     for(i=0; i<string.length ; i++){
       //Obtengo el codigo ascii de la letra
       let codeAsciD=string.charCodeAt(i);
       console.log(codeAsciD);
       if (codeAsciD!==32){
       //Obtengo la posicion de la nueva posicion(posicion desplazada)
        let posDespD=((codeAsciD+65 - offset)%26)+65;
        //Obtengo la letra de la nueva posicion
        let letDespD=String.fromCharCode(posDespD);
         cadenaD=cadenaD+letDespD;
       }
       else{
         cadenaD= cadenaD + " ";
       }
   }
   return cadenaD;
 }
}
