window.cipher = {
  encode: (string, offset) => {
    let cadena = '';
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    for (let i = 0; i < string.length; i++) {
      //  Obtengo el codigo ascii de la letra
      const codeAsci = string.charCodeAt(i);
      if (codeAsci !== 32) {
        //  Obtengo la posicion de la nueva posicion(posicion desplazada)
        const posDesp = ((codeAsci - 65 + offset) % 26) + 65;
        //  Obtengo la letra de la nueva posicion
        const letDesp = String.fromCharCode(posDesp);
        cadena += letDesp;
      } else {
        cadena += ' ';
      }
    }
    return cadena;
  },

  encodeDni: (stringDni, offset) => {
    let cadenaDni = '';
    for (let i = 0; i < stringDni.length; i++) {
      const codeAsciDni = stringDni.charCodeAt(i);
      const posDespDni = ((codeAsciDni - 48 + offset) % 10) + 48;
      const nDespDni = String.fromCharCode(posDespDni);
      cadenaDni += nDespDni;
    }
    /* for (let i = 0; i < 8; i++) {
      //  Obtengo el codigo ascii del numero
      const codeAsciDni = stringDni.charCodeAt(i);
      //  Obtengo la posicion de la nueva posicion(posicion desplazada)
      const posDespDni = codeAsciDni + 100 + offset;
      //  Obtengo la letra de la nueva posicion
      const nDespDni = String.fromCharCode(posDespDni);
      cadenaDni += nDespDni;
    } */
    return cadenaDni;
  },

  decode: (string, offset) => {
    let cadenaD = '';
    for (let i = 0; i < string.length; i++) {
      //  Obtengo el codigo ascii de la letra
      const codeAsciD = string.charCodeAt(i);
      if (codeAsciD !== 32) {
        //  Obtengo la posicion de la nueva posicion(posicion desplazada)
        const posDespD = ((codeAsciD + 65 - offset) % 26) + 65;
        //  Obtengo la letra de la nueva posicion
        const letDespD = String.fromCharCode(posDespD);
        cadenaD += letDespD;
      } else {
        cadenaD += ' ';
      }
    }
    return cadenaD;
  },

  decodeDni: (stringDni, offset) => {
    let cadenaDniD = '';
    for (let i = 0; i < stringDni.length; i++) {
      //  Obtengo el codigo ascii del numero
      const codeAsciDniD = stringDni.charCodeAt(i);
      //  Obtengo la posicion de la nueva posicion(posicion desplazada)
      const posDespDniD = ((codeAsciDniD - 48 - offset + 1000) % 10) + 48;
      //  Obtengo la letra de la nueva posicion
      const nDespDniD = String.fromCharCode(posDespDniD);
      cadenaDniD += nDespDniD;
    }
    /* for (let i = 0; i < 8; i++) {
      //  Obtengo el codigo ascii del numero
      const codeAsciDniD = stringDni.charCodeAt(i);
      //  Obtengo la posicion de la nueva posicion(posicion desplazada)
      const posDespDniD = codeAsciDniD - 100 - offset;
      //  Obtengo la letra de la nueva posicion
      const nDespDniD = String.fromCharCode(posDespDniD);
      cadenaDniD += nDespDniD;
    } */
    return cadenaDniD;
  },
};
