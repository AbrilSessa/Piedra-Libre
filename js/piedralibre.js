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

