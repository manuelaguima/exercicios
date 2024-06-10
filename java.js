let resposta = document.getElementById('resposta')
function calcular(){
    let resultado = 5 + 3 * 4 - 8 / 2
    console.log (resultado)
    resposta.innerHTML = "O valor é " + resultado
    resposta.style.fontSize ='30px'
}

let resposta1 = document.getElementById('resposta1')
function calcular1(){
    let resultado1 = 9 - 4 * (9 / 3) + (6 / 2)
    console.log(resultado1)
    resposta1.innerHTML ='O valor é ' + resultado1
    resposta1.style.fontSize ='30px'
}

let resposta2 = document.getElementById('resposta2')
function calcular2(){
    let resultado2 = 5.5 + 3.3 / 2.0 * 4.8 + 6.1
    console.log(resultado2)
    resposta2.innerHTML ='O valor é ' + resultado2
    resposta2.style.fontSize ='30px'
}

let resposta3 = document.getElementById('resposta3')
function calcular3(){
    let resultado3 = 7.9 * 3.2 + 5.2 / 3.1 + 7.9
    console.log(resultado3)
    resposta3.innerHTML ='O valor é ' + resultado3
    resposta3.style.fontSize ='30px'
}

let resposta4 = document.getElementById('resposta4')
function calcular4(){
    let resultado4 = ( 5 + 3 ) * 5 / 2 + 8 * 3 
    console.log(resultado4)
    resposta4.innerHTML ='O valor é ' + resultado4
    resposta4.style.fontSize ='30px'
}
let resposta5 = document.getElementById('resposta5')
function calcular5(){
    let resultado5 = ( 7 - 2 ) + 9 / ( 2 + 1 ) * 8 
    console.log(resultado5)
    resposta5.innerHTML = 'O valor é ' + resultado5
    resposta5.style.fontSize ='30px'
}

let resposta6 = document.getElementById('resposta6')
function calcular6(){
let traj1km = 27
let traj1ga = 3.5
let traj2km = 39
let traj2ga = 6.3
let conta = (traj1km + traj2km) / (traj1ga + traj2ga)
console.log('resposta: ', conta)
resposta6.innerHTML = conta.toFixed(3) + "km/gasolina"
}

let resposta7 = document.getElementById('resposta7')
function calcular7(){
    let resultados7 = 7.5 + 6.3 + 8.1
    console.log(resultados7)
    resposta7.innerHTML = 'O valor é ' + resultados7
    resposta7.style.fontSize ='30px'
}

let resposta8 = document.getElementById('resposta8')
function calcular8(){
    let peso1 = 589
    let peso2 = 1973
    let peso3 = 1.47 * 1000
    let peso4 = 2.42 * 1000
    let peso5 = 744
    
    let media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5

    console.log("A média é: "+media)

    resposta8.innerHTML = media
    resposta7.style.fontSize ='30px'
}

function calcular9() {
    let resposta9 = document.getElementById('resposta9')

    let camisaP = Number(document.getElementById('camisaP').value)
    let camisaM = Number(document.getElementById('camisaM').value)
    let camisaG = Number(document.getElementById('camisaG').value)
    
    const precoP = 19;
    const precoM = 22;
    const precoG = 17;

    let totalP = camisaP * precoP
    let totalM = camisaM * precoM
    let totalG = camisaG * precoG
    
    console.log("O valor total só da camisa Pequena é: ",totalP)
    console.log("O valor total só da camisa Média é: ",totalM)
    console.log("O valor total só da camisa Grande é: ",totalG)

    let total = totalP + totalM + totalG

    console.log("O valor total é: ",total)

    resposta9.innerHTML = "O valor final é: R$: "+total.toFixed(2)
    resposta7.style.fontSize ='30px'
}









