// Possui duas funções: uma para encurtar a instanciação de uma função
// e também para ter acesso direto ao operador this da função que está chamando.

function PegarNome(nome) {
    console.log(nome);
    return `O nome digitado foi ${nome}`;
}
//PegarNome("savio");

 ola = () =>  {
    console.log("io");
    return `Olá mundo`;
}

function Pessoa() {
    this.idade = 0;
    setInterval(function (){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000);
}

new Pessoa


