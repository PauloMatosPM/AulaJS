var x = 1

var y = x.toString();

console.log(x + typeof(x))
console.log(y + typeof(y))

var a = 10
var b = 7
var c = 2

console.log(((a+b+c)/3).toFixed(2)) // esse metodo
// delimita a quantidade de casas decimais
// apos a virgula, essa quantidade é passada
// por parametro 

console.log(Number(true))
// number booleanos devolve seu valor no caso 1
console.log(Number(false))
// number em booleanos devolve seu valor no caso 0
console.log(Number("10"))
// number em string devolve seu valor numerico aqui 10
console.log(Number(" 10 "))
// number reconhece mesmo com varios espaços
console.log(Number("Lucas"))
// mas nao reconhece quando ha letras
// devolve o valor numerico

console.log(parseFloat("2.65"))
// do mesmo jeito do parseInt()
// devolve o valor numerico