import { agregarCarrito } from "./agregarCarrito.js";
import { crearCarrito } from "./crearCarrito.js";

// funciones

function crearProductosDisponibles (productosDisponibles){

    let contenedor = document.getElementById("productosContenedor")
    
    // console.log de prueba
    productosDisponibles.forEach( plato =>{
    console.log("creado en el menu" + plato);

 
    //crear productos
    // card del producto
    let product_card =document.createElement("div");
    product_card.classList.add("product__card");
    // div de la imagen
    let product_bg=document.createElement("div");
    product_bg.classList.add("product_bg");

    let product_img=document.createElement("img");
    product_img.src=plato.imagen;
    // div de product info

    let product_info=document.createElement("div");
    product_info.classList.add("product_info");

    let product_info_tittle=document.createElement("p");
    product_info_tittle.classList.add("product__info-title");
    product_info_tittle.textContent=plato.nombre;

    let product_info_description=document.createElement("p");
    product_info_description.classList.add("product__info-description");
    product_info_description.textContent=plato.descripcion;

    let product_price=document.createElement("p");
    product_price.classList.add("product__price");
    product_price.textContent=`$${plato.precio}`;

    let product_boton=document.createElement("button");
    product_boton.classList.add("product_button");
    product_boton.textContent="🛒 Agregar al carrito";
    product_boton.addEventListener("click", () => {
    agregarCarrito(plato);
    crearCarrito();
    });

    // agregando hijos del product bg
    product_bg.appendChild(product_img);
// agregando hijos del product_info
    product_info.appendChild(product_info_tittle);
    product_info.appendChild(product_info_description);
    product_info.appendChild(product_price);
    product_info.appendChild(product_boton);
    
// Agregando divs a la card
    product_card.appendChild(product_bg);
    product_card.appendChild(product_info);

// Agregar card al contenedor
    contenedor.appendChild(product_card);
 })

}

export{crearProductosDisponibles}