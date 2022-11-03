 var frutas = ["bananas", "maça", "morango", "pera"]
 console.log(frutas.toString())
 // transforma o array em string separando
 // os elementos por virgula
 console.log(frutas.join("-"))
 // transforma o array em string
 // separando pelo separador desejado 

 frutas.pop()  // remove o ultimo elemento do array
 console.log(frutas.toString())

 frutas.push("Melancia") // adiciona um elemento no fim do array
 console.log(frutas.toString())



frutas.shift()
//remove um elemento do inicio
// e desce o indice dos restantes
console.log(frutas.toString())
console.log(frutas[0])

frutas.unshift("Abacaxi")
//adiciona um elemento do inicio
// e sobe o indice dos restantes
console.log(frutas.toString())
console.log(frutas[0])

console.log(frutas.length)
// length retorna um valor indicado o tamanho 
// do array
frutas.push("Manga")

for (var i=0; i<frutas.length; i++){
    console.log(frutas[i])
}

var frutas2 = ["Goiaba"]

var frutas3 = frutas.concat(frutas2)
console.log(frutas3.toString())

console.log (frutas3.sort().toString())
// sort ordena alfabeticamente 
console.log(frutas3.reverse().toString())
// reverse ordena de forma reversa