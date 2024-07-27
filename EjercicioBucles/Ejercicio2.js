let num;
do{num = parseInt(prompt("Ingrese un numero"));
if(num>0)
{
    console.log(`El numero ${num} es positivo`);
}
else if(num<0)
{
    console.log(`El numero ${num} es negativo`);
}
}while(num!=0);