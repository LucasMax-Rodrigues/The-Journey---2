const email = document.getElementById("email")
const senha = document.getElementById("senha")
const elo = document.getElementById("elo")
const entrar = document.getElementById("btnEntrar")

const lu = { email: "lucas@gmail.com", senha: "1234", elo: "ouro"}
const dan = { email: "daniel@gmail.com", senha: "1234", elo: "ouro"}
const mat = { email: "mateus@gmail.com", senha: "1234", elo: "ouro"}
const jo = { email: "joao@gmail.com", senha: "1234", elo: "ouro"}



entrar.addEventListener('click', () =>{
    const emailDigitado = email.value;
    const senhaDigitada = senha.value;
    const eloDigitado = elo.value;

    if ((emailDigitado == lu.email && senhaDigitada == lu.senha && eloDigitado == lu.elo) ||
    (emailDigitado == dan.email && senhaDigitada == dan.senha && eloDigitado == dan.elo) ||
    (emailDigitado == mat.email && senhaDigitada == mat.senha && eloDigitado == mat.elo) ||
    (emailDigitado == jo.email && senhaDigitada == jo.senha && eloDigitado == jo.elo)){
        alert("Login realizado")
        window.location.href= "./tabela/tabela.html"

    }
})

//Outro jeito
// btnEntrar.onclick = () => {
//     console.log("cliquei");
//     validate(inptEmail.value,inptSenha.value);
// }

// function validate(email,senha) {
//     console.log("recebi ",email,senha);
//     if (email == emailCred && senha == senhaCred) {
//         console.log("LOGADO");
//         window.location.href = "./paginas/inicial.html";
//     }
//     else{
//         alert("Campos invalidos");
//     }
// }