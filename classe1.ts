class Pessoa {
  
   nome: string;
    idade: number;

  constructor( nome: string , idade: number) {
    this.nome = nome;
    this.idade = idade;
   } 

}

const pessoa = new Pessoa("Guilherme", 15);
console.log(pessoa.nome , "\n" ,pessoa.idade);
