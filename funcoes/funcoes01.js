//const nome = "33"
// DECLARAÇÃO
/*
function dadosUsuario(nome, idade){
if(typeof nome ==='string'
&& typeof idade === 'number'){
console.log('Olá, ' + nome
+ ' sua idade é: ' + idade + ' anos!')
} else {
alert('Por favor, insira nome e idade!')
}
}

// INVOCAÇÃO
dadosUsuario("3Dxls", "21")
dadosUsuario('JJ Fox', 40)


function olaMundo(){
console.log('Olá, mundo!')
}
function olaMundo(mundo){
console.log('Olá, mundo! ' + mundo)
}
const cidade = 'CWD'
function olaCidade(){
console.log('Olá, ' + cidade)
}
function calcular(n1, n2){
return n1+n2
}
const res = calcular(23,3)
console.log("Resultado: "+res)
*/
/*
function vaiTime(){
alert('Meu time é melhor!')
console.log('Gooool!')

}*/
//vaiTime()
function vaiTime(nomeTime, gols){
    if(typeof nomeTime === 'string'
    && typeof gols === 'number'
    ) {
    console.log('O ' + nomeTime +
    ' fez ' + gols + ' gol!' )
    } else {
    alert('Por favor, insira valores solicitados')
    }
    }
    // vaiTime('Flamengo')
    // vaiTime('Coritiba')
    // vaiTime('Internacional')
    // vaiTime('Flamengo', 3)
    // vaiTime('Fla', 'Flu')
    
    const banda = "Linkin Park"
    function retornaAlterado(){
    return banda.toUpperCase()
    }
    console.log(retornaAlterado())