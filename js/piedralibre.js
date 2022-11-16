console.log("Bienvenido a Piedra Libre");

let lista_productos = [];

class Producto{
    constructor(nombre,precio,stock){

        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    get_datos(){
        console.log("<----------------------->")
        console.log("Nombre: " , this.nombre);
        console.log("Precio: ", this.precio);
        console.log("");
    }

    get_stock(){

    }


}

for(let i=0 ; i < 2 ; i++){
    let nombre = prompt("Ingrese el nombre de la/las pizza/pizzas");
    let precio = prompt("Ingrese el precio total");
    let stock = prompt("Ingrese la cantidad de unidades");
    let producto = new Producto( nombre , precio, stock);

    lista_productos.push(producto);

}

let monto = parseFloat(prompt("Ingrese el monto total"));
let cuotas = parseFloat(prompt("Seleccione en cuantas cuotas quiere pagar 1-2-3-4"));

calcular_interes ( monto , cuotas );


function calcular_interes ( monto , cuotas ){
    let interes;
    if (cuotas == 1){
        interes = monto * 0,15;
        monto = monto + interes;
        return monto
    }
    else if (cuotas == 2){
        interes = monto * 0,35;
        monto = monto + interes;
        return monto
    }
    else if (cuotas == 3){
        interes = monto * 0,65;
        monto = monto + interes;
        return monto
    }
    else if (cuotas == 4){
        interes == monto * 0,95;
        monto = monto + interes;
        return monto
    }
    else {
        console.log ("Cuota incorrecta");
    }
}

console.log ("Solicitaste: ", monto , " $");
console.log ("En " , cuotas , "cuotas");
console.log("El total del servicio es de: " , calcular_interes( monto , cuotas ));







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


    /*
    console.log( hijo);
    console.log( padre);
    console.log( abuelo);
    */

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
