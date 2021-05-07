let cuenta = new Cuenta ();
let cuentaPruebas = new Cuenta ();

constructor ()
{
    saldo
}

let boton;
boton = document.getElementById("consult");
boton.addEventListener("click", consultarSaldo);

function consultarSaldo()
{
    let valor =0.0;
    let nroCuenta= docuemnt.getElementById("CuentaN°").value;
    cuenta.saldo=valor;

    return valor;
}

function depositarDinero ()
{
    let nroCuenta = document.getElementById("n°decuentaAdepositar"),value;
    let nroCuenta2 = document.getElementById ("n°decuenta").value;
    let saldo = document.getElementById ("Dep").value;
    nroCuenta2.saldo += saldo;

    return nroCuenta2.saldo;
}

function retirarDinero ()
{
    let nroCuenta = document.getElementById ("NroDecuenta").value;
    let saldoRetirado = document.getElementById("Retirar").value;
    nroCuenta.saldo -= saldoRetirado;

    return;

}