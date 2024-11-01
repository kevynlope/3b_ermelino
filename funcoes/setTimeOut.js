//setTimeout(função, tempo ms)
setTimeout(function(){
    console.log("tempo esgotado")
}, 4000)

//setInterval (função, tempo ms)
let fps = Math.round(Math.random() * 30)
const intervalo1 = setInterval (function() {
    console.clear()
    console.log("fps:" + fps)
    fps = fps + 1
}, 1000)

setTimeout(function(){
    clearInterval(intervalo1)
    console.log("Conexão")
}, 5000)


