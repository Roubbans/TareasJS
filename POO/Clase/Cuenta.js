class cuenta{
    numero_cuenta
    nombre
    saldo
    constructor(saldo)
    {
        this.saldo = saldo;
    }

    abonar(monto)
    {
        this.saldo += monto;
    }
}

let cliente1 = new cuenta();
let cliente2 = new cuenta();
//Inicia con 500 de saldo
cliente1.saldo = 500;
cliente2.saldo = 300;

console.log('Saldo inicial:')
console.log(`Saldo de la cuenta No. 1: ${cliente1.saldo}`)
console.log(`Saldo de la cuenta No. 2: ${cliente2.saldo}\n`)

cliente1.abonar(250);

console.log('Abono a la cuenta No 1: 250')
console.log(`Saldo de la cuenta No. 1: ${cliente1.saldo}`)
console.log(`Saldo de la cuenta No. 2: ${cliente2.saldo}\n`)

cliente2.abonar(100);

console.log('Abono a la cuenta No 2: 100')
console.log(`Saldo de la cuenta No. 1: ${cliente1.saldo}`)
console.log(`Saldo de la cuenta No. 2: ${cliente2.saldo}`)





