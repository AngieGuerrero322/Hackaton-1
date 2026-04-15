import { crearCarrito } from "./crearCarrito.js";

function vaciarCarrito(){
    localStorage.setItem("carrito", JSON.stringify([]));
    console.log("Productos eliminados");
    crearCarrito();
}

export{vaciarCarrito}