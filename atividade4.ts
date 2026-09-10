class Retangulo{
  altura: number;
  largura: number;

  constructor(altura:number, largura:number){
    this.altura = altura;
    this.largura = largura;  
  }
  calcularPerimetro(){
    return this. altura*2 + this. largura*2;
  }
}

const retangulo = new Retangulo(2,4);
console.log(retangulo.calcularPerimetro());
