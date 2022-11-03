window.alert("hi planet")
var nome = window.prompt("Qual é o seu nome? ")
window.alert("Olá, " + nome)
console.log("o tipo da variavel nome é: " + typeof(nome))

var num1 = 1
var num2 = 2.8
console.log("o tipo da variavel num1 é: " +typeof(num1))
console.log("o tipo da variavel num2 é: " +typeof(num2))

var x = 5
var y = "5"
console.log
console.log ("5 inteiro é igual a 5 string? " +x==y) // verdade pois os valores sao iguais
console.log ("5 inteiro é exatamente igual a 5 string? " +x===y) // falso pois os tipos sao diferentes

var vetor = [1, 2, 3]
console.log("Qual é o primeiro elemento do vetor? " +vetor[0]) // exibira o valor de 1, 
//lembre-se a contagem dos indices comeca de 0


if(10>10){
    console.log("sim, 10 é maior")
} else if(typeof(nome)== "string"){
    console.log("sim o tipo da variavel nome é string")
} else{
    console.log("qualquer coisa")
}

var option = 1
switch(option){
    case 1:
        console.log("opcao 1")
        break
    case 2:
            console.log("opcao 2")
            break
    default:
        console.log("opcao invalida")        
    }

    var sobrenome = prompt("Qual o seu sobrenome? ")
    console.log(sobrenome)


    var contador = 0
   while(contador<3){
     console.log("oi")
     contador++
   }


   do {
    console.log("do while")
    contador++
   } while(contador<=5)