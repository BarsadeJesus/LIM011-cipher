const cero=document.getElementById("cero");
const first=document.getElementById("first");
const second=document.getElementById("second");

// boton siguiente
const siguiente=document.getElementById("next");
siguiente.addEventListener('click',() => {
  cero.classList.add("hide");
  first.classList.remove("hide");
  second.classList.add("hide");
})
//boton volver
const volver=document.getElementById("volver");
volver.addEventListener('click', () => {

  cero.classList.remove("hide");
  first.classList.add("hide");
  second.classList.add("hide");
  document.getElementById("nomColaborator").value='';
  document.getElementById("dni").value='';
  document.getElementById("lista").value=1;

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
  let dniColaborator=document.getElementById('dni').value;
  
  document.getElementById('nomColaboradorC').value = window.cipher.encode(nameColaborator, offset);
  document.getElementById('dniCif').value=window.cipher.encodeDni(dniColaborator, offset);
  

})

const butnD=document.getElementById("btnD");
butnD.addEventListener('click', () => {

  const offset=parseInt(document.getElementById('numCipher').value);
  //Cifrado del Nombre
  let nameColaboratorD=document.getElementById('nomColaboradorC').value;
  let dniColaboratorD=document.getElementById('dniCif').value;
  
  document.getElementById('nomColaboradorD').value=window.cipher.decode(nameColaboratorD, offset);
  document.getElementById('dniDes').value=window.cipher.decodeDni(dniColaboratorD, offset);


     

})
