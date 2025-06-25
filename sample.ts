type Aluno = {
  nome: string;
  serMenina: boolean;
  numero: number;
}

let alunos: Aluno[] = [
  { numero: 1, nome: "ANA JULIA KOMINKIEWICZ", serMenina: true },
  { numero: 2, nome: "HELLEN SORDI", serMenina: true },
  { numero: 3, nome: "LUIZ GUSTAVO SZCZEPKOWSKI", serMenina: false },
  { numero: 4, nome: "MAIARA MARQUES RODRIGUES", serMenina: true },
  { numero: 5, nome: "MANUELA PORTELA FRIEDRICHS", serMenina: true },
  { numero: 6, nome: "MARIA CLARA ANTUNES DE RAMOS", serMenina: true },
  { numero: 7, nome: "MARIA HELENA CAPELIN", serMenina: true },
  { numero: 8, nome: "PAOLA TABOLKA LOCATELLI", serMenina: true },
  { numero: 9, nome: "PEDRO IVO FLACH BERTOLLO", serMenina: false },
  { numero: 10, nome: "VITOR HUGO CAUVILLA DE ALMEIDA", serMenina: false },
  { numero: 11, nome: "YASMIN LURDES DE CHAVES", serMenina: true },
  { numero: 12, nome: "YASMIN RIBEIRO DOS SANTOS", serMenina: true },
];

let posicao = 1;

alunos.forEach(a => {

  if (posicao == alunos.length) {
    console.log(`${a.nome} espere o Professor te entregar uma figura do Bob Esponja`);
  } else {
    if (a.serMenina) {
      console.log(`${a.nome} escolha uma princesa ou figura de animal`);
    } else {
      console.log(`${a.nome} espere o Professor te entregar uma figura de herói`);
    }
  }
  posicao++;
});