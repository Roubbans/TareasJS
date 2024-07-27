let num;
let total=0;
do{num = parseInt(prompt("Ingrese un numero"));
    total += num;
}while(num!=0);
console.log(`El resultado es: ${total}`);