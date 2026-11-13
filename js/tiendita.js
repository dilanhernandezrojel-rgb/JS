var btnSave = document.getElementById("btnSave");
var btnEdit = document.getElementById("btnEdit");
var productos=[];

btnSave.onclick=()=>{
    txtNombre=document.getElementById("nombre");
    txtPrecio=document.getElementById("precio");
    txtStock=document.getElementById("stock");
    
    if(txtNombre.value=="" || txtPrecio.value==""){
        //Swal.fire({title: "ERROR!", text: "CAMPOS VACIOS!", icon: "error"});
        alert("Error campos vacios");
        return;
    }


    const producto={
        nombre:txtNombre.value,
        precio:txtPrecio.value,
        stock:txtStock.value
    }
    productos.push(producto);
    console.log(productos)
    localStorage.setItem("productos",JSON.stringify(productos));
    cargarProductos();
    cerrarDialog();
}
const cargarProductos=()=>{
    let posicion=0;
    productos=JSON.parse(localStorage.getItem("productos"));
    tbody=document.getElementById("obtenerproductos");
    var tabla="";
    productos.map((producto)=>{
    tabla+=`<tr class="text-center">
                <td><b>${producto.nombre.toUpperCase()}</b></td>
                <td><b>${parseFloat(producto.precio).toFixed(2)}</b></td>
                <td><b>${parseInt(producto.stock)}</b></td>
                <td>
                    <button class="btn-solid btn-styled theme-danger" onclick="eliminarProducto(${posicion})"><i class="bi bi-trash3"></i></button>
                    <button class="btn-solid btn-styled theme-warning" onclick="editarProducto(${posicion})" data-bs-toggle="dialog" data-bs-target="#editproducto"><i class="bi bi-pencil-square"></i></button>
                </td>
            </tr>`;
            posicion++;
    })
    
    tbody.innerHTML=tabla
}

cargarProductos();

const dialog = document.getElementById("addproducto");

const editarProducto=(posicion)=>{
    const producto=productos[posicion];
    console.log(producto)
    console.log(productos)
    document.getElementById("nombree").value=producto.nombre;
    document.getElementById("precioe").value=producto.precio;
    document.getElementById("stocke").value=producto.stock;
    document.getElementById("posicion").value=posicion;
}

btnEdit.onclick=()=>{
    txtNombre=document.getElementById("nombree");
    txtPrecio=document.getElementById("precioe");
    txtStock=document.getElementById("stocke");
    posicion=document.getElementById("posicion");

    if(txtNombre.value=="" || txtPrecio.value==""){
        alert("Error campos vacios");
        return;
    }
    
    productos[posicion.value].nombre=txtNombre.value;
    productos[posicion.value].precio=txtPrecio.value;
    productos[posicion.value].stock=txtStock.value;
    localStorage.setItem("productos",JSON.stringify(productos));
    cargarProductos();
    cerrarDialoge();
}


function cerrarDialog() {
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("stock").value = "";
    dialog.close();
}
function cerrarDialoge() {
    document.getElementById("editproducto").close();
}

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn-solid theme-success mx-5",
        cancelButton: "btn-solid theme-danger"
    },
    buttonsStyling: false
});
const eliminarProducto=(posicion)=>{
    swalWithBootstrapButtons.fire({
    title: "ELIMINAR REGISTRO",
    text: "Estas seguro de eliminar este registro?!",
    icon: "error",
    showCancelButton: true,
    confirmButtonText: "Si!",
    cancelButtonText: "No",
    reverseButtons: true
    }).then((result) => {
            if(result.isConfirmed){
                try {
                    productos.splice(posicion,1);
                localStorage.setItem("productos",JSON.stringify(productos));
                cargarProductos();
                    swalWithBootstrapButtons.fire({
                        title: "ELIMINAR REGISTRO   ",
                        text: "Se ah eliminado correctamente.",
                        icon: "success"
                    });
                } catch (error) {
                    
                }
                
        }
    });
}

