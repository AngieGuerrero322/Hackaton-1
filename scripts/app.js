import { productosDisponibles } from "./productos.js";
import { crearProductosDisponibles } from "./crearCatalogo.js";
import { vaciarCarrito } from "./vaciarCarrito.js";
import { crearCarrito } from "./crearCarrito.js";


// ejecutar funcion al recargar página

document.addEventListener("DOMContentLoaded", () => {
    crearProductosDisponibles(productosDisponibles);
    crearCarrito();

    let botonVaciar = document.getElementById("btn_limpiar_carrito");

    if (botonVaciar) {
        botonVaciar.addEventListener("click", vaciarCarrito);
    }
});
