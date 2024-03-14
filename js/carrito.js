let nombreUsuario = prompt("Ingresá tu nombre");

function primeraLetraMayuscula(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

function recorrerTodoElArray(){
productos.forEach(producto => {
    listado += primeraLetraMayuscula(producto.tipo) + ": " + primeraLetraMayuscula(producto.nombre) + "\n";
});
alert(listado);
}

while(nombreUsuario === ""){
    alert("Que nombre choto. Ingresá algo por lo menos.")
    nombreUsuario = prompt("Ingresá tu nombre, dale bebuli");
}

alert("¡Hola " + nombreUsuario + "! Estamos felices de recibirte en Almacén Paykuna!");


//cartel descuento

let aviso = "¡Tenemos los mejores descuentos para vos!.\nSi el total de tu compra supera los $20.000, tendrás un 10% de descuento.\nSi el total de tu compra supera los $50.000, tendrás un descuento del 15%."

alert(aviso);

const productos = [
    {
        nombre: "lechuga",
        tipo: "verduras",
        precio: 1500
    },
    {
        nombre: "pepino",
        tipo: "verduras",
        precio: 3400
    },
    {
        nombre: "banana",
        tipo: "frutas",
        precio: 1750
    },
    {
        nombre: "silla",
        tipo: "muebles",
        precio: 11500
    },
    {
        nombre: "palta",
        tipo: "frutas",
        precio: 4000
    }
]

//qué desea comprar?

let eleccion = prompt("¿Que es lo que estás buscando?\nFrutas\nVerduras\nAmbas").toLocaleLowerCase();

//validacion, si no es ninguna de las tres opciones, vuelve a preguntar
while (eleccion != "frutas" && eleccion != "verduras" && eleccion != "ambas") {
    alert("La opción: " + eleccion + " es incorrecta, ingresa de nuevo");
    eleccion = prompt("¿Que es lo que estás buscando?\nFrutas\nVerduras\nAmbas.\n\n(Debes ingresar alguna de las tres palabras.)").toLocaleLowerCase();
}

//si eligió verdura, le tienen que aparecer los productos cuyo apartado sea verdura
alert("Elegiste " + eleccion + ". Estas son las opciones disponibles:");

let sumaTotal = 0;
let listado = "";

if (eleccion === "ambas") {
    recorrerTodoElArray();
    for (let i = 0; i < productos.length; i++) {
        alert(primeraLetraMayuscula(productos[i].nombre));
        let cantidad = prompt("¿Cuántas unidades de " + primeraLetraMayuscula(productos[i].nombre) + " querés?");
        while(cantidad<0){
            cantidad = prompt("¿Cuántas unidades de " + primeraLetraMayuscula(productos[i].nombre) + " querés?");
        }
        let sumaProducto = cantidad * productos[i].precio;
        alert("El valor de tu compra de " + cantidad + " unidades de " + primeraLetraMayuscula(productos[i].nombre) + " es de $" + sumaProducto);
        sumaTotal = sumaTotal + sumaProducto;
    }
}
else {
    const elegidos = productos.filter(productos => productos.tipo === eleccion);

    for (let i = 0; i < elegidos.length; i++) {
        alert(primeraLetraMayuscula(elegidos[i].nombre));
        let cantidad = prompt("¿Cuántas unidades de " + primeraLetraMayuscula(elegidos[i].nombre) + " querés?");
        while(cantidad < 0){
            cantidad = prompt("¿Cuántas unidades de " + primeraLetraMayuscula(elegidos[i].nombre) + " querés?");
        }
        let sumaProducto = cantidad * elegidos[i].precio;
        alert("El valor de tu compra de " + cantidad + " unidades de " + primeraLetraMayuscula(elegidos[i].nombre) + " es de $" + sumaProducto);
        sumaTotal = sumaTotal + sumaProducto;
    }
}

if (sumaTotal > 50000) {
    alert("¡Felicitaciones! Por el total de tu compra de $" + sumaTotal + " has obtenido un descuento del 15%. Tu nuevo total es $" + sumaTotal * 0.85);
}
else if (sumaTotal > 20000) {
    alert("¡No está tan mal! Por el total de tu compra de $" + sumaTotal + " has obtenido un descuento del 10%. Tu nuevo total es $" + sumaTotal * 0.9);
}
else {
    alert("El total de tu compra es de $" + sumaTotal);
}
