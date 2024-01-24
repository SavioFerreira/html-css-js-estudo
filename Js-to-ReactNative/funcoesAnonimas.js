 
// Para executar esse tipo de função, devemos atribuir a uma variável 
//essa função (Armazenar a  função em uam variável), ou chamar a função por dentro de outra

const nomes = function (x, y){
    return `${x} e ${y}`;
}

console.log(nomes('savio', 'ferreira'));

const  mostrarNomes = function (x, y, func = nomes) {
    console.log(func(x, y))
}

mostrarNomes('teste', 'reteste');

mostrarNomes('teste', 'reteste', function (x, y){
    return console.log(`${y} ${x} `);
});

// Toda arrow function é anônima
mostrarNomes('teste', 'reteste', (x, y) => console.log(`${y} ${x}`));

// Não é orbigatório utilizar a palavra reservada function para instanciar
// uma função como parametro de um objeto, isso foi incluído a partir do ecma script 6

