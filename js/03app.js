function calcularSalarioNeto(){
    let puesto = parseInt(document.getElementById('puesto').value);
    let horas = parseInt(document.getElementById('horas').value);
    let anios = parseInt(document.getElementById('anios').value);
    let sueldohora=0;
    switch(puesto){
        case 1: sueldohora=300;break;
        case 2: sueldohora=100;break;
        case 3: sueldohora=120;break;
    }
    let sueldoBase=sueldohora*horas;
    let canastabasica=parseFloat(sueldoBase*0.025);
    let apoyo=parseFloat(sueldoBase*0.05);
    let antiguedad= parseFloat(anios*150);
    let estimulo=parseFloat(sueldoBase*0.02);
    let totalpercepciones=parseFloat(sueldoBase+canastabasica+apoyo+antiguedad+estimulo);
    let isr=parseFloat(sueldoBase*0.15);
    let serviciosalud=parseFloat(sueldoBase*0.035);
    let afore=parseFloat(sueldoBase*0.04);
    let sindicato=parseFloat(sueldoBase*0.01);
    let totaldeducciones=parseFloat(isr+serviciosalud+afore+sindicato);
    let salarioneto=parseFloat(totalpercepciones+totaldeducciones);
    document.getElementById("sueldobase").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
    document.getElementById("apoyos").innerHTML="<h3>$"+apoyo.toFixed(2)+"</h3>";
    document.getElementById("canastabasica").innerHTML="<h3>$"+canastabasica.toFixed(2)+"</h3>";
    document.getElementById("antiguedad").innerHTML="<h3>$"+antiguedad.toFixed(2)+"</h3>";
    document.getElementById("estimulo").innerHTML="<h3>$"+estimulo.toFixed(2)+"</h3>";
    document.getElementById("totalpercepciones").innerHTML="<h3>$"+totalpercepciones.toFixed(2)+"</h3>";
    document.getElementById("isr").innerHTML="<h3>$"+isr.toFixed(2)+"</h3>";
    document.getElementById("serviciodesalud").innerHTML="<h3>$"+serviciosalud.toFixed(2)+"</h3>";
    document.getElementById("afore").innerHTML="<h3>$"+afore.toFixed(2)+"</h3>";
    document.getElementById("sindicato").innerHTML="<h3>$"+sindicato.toFixed(2)+"</h3>";
    document.getElementById("totaldeducciones").innerHTML="<h3>$"+totaldeducciones.toFixed(2)+"</h3>";
    document.getElementById("salarioneto").innerHTML="<h3>$"+salarioneto.toFixed(2)+"</h3>";

}