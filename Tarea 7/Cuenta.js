class Cuenta
{
    #nroCuenta
    #depositar = 0 
    #retirar = 0
    #consultar 
    #saldo = 0.0 


    get nroCuenta()
    {
        return this.#nroCuenta;
    }

    set nroCuenta(value)
    {
        this.#nroCuenta = value;
    }

    get saldo()
    {
        return this.#saldo;
    }

    set saldo (value)
    {
        this.#saldo = value;
    }
}