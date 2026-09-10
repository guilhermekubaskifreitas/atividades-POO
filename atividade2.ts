class Produto{
  nome: string;
  preco: GLfloat;
  estoque: number;

  constructor(nome: string, preco:GLfloat, estoque: number){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
}

const produto1 = new Produto("Mamão", 4.90, 1);
const produto2 = new Produto("Sabão em pó", 10.90, 1);
console.log(produto1.nome, "\n", produto1.preco, "\n", produto1.estoque);
console.log(produto2.nome, "\n", produto2.preco, "\n", produto2.estoque);
