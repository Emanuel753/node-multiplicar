const fs = require('fs');

let listarTabla = (base,limite = 10) =>{
    for (let i = 1; i <= limite; i++) {
       console.log(`${base} * ${i} = ${base * i}`);       
    }
}

let crearArchivo = (base) =>{

    return new Promise((resolve,reject)=>{
let data = '';

 if( !Number(base)){
    reject("Ingrese un numero valido");
    return;
 }

for (let i = 1; i < 11; i++){
    data +=`${base} * ${i} = ${base * i}\n`;
}


fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) 
  reject(err)
  else
  resolve(`Archivo creado: tabla-${base}.txt`);
  
});



    })
}

module.exports = {crearArchivo, listarTabla};