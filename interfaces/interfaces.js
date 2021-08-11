"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: 'Jonas', idade: 27, altura: 1.75})
pessoa.saudar('Skywalker');
// Usando classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente;
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    // Math.pow(3, 10)
    // 3 ** 10
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(2, 8));
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const X = 2;
const Y = 3;
const Z = 4;
X.log();
Y.log();
Z.log();
const cli = {
    nome: 'Pedro',
    idade: 27,
    toString() { return this.nome; }
};
cli.log();
//# sourceMappingURL=interfaces.js.map