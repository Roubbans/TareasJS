let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));

let opcion = parseInt(prompt("Que operacion desea realizar:\n"+"1.Sumar\n"+"2. Resta\n"+"3. Multiplicacion\n"+"4. Division\n"+"5. Ninguna"));

switch(opcion)
{
    case 1:
        alert(`El resultado de la suma es: ${(num1+num2)}`);break;
    case 2:
        alert(`El resultado de la resta es: ${(num1-num2)}`);break;
    case 3:
        alert(`El resultado de la multiplicacion es: ${(num1*num2)}`);break;
    case 4:
        alert(`El resultado de la division es: ${(num1/num2)}`);break;
    default:
        alert("Saliendo del Sistema");
}
