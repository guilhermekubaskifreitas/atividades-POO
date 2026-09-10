class Aluno{
  nome: string;
  nota: number;

  constructor(nome: string, nota: number){
    this.nome = nome;
    this.nota = nota;
  }
  aprovado(): boolean{
    return this.nota >=6;
  } 
}
const aluno = new Aluno("Guilherme",9);
console.log(aluno.aprovado());
