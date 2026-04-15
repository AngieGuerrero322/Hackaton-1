
function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter(p => p.id !== id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function sumarPlato(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let producto = carrito.find(p => p.id === id);
    if (producto) {
        producto.cantidad++;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function restarPlato(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let producto = carrito.find(p => p.id === id);
    if (producto) {
        producto.cantidad--;
        if (producto.cantidad <= 0) {
            carrito = carrito.filter(p => p.id !== id);
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));

}

function actualizarTotal() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let totalPagar = 0;
    for(let contador=0; contador<carrito.length; contador++){
        totalPagar=totalPagar+carrito[contador].precio*carrito[contador].cantidad;
    }
    return totalPagar
        
}
export {eliminarDelCarrito, sumarPlato, restarPlato, actualizarTotal}