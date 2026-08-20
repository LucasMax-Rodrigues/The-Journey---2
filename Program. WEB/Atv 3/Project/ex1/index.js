const inpt1 = document.getElementById("inpt1")
const inpt2 = document.getElementById("inpt2")
const btnEnviar = document.getElementById("btn")
const resultado = document.getElementById("resultado");

btnEnviar.addEventListener('click', function(){
    const n1 = Number(inpt1.value)
    const n2 = Number(inpt2.value)

    if (n1>n2){
        resultado.innerText = `${n1} > ${n2}`;
        inpt1.style.backgroundColor = "lightgreen";
        inpt2.style.backgroundColor = "burlywood";

    }else if (n2>n1) {
        resultado.innerText = `${n2} > ${n1}`;
        inpt2.style.backgroundColor = "lightgreen";
        inpt1.style.backgroundColor = "burlywood";
    }else{
        resultado.innerText = `${n1} = ${n2}`;
        alert("The numbers are the same");
    }

    
})