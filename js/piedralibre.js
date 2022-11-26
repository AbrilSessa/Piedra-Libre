//getElementById//

let titulo = document.getElementById("titulo");

console.log(titulo);
//console.log(titulo.innerText);

//titulo.innertext = "PEDI TU PIZZA A LA PIEDA";


// getElementsByClassName

let parrafos = document.getElementsByClassName("parrafos");

console.log(parrafos);

console.log(parrafos[0]);
//console.log(parrafos[0].innerText);




let contenedor = document.getElementById("contenedor");
console.log(contenedor);


//contenedor.innerHTML = "<p>NUESTRO MENU</p>";
//contenedor.className = "fondo_verde";


// createElement

let parrafo_js = document.createElement("p");
parrafo_js.innerText = "Nuestro Menu";
parrafo_js.className = "parrafo_rojo";
parrafo_js.style.fontSize = "40px";
parrafo_js.style.textAlign = "center";
parrafo_js.style.fontFamily = "Verdana";



//FORM

let arreglo_de_usuarios = [];

function set_data() {


    let nombre_usuario = document.getElementById("nombre_usuario");
    let numero_usuario = document.getElementById("numero_usuario");


    let usuario = { nombre: nombre_usuario.value, numero: numero_usuario.value };

    arreglo_de_usuarios.push(usuario);

    let arreglo_JSON = JSON.stringify(arreglo_de_usuarios);



    localStorage.setItem("arreglo_de_usuarios", arreglo_JSON);


    let recuperando = localStorage.getItem("arreglo_de_usuarios");

    console.log(recuperando);

    recuperando = JSON.parse(recuperando);

    console.log(recuperando);

}


let boton = document.getElementById("boton");

boton.addEventListener("click", set_data);


//Carrito
let carrito = [];

let btn_compra = document.querySelectorAll(".botonCompra");

console.log(btn_compra);


for (let boton of btn_compra) {

    boton.addEventListener("click", agregar_a_carrito)
}



function agregar_a_carrito(e) {



    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;


    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector("span").textContent;
    let img_producto = abuelo.querySelector("img").src;

    console.log(nombre_producto);
    console.log(precio_producto);
    console.log(img_producto);
    let producto = {

        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad: 1
    }
    carrito.push(producto);
    /* GUARDAR EN LOCAL STORAGE FORMATO JSON*/

    mostrar_carrito(producto);
}


function mostrar_carrito(producto) {

    let fila = document.createElement("tr");
    fila.innerHTML = `<td><img src="${producto.img}"></td>
                    <td>${producto.nombre}</td>
                    <td>${producto.cantidad}</td>
                    <td>${producto.precio}</td>
                    <td><button class="btn btn-danger borrar_elemento">Borrar</td>`;

    console.log(fila);
    let tabla = document.getElementById("tbody");
    tabla.append(fila);



    let btn_borrar = document.querySelectorAll(".borrar_elemento");


    for (let boton of btn_borrar) {

        boton.addEventListener("click", borrar_producto);
    }

}



function borrar_producto(e) {


    let abuelo = e.target.parentNode.parentNode;

    abuelo.remove();

}




let btn_carrito = document.getElementById("mostrar_carrito");

btn_carrito.addEventListener("click", function () {

    let carrito = document.getElementById("carrito");

    if (carrito.style.display != "none") {

        carrito.style.display = "none";
    }
    else {
        carrito.style.display = "flex";
    }

})