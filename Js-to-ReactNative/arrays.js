const animes = ['One piece', 'Naruto', 'Dragon Ball', 'Bleach', 'Super Onze', 'Pokemon', 'Hunter x Hunter', 'Avatar', 'Berzerk', 'Solo leveling', 'Boku no hero'];
 
//for Each é um for melhorado, semelhante ao for melhorado do Java. 
// cada elemento possui dois argumentos, sendo nome e posição no array.

animes.forEach( nome =>  {console.log(nome + '\n')});

// o map também é um tipo de for melhorado, mas esse tem um intuido/propósito mais específico.
// pois ele permite modificar as posições do array e no final gerar um novo array com os novos atributos.
// o map permite realizar um mapeamento no array e fazer alterações. com isso um array diferente é criado.
// o array original não será modificado, o map cria outra alocação de memória com o mesmo tamanho do array original
// visto que percorre todas as posições do original.

let animesBons = animes.map( nome => {
    if( nome !== 'One piece') return nome += ' é ruim';
    else if (nome === 'One piece') return nome += ' é o milhor';
    else return nome += 'sem nome';
})

// for com map + operador ternário, mas com opção somente binária.

let animesBons2_0 = animes.map(nome => nome !== 'One piece' ? nome += ' é ruim' : nome += ' é o milhor')

animes.forEach( nome =>  {console.log(nome + '\n')});
animesBons.forEach( nome =>  {console.log(nome + '\n')});
animesBons2_0.forEach( nome =>  {console.log(nome + '\n')});


