var valorDia=document.getElementById("valordia");
var dia=document.getElementById("dia");
var mes=document.getElementById("Mes");
var signo=document.getElementById("signo");
var fecha=document.getElementById("Fecha");

const verSigno=()=>{
    let d=parseInt(dia.value);
    let m=mes.value;
    valorDia.innerHTML="Dia "+dia.value;
    fecha.textContent=d+" de "+m;
    var imgSigno="img/signoPortada.jpg";
    switch(m){
        case "ENERO": imgSigno=(d>=20)?"Acuario":"Capricornio";break;
        case "FEBRERO": imgSigno=(d>=19)?"Pisis": "Acuario";break;
        case "MARZO": imgSigno=(d>=21)?"Aries":"Pisis";break;
        case "ABRIL": imgSigno=(d>=20)?"Tauro":"Aries";break;
        case "MAYO": imgSigno=(d>=21)?"Gemini":"Tauro";break;
        case "JUNIO": imgSigno=(d>=21)?"Cancer":"Gemini";break;
        case "JULIO": imgSigno=(d>=23)?"Leo":"Cancer";break;
        case "AGOSTO": imgSigno=(d>=23)?"Virgo":"Leo";break;
        case "SEPTIEMBRE": imgSigno=(d>=23)?"Libra":"Virgo";break;
        case "OCTUBRE": imgSigno=(d>=23)?"Escorpio":"Libra";break;
        case "NOVIEMBRE": imgSigno=(d>=22)?"Sagitario":"Escorpio";break;
        case "DICIEMBRE": imgSigno=(d>=22)?"Capricornio":"Sagitario";break;
    }
    signo.src="img/"+imgSigno+".jpg";
}

document.getElementById("reset").onclick=()=>{
    dia.value = 1;
    mes.value = "ENERO";
    fecha.textContent="Fecha";
    signo.src="img/signoPortada.jpg";
}

dia.oninput=()=>{verSigno()}
mes.onchange=()=>{verSigno()}
