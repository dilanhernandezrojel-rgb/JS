var btnSave = document.getElementById("btnSave");
const productos=[];

btnSave.onclick=()=>{
    txtNombre=document.getElementById("nombre");
    txtPrecio=document.getElementById("precio");
    
    if(txtNombre.value=="" || txtPrecio.value==""){
        //Swal.fire({title: "ERROR!", text: "CAMPOS VACIOS!", icon: "error"});
        alert("Error campos vacios");
        return;
    }


    const producto={
        nombre:txtNombre.value,
        precio:txtPrecio.value
    }
    productos.push(producto);
    console.log(productos)
    localStorage.setItem("productos",JSON.stringify(productos));

    
}