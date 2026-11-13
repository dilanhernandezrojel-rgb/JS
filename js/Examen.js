var numero1=document.querySelector("#numeroA");

var calcular=()=>{
    document.querySelector("#resultado").innerHTML=`<img src="img/Loading.gif" width="150px" height="150px">`;
    setTimeout(()=>{
        var valor1=parseInt(numero1.value);
        document.querySelector("#ValorNumeroA").innerHTML = "NÚMERO "+valor1;
        resultado.innerHTML=`1*${valor1} = ${valor1 * 1}<br>
        2*${valor1} = ${valor1 * 2}<br>
        3*${valor1} = ${valor1 * 3}<br>
        4*${valor1} = ${valor1 * 4}<br>
        5*${valor1} = ${valor1 * 5}<br>
        6*${valor1} = ${valor1 * 6}<br>
        7*${valor1} = ${valor1 * 7}<br>
        8*${valor1} = ${valor1 * 8}<br>
        9*${valor1} = ${valor1 * 9}<br>
        10*${valor1} = ${valor1 * 10}<br>`
    }, 2000)
}
var reset=()=>{
    document.getElementById("numeroA").value=1;
    document.querySelector("#ValorNumeroA").innerHTML = 1;
    resultado.innerHTML=`1*1 = 1<br>
    1*2 = 2<br>
    1*3 = 3<br>
    1*4 = 4<br>
    1*5 = 5<br>
    1*6 = 6<br>
    1*7 = 7<br>
    1*8 = 8<br>
    1*9 = 9<br>
    1*10 = 10<br>`;
    
}

numero1.oninput=()=>{calcular();}

