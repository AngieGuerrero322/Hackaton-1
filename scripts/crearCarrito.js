import { eliminarDelCarrito, sumarPlato, restarPlato,actualizarTotal} from "./botonesCarrito.js";

function crearCarrito (){
    let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let listProducts = document.getElementById("listProducts");

    if (!listProducts) return;
    listProducts.innerHTML = "";

    productosEnCarrito.forEach( plato =>{
    console.log("publicados en carrito" + plato);

    //crear productos
    // li del producto
        // 1.Crear el elemento principal
    const li = document.createElement("li");
    li.classList.add("cart__item");

    // 2.Imagen
    const image = document.createElement("img");
    image.classList.add("cart__img");
    image.src = plato.imagen;

    // 3.Contenedor de datos
    const data = document.createElement("div");
    data.classList.add("cart__data");

    //Título
    const title = document.createElement("p");
    title.classList.add("cart__title");
    title.textContent = plato.nombre;

    //Precio
    const priceEl = document.createElement("p");
    priceEl.classList.add("cart__price");
    priceEl.textContent = "$" + plato.precio*plato.cantidad;

    //Contenedor cantidad
    const quantityBox = document.createElement("div");
    quantityBox.classList.add("cart__addAndSubtract");

    //Botón menos
    const btnMinus = document.createElement("button");
    btnMinus.classList.add("cart__button-add");
    btnMinus.textContent = "-";
    btnMinus.addEventListener("click", () => {
    restarPlato(plato.id);
    crearCarrito();
    });

    //Cantidad
    const quantity = document.createElement("span");
    quantity.classList.add("cart__adds");
    quantity.textContent = plato.cantidad;

    //Botón más
    const btnPlus = document.createElement("button");
    btnPlus.classList.add("cart__button-add");
    btnPlus.textContent = "+";
    btnPlus.addEventListener("click", () => {
    sumarPlato(plato.id);
    crearCarrito();
    });

    // 4. Armar quantity box
    quantityBox.appendChild(btnMinus);
    quantityBox.appendChild(quantity);
    quantityBox.appendChild(btnPlus);

    //5. Armar data
    data.appendChild(title);
    data.appendChild(priceEl);
    data.appendChild(quantityBox);

    //6. Botón eliminar
    const trash = document.createElement("button");
    trash.classList.add("cart__trash");
    trash.textContent = "🗑️";
    trash.addEventListener("click", () => {
    eliminarDelCarrito(plato.id);
    crearCarrito();
    });

    //7. Armar el <li>
    li.appendChild(image);
    li.appendChild(data);
    li.appendChild(trash);

    // 8. Meterlo al carrito
    listProducts.appendChild(li);
    })

    let totalPagar=document.getElementById("total_pagar");
    totalPagar.textContent=`${actualizarTotal()}`;
    
}

export{crearCarrito}