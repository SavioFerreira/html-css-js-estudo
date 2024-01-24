const sayHello = "Olá, Mundo"

//console.info(sayHello);

const pessoa = {
    nome: "Java",
    idade: 20,
}


// Desestruturação. 
let {nome :  nomeDaPessoa}  = pessoa;
//console.info(nomeDaPessoa);

//Desestruturação em Array.
const [valor] = [10]
//console.log(valor);
