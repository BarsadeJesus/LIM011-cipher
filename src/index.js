const cero=document.getElementById("cero");
const first=document.getElementById("first");
const second=document.getElementById("second");

const siguiente=document.getElementById("next");
siguiente.addEventListener('click',() => {


  first.classList.remove("hide");
  second.classList.add("hide");
})

const volver=document.getElementById("volver");
volver.addEventListener('click', () => {

  cero.classList.remove("hide");
  first.classList.add("hide");
  second.classList.add("hide");
  document.getElementById("nomColaborator").value='';
  document.getElementById("dni").value='';
  document.getElementById("lista").value='';

  document.getElementById("numCipher").value='';
  document.getElementById("nomColaboradorC").value='';
  document.getElementById("dniCif").value='';
  document.getElementById('nomColaboradorD').value='';
  document.getElementById("dniDes").value='';
})

//CIFRADO
const butn=document.getElementById("btn");
butn.addEventListener('click', () => {

  cero.classList.add("hide");
  first.classList.add("hide");
  second.classList.remove("hide");
  const offset=parseInt(document.getElementById('numCipher').value);
  //Cifrado del Nombre
  let nColaborator=document.getElementById('nomColaborator').value;
  let nameColaborator=nColaborator.toUpperCase();
  //document.get.ElementById('Prueba').value=lengthNameColaborator;
  document.getElementById('nomColaboradorC').value = window.cipher.encode(nameColaborator, offset);
  //document.getElementById('nomColaboradorD').value=cadenaD;
    //Cifrado del dni
    let cadenaDni='';
    let dniColaborator=document.getElementById('dni').value;

    for(i=0; i<8 ; i++){
      //Obtengo el codigo ascii del numero
      let codeAsciDni=dniColaborator.charCodeAt(i);
      //Obtengo la posicion de la nueva posicion(posicion desplazada)
      let posDespDni=codeAsciDni+100+ offset;
      //Obtengo la letra de la nueva posicion
      let nDespDni=String.fromCharCode(posDespDni);
        cadenaDni=cadenaDni+nDespDni;
        document.getElementById('dniCif').value=cadenaDni;
  };
})

const butnD=document.getElementById("btnD");
butnD.addEventListener('click', () => {

  const offset=parseInt(document.getElementById('numCipher').value);
  //Cifrado del Nombre
  let nameColaboratorD=document.getElementById('nomColaboradorC').value;
  //Obtengo la longitud del nombre
  //let lengthNameColaboratorD=nameColaboratorD.length;
  document.getElementById('nomColaboradorD').value=window.cipher.decode(nameColaboratorD, offset);
  let cadenaDniD='';
   let dniColaboratorD=document.getElementById('dniCif').value;
   for(i=0; i<8 ; i++){
     //Obtengo el codigo ascii del numero
     let codeAsciDniD=dniColaboratorD.charCodeAt(i);
     //Obtengo la posicion de la nueva posicion(posicion desplazada)
     let posDespDniD=codeAsciDniD-100 - offset;
     //Obtengo la letra de la nueva posicion
     let nDespDniD=String.fromCharCode(posDespDniD);
       cadenaDniD=cadenaDniD+nDespDniD;
       document.getElementById('dniDes').value=cadenaDniD;
    }
})
