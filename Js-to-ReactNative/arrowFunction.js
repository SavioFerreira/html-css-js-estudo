// Possui duas funções: uma para encurtar a instanciação de uma função
// e também para ter acesso direto ao operador this da função que está chamando.

function PegarNome(nome) {
    console.log(nome);
    return `O nome digitado foi ${nome}`;
}

 PegarNome_arrow = (nomeEntrada) =>  {
    let nome = nomeEntrada;
    console.log(nome + " é o mesmo: " + nomeEntrada);
    return `O nome digitado foi ${this.nome}`;
}

PegarNome_arrow_returnImplicito = (palavra) => console.log(`A palavra: \*${palavra}\* foi escolhida`);

PegarNome("savio");
PegarNome_arrow("Pamonha frita");
PegarNome_arrow_returnImplicito("Paçoca");




