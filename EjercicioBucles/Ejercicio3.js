let num;
do{num = parseInt(prompt("Ingrese un numero"));
if(num%2==0)
{
    console.log(`El numero ${num} es par`);
}
else if(num%2!=0)
{
    console.log(`El numero ${num} es impar`);
}
}while(num!=0);