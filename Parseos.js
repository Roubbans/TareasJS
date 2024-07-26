let telefono = "1234567890";
let tel = Number(telefono);
console.log(typeof telefono);
console.log(typeof tel);

let a = true;
console.log(typeof a);

// Consume todos los valores funcion SPLIT
let telefono2 = "123,432,453,765";
let tel2 = Number(telefono2);
console.log(telefono2.split(","));

//reemplaza el simbolo y toma lo demas
let telefono3 = "12345!67890";
let tel3 = Number(telefono3);
// el replace reemplaza el simbolo declarado y devuelve lo que esta despues de la coma
console.log(telefono3.replace("!",""));
//ParseInt
let edad = "33 años";
console.log(parseInt(edad));

//Como generar un Json
let json = '{"nombre":"Rodrigo","Edad":30}';
console.log(JSON.parse(json));
//Como generar un Json con variables
let nombre = '"Abel"';  //Tener en cuenta la comilla y la doble comilla para enviarlo como variable
let json2 = `{"nombre":${nombre},"Edad":30}`;
console.log(JSON.parse(json2));

let nombree = "Rodrigo";
console.log(eval(new String(nombree)));
