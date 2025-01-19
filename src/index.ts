import Calculadora from "./Calculadora";

const calculadora = new Calculadora()

calculadora.somar(10,12)
console.log(calculadora.resultado)

calculadora.multiplicar(100, 100)
console.log(calculadora.resultado)

console.log(calculadora.somar(30, 30))

console.log(calculadora.dividir(100, 0))
console.log(calculadora.dividir(100, 100))