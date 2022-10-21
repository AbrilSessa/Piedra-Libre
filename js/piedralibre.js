console.log("Bienvenido a Piedra Libre");

let lista_productos = [];

for(let i=0 ; i < 2 ; i++){
    let nombre = prompt("Ingrese el nombre de la pizza");
    let precio = prompt("Ingrese el precio de la pizza");
    let stock = prompt("Ingrese la cantidad");
    let producto = new Producto( nombre , precio, stock);

    lista_productos.push(producto);

}

let monto = parseFloat(prompt("Ingrese su monto a pagar"));
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