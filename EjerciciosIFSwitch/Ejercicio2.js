let user = "Rodrigo";
let password = "Hola";

let Usuario = prompt("Ingrese nombre de Usuario");
let Contra =  prompt('Ingrese Contraseña');

if(Usuario===user)
{
    if(password===Contra)
    {
        alert(`Bienvenido al Sistema ${user}`);
    }
    else{ alert("Contraseña Incorrecta")}
}
else
{
    alert("Usuario Incorrecto");
}