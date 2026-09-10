class ContaBancaria {

    private saldo: number;

    constructor(saldo: number){
      this.saldo = saldo;
    }
  
  depositar(valor: number): void {
     if (valor > 0)  this.saldo += valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

}

const contabancaria = new ContaBancaria (1000);

console.log(contabancaria.consultarSaldo())
