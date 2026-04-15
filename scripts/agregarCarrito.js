
function agregarCarrito(plato) {
    console.log("Agregado:", plato);
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let productoEstaEnCarrito=carrito.find(p => p.id === plato.id);

    if(productoEstaEnCarrito){
        productoEstaEnCarrito.cantidad=productoEstaEnCarrito.cantidad+1;
    } else{
        carrito.push({... plato,cantidad:1});
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));

}

export{agregarCarrito}