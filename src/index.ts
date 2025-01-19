import Calculadora from "./Calculadora";
import Pessoa from "./Pessoa";

// Precisa instanciar a classe

const calculadora = new Calculadora()

// Instanciando Pessoa

const pessoa = new Pessoa("Leonardo", '123.456.789-00', 34, "M")

calculadora.somar(10,12)
console.log(calculadora.resultado)

// pessoa.setNome("Leonardo")
console.log(pessoa.getNome())

// pessoa.setCpf("123.456.789-00")
// console.log(pessoa.getCpf())