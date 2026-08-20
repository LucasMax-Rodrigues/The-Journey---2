const inpt1 = document.getElementById('inpt1')
const inpt2 = document.getElementById('inpt2')
const Plus = document.getElementById('btnPlus')
const Minus = document.getElementById('btnMinus')
const Times = document.getElementById('btnTimes')
const Divided = document.getElementById('btnDivided')
const result = document.getElementById('result')
const btnClear = document.getElementById('btnClear');


btnClear.addEventListener('click', function() {
    inpt1.value = '';
    inpt2.value = '';
    result.innerText = '';
    inpt1.focus();
});

Plus.addEventListener('click', function(){
    const n1 = Number(inpt1.value)
    const n2 = Number(inpt2.value)
    const res = n1 + n2;
    result.innerText = `The result is: ${res}`;
    alert(`Resultado: ${res}`);
    

})

Minus.addEventListener('click', function(){
    const n1 = Number(inpt1.value)
    const n2 = Number(inpt2.value)
    const res = n1 - n2;
    result.innerText = `The result is: ${res}`;
    alert(`Resultado: ${res}`);
})


Times.addEventListener('click', function(){
    const n1 = Number(inpt1.value)
    const n2 = Number(inpt2.value)
    const res = n1 * n2;
    result.innerText = `The result is: ${res}`;
    alert(`Resultado: ${res}`);
})


Divided.addEventListener('click', function(){
    const n1 = Number(inpt1.value)
    const n2 = Number(inpt2.value)
    const res = n1 / n2;
    result.innerText =  `The result is: ${res}`;
    alert(`Resultado: ${res}`);
})
