let num1;
let num2;
let ingreso = prompt(
    "A continuacion elija lo que desee realizar: \n" +
    "1. Sumar\n"+
    "2. Restar\n"+
    "3 Salir"
);
let opcion = Number(ingreso);
switch(opcion)
{
    /* CASE 1 */
    case 1: 
    console.log("entro");
         num1 =parseInt(prompt("Ingrese un numero "));
         num2 =parseInt(prompt("Ingrese otro numero "));
        console.log(`${num1} + ${num2} = ${(num1 + num2)}`);
        break;
    /* CASE 2 */
        case 2: 
            num1 =parseInt(prompt("Ingrese un numero "));
            num2 =parseInt(prompt("Ingrese otro numero "));
            console.log(`${num1} - ${num2} = ${(num1 - num2)}`);
            break;    

        default:  alert("Saliendo del sistema");break;
}