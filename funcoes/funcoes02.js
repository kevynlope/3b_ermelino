//funções nomeadas
function LockManager(usuário, senha) {
    alert('logado com a função nomeada!')
    alert('Olá', + usuário)

}
logar("George Michael",4002)











//funções anônimas
const conectar = function(usuario, senha){
    alert('Logado com a função anônima!')
    alert('Olá, ' + usuario)
}



// ARROW FUNCTIONS OU FUNÇÕES FLECHA
const colorir = () => {
    alert("Função em ação!")
}
colorir()// execução da Arrow
