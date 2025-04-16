/*function teste() {
    if(true) {
        var a = 10
        let resultado = 20 
        console.log(resultdo)


    }
    let b = 30
    console.log(a)
    console.log(b)
}
teste()*/



/*funçao*/


/*let num1 = Number(prompt("digite um numer"))
let num2 = Number(prompt("digite um numer"))
function soma(num1, num2) {
    return  num1 + num1
   /* alert(somresultado)

}
let resultado = soma(num1, num2)
alert(resultado)*/






/*calculadora*/


let peso = Number(prompt("digite seu peso"))
let altura = Number(prompt("digite sua altura"))

function imc() {
    return (peso / (altura * altura)).toFixed(2)

}
let IMC = imc(peso, altura)

alert(IMC)


function resultadoFinal() {
    if(imc < 15) {
        alert("abaixo do peso")
    }else if (IMC < 25) {
        alert("peso normal")
    }else if (IMC < 29.9) {
        alert("acima do peso")
    }else{ 
        alert("obesidade")
    }

}

let resFinal = resultadoFinal(IMC)