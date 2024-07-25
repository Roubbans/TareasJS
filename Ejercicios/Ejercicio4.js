let num1 = prompt("Ingrese un Numero: ");
let num2 = prompt("Ingrese otro Numero: ");
let num3 = prompt("Ingrese otro Numero: ");
let mayor=num1;
if(num1>num2 && num1>num3)
{
   alert(`El ${num1} es mayor a ${num2} y a ${num3}`);
}
else if(num2>num1 && num2>num3)
{
    alert(`El ${num2} es mayor a ${num1} y a ${num3}`);
}
else
{
    alert(`El ${num3} es mayor a ${num1} y a ${num2}`);
}