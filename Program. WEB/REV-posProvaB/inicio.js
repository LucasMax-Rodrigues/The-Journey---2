const lbl2 = document.getElementById("lbl2")
const email = document.getElementById("inptEmail")
const perfil = document.getElementById("inptPerfil")
const btn = document.getElementById("btn")
let redirecionar = false

const perfilAdmin = "Professor"

btn.onclick = () => {
    if (email.value != "" && perfil.value != ""){
        if (validate(perfil.value)){
            lbl2.innerHTML = "Sucesso"
            window.location.href = "front/tabela.html"
            return
        }
        else{
            lbl2.innerHTML = "Erro"
            return
        }
    }
    else{
        lbl2.innerHTML = "Erro"
        return
    }
}

function validate(perfil){
    if (perfil == perfilAdmin){
        return true
    }
    return false
}