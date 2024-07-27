alert("Bienvenidos al juego ADIVINA EL NUMERO");
let num;
const clave = 8;
do{num = parseInt(prompt("Ingrese un numero"));
if(num<clave)
{
    console.log(`El numero es mayor a ${num}`);
}
else if(num>clave)
{
    console.log(`El numero  es menor a ${num}`);
}
}while(num!=clave);
