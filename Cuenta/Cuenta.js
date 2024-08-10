class cuenta {
    //atributo
    id;
    nombre;
    tipoCuenta;
    saldo;
    //inicializador
    constructor(id, nombre, tipoCuenta, saldo){
        this.id = id;
        this.nombre = nombre;
        this.tipoCuenta = tipoCuenta;
        this.saldo = saldo;
    }
    //metodos

    abonar(dinero){
        this.saldo += dinero;
    }

    debitar(monto){
        this.saldo -= monto;
    }

    consultaSaldo()
    {
        console.log(`Hola, bienvenid@ ${this.nombre}, \n Tu saldo es de ${this.saldo}`);
    }
}

let cuentaRodrigo = new cuenta(2, 'Rodrigo','Monetaria',500);
let cuentaDiego = new cuenta(1500);

cuentaRodrigo.consultaSaldo();
cuentaRodrigo.abonar(900);
cuentaRodrigo.consultaSaldo();
cuentaRodrigo.debitar(500);
cuentaRodrigo.consultaSaldo();
