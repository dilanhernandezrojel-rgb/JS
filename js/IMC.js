var numero1=document.querySelector("#peso");
var numero2=document.querySelector("#masa");

var calcular=()=>{
    var valor1=parseFloat(numero1.value);
    var valor2=parseFloat(numero2.value);
    document.querySelector("#ValorNumeroA").innerHTML = "PESO "+valor1;
    document.querySelector("#ValorNumeroB").innerHTML = "ESTATURA "+valor2;
    document.querySelector("#resultado");
    var IMC = ((valor1)/(valor2*valor2)).toFixed(2);
    if(IMC<18.5){
        resultado.innerHTML=`<div class="text-center mt-5 bg-primary card">${IMC}</div><br>
        BAJO DE PESO`;
    }
    if(IMC>18.5 && IMC<24.9){
        resultado.innerHTML=`<div class="text-center mt-5 bg-success card">${IMC}</div><br>
        NORMAL`;
    }
    if(IMC>25 && IMC<29.9){
        resultado.innerHTML=`<div class="text-center mt-5 bg-accent card">${IMC}</div><br>
        SOBREPESO`;
    }
    if(IMC>30 && IMC<34.9){
        resultado.innerHTML=`<div class="text-center mt-5 bg-secondary card">${IMC}</div><br>
        OBSIDAD I`;
    }
    if(IMC>35 && IMC<39.9){
        resultado.innerHTML=`<div class="text-center mt-5 bg-warning card">${IMC}</div><br>
        OBESIDAD II`;
    }
    if(IMC>40){
        resultado.innerHTML=`<div class="text-center mt-5 bg-danger card">${IMC}</div><br>
        OBESIDAD III`;
    }
}

numero1.onchange=()=>{calcular();}
numero2.onchange=()=>{calcular();}
