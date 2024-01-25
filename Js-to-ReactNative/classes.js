// No js também é possível utilizar o paradigma OO.
//por debaixo dos panos, as classes com herança e 
// polimosrfismo estão sendo criadas como Funções e Prototypes, mas essa é
// a maneira de trabalhar com OO em js. 

class Veiculo { 
    constructor(tipo = 'veiculo', combustivel = 'tracao') {
        this.tipo = tipo
        this.combustivel = combustivel
    }

    addVeiculos(... veiculos){
        veiculos.forEach(v => this.veiculos.push(v));
    }
}

class Carro {
    constructor(nome = 'carro'){
        this.nome = nome;
    }
}

class Moto extends Veiculo {
    constructor(nome = 'moto'){
        this.nome = nome;
        
    }
}

class Bike {
    constructor(nome = 'bike'){
        this.nome = nome;
    }
}


class Motor {
    constructor(nome = 'motor', cilindrada = 0){
        this.nome = nome
        this.cilindrada = cilindrada
    }
}



const motoca = new Moto("XT 660");
const motoca_veiculo = new Veiculo(Moto.toString, "Gasolina");