const calcular=()=>{
    var producto = document.querySelector("#producto").value;
    var img=document.querySelector("#imagen");
    var precio=document.querySelector("#precio");

    var costo=0;
    var plazo=0;
    var aumento= 0;

    img.innerHTML=`<img src="img/${producto}.jpg" width=400px>`;
    switch(producto){
        case "cemento": costo=142;break;
        case "disco": costo=81;break;
        case "tabla": costo=219;break;
        case "clavos": costo=39;break;
        case "cancel": costo=11845;break;
    }
    precio.innerHTML=`<h3>Precio: $ ${costo.toFixed(2)} MXN</h3>`;
    var uno=document.querySelector("#uno");
    var dos=document.querySelector("#dos");
    var tres=document.querySelector("#tres");
    var cantidad=document.querySelector("#cantidad").value;

    if(uno.checked){
        plazo=6;
        aumento=0.10;
    }else if(dos.checked){
        plazo=18;
        aumento=0.20;
    }
    else{
        plazo=36;
        aumento=0.30;
    }
    var contado=costo*cantidad;
    var credito=contado+(contado*aumento);
    var abono=credito/plazo;
    document.querySelector("#contado").innerHTML=`<h3>Precio de Contado: $ ${contado.toFixed(2)} MXN</h3>`;
    document.querySelector("#credito").innerHTML=`<h3>Precio a credito: $ ${credito.toFixed(2)} MXN</h3>`;
    document.querySelector("#abono").innerHTML=`<h3>Abono mensual: $ ${abono.toFixed(2)} MXN</h3>`;
}