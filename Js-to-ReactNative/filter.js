const alunos = [
    {nome: 'Savio', idade: 22, altura: 1.78},
    {nome: 'Mago', idade: 16, altura: 1.85},
    {nome: 'Andrew', idade: 25, altura: 1.70}
]

const ehMaior = alunos => alunos.idade >= 18;
const alturaValida = alunos => alunos.altura >= 1.75;

//assim com o array map, o array filter também permite ser chamado novamante, pois 
// a função filter recebe um array como argumento e ela retorna um array. 
// Diferente do map, um filter retorna um valor menor ou igual ao do array principal.
// Ele também cria um novo array em seu retorno 


console.log(alunos.filter(ehMaior).filter(alturaValida));
