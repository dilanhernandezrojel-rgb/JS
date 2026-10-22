var numero1=document.querySelector("#numeroA");
var numero2=document.querySelector("#numeroB");
var operacion=document.querySelector("#operacion");

var calcular=()=>{
    var valor1=parseInt(numero1.value);
    var valor2=parseInt(numero2.value);
    document.querySelector("#ValorNumeroA").innerHTML = "NÚMERO "+valor1;
    document.querySelector("#ValorNumeroB").innerHTML = "NÚMERO "+valor2;
    document.querySelector("#resultado");
    var op=operacion.value;
    if(op=="sumar"){
        resultado.innerHTML=valor1+valor2;
    }
    if(op=="restar"){
        resultado.innerHTML=valor1-valor2;
    }
    if(op=="multiplicar"){
        resultado.innerHTML=valor1*valor2;
    }
    if(op=="dividir"){
        resultado.innerHTML=valor1/valor2;
    }
    if(op=="modulo"){
        resultado.innerHTML=valor1%valor2;
    }
    if(op=="potencia"){
        resultado.innerHTML=valor1**valor2;
    }
}

numero1.oninput=()=>{calcular();}
numero2.oninput=()=>{calcular();}
operacion.onchange=()=>{calcular();}
