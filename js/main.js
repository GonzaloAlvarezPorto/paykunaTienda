const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

//PRIMER ENTREGA

/*let nombreUsuario = prompt("Ingresá tu nombre");

document.getElementById("nombreUsuario").innerText = nombreUsuario;

let busqueda = prompt("¿Qué estás buscando? Verdura, Fruta o Ambas?").toLowerCase();

document.getElementById("busqueda").innerText = busqueda;

let precioLechuga = 1500;
let precioPepino = 1350;
let precioSandia = 4000;

let descuentoDelDiez = 0.9;
let descuentoDelQuince = 0.85;

let aviso = "Si el importe total de tu compra supera los $20000 tendrás un 10% de descuento, si el importe total supera los $50000 el descuento será de un 15%";

while ((busqueda != "verdura") &&
    (busqueda != "fruta") &&
    (busqueda != "ambas")) {
    alert(busqueda + " no es una respuesta correcta.");
    busqueda = prompt("¿Qué estás buscando? Verdura, Fruta o Ambas?").toLowerCase();
}

if (busqueda === "verdura") {
    alert(aviso);

    let cantidadLechuga = prompt("Ingresa la cantidad de Lechuga que querés llevarte");
    while (cantidadLechuga < 0) {
        cantidadLechuga = prompt("Ingresa la cantidad de Lechuga que querés llevarte");
    }
    let cantidadPepino = prompt("Ingresa la cantidad de Pepino que querés llevarte");
    while (cantidadPepino < 0) {
        cantidadPepino = prompt("Ingresa la cantidad de Pepino que querés llevarte");
    }

    document.getElementById("cantidadLechuga").innerText = cantidadLechuga + " unidades de ";
    document.getElementById("cantidadPepino").innerText = cantidadPepino + " unidades de ";

    document.getElementById("Lechuga").innerText = "Lechuga a $";
    document.getElementById("Pepino").innerText = "Pepino a $";

    let resultadoLechuga = (precioLechuga * cantidadLechuga);
    let resultadoPepino = (precioPepino * cantidadPepino);

    let resultadoTotal = resultadoLechuga + resultadoPepino;

    if (resultadoTotal > 50000) {
        alert("Tu importe total incial es $" + resultadoTotal);

        resultadoLechuga = resultadoLechuga * descuentoDelQuince;
        resultadoPepino = resultadoPepino * descuentoDelQuince;
        resultadoTotal = resultadoTotal * descuentoDelQuince;

        alert("Obtuviste un descuento del 15% \nTu importe total a pagar es $" + resultadoTotal + " por: \n" +
            cantidadLechuga + " plantas de Lechuga ($" + resultadoLechuga + "),\n" +
            cantidadPepino + " unidades de Pepino ($" + resultadoPepino + ").");
        document.getElementById("resultadoLechuga").innerText = resultadoLechuga;
        document.getElementById("resultadoPepino").innerText = resultadoPepino;
        document.getElementById("resultadoTotal").innerText = resultadoTotal;
    }
    else if (resultadoTotal > 20000) {
        alert("Tu importe total incial es $" + resultadoTotal);

        resultadoLechuga = resultadoLechuga * descuentoDelDiez;
        resultadoPepino = resultadoPepino * descuentoDelDiez;
        resultadoTotal = resultadoTotal * descuentoDelDiez;

        alert("Obtuviste un descuento del 10% \nTu importe total a pagar es $" + resultadoTotal + " por: \n" +
            cantidadLechuga + " plantas de Lechuga ($" + resultadoLechuga + "),\n" +
            cantidadPepino + " unidades de Pepino ($" + resultadoPepino + ").");
        document.getElementById("resultadoLechuga").innerText = resultadoLechuga;
        document.getElementById("resultadoPepino").innerText = resultadoPepino;
        document.getElementById("resultadoTotal").innerText = resultadoTotal;
    }
    else {
        alert("Tu importe total incial es $" + resultadoTotal);

        alert("No obtuviste descuento \nTu importe total a pagar es $" + resultadoTotal + " por: \n" +
            cantidadLechuga + " plantas de Lechuga ($" + resultadoLechuga + "),\n" +
            cantidadPepino + " unidades de Pepino ($" + resultadoPepino + ").");
        document.getElementById("resultadoLechuga").innerText = resultadoLechuga;
        document.getElementById("resultadoPepino").innerText = resultadoPepino;
        document.getElementById("resultadoTotal").innerText = resultadoTotal;
    }
}

else if (busqueda === "fruta") {
    alert(aviso);

    let cantidadSandia = prompt("Ingresa la cantidad de Sandía que querés llevarte");
    while (cantidadSandia < 0) {
        cantidadSandia = prompt("Ingresa la cantidad de Sandia que querés llevarte");
    }

    document.getElementById("cantidadSandia").innerText = cantidadSandia + " unidades de ";
    document.getElementById("Sandía").innerText = "Sandía a $";

    let resultadoSandia = (precioSandia * cantidadSandia);

    let resultadoTotal = resultadoSandia;

    if (resultadoTotal > 50000) {
        alert("Tu importe total incial es $" + resultadoTotal);

        resultadoSandia = resultadoSandia * descuentoDelQuince;
        resultadoTotal = resultadoTotal * descuentoDelQuince;

        alert("Obtuviste un descuento del 15% \nTu importe total a pagar es $" + resultadoTotal + " por: \n" +
            cantidadSandia + " unidades de Sandia ($" + resultadoSandia + ").");
        document.getElementById("resultadoSandia").innerText = resultadoSandia;
        document.getElementById("resultadoTotal").innerText = resultadoTotal;
    }
    else if (resultadoTotal > 20000) {
        alert("Tu importe total incial es $" + resultadoTotal);

        resultadoSandia = resultadoSandia * descuentoDelDiez;
        resultadoTotal = resultadoTotal * descuentoDelDiez;

        alert("Obtuviste un descuento del 10% \nTu importe total a pagar es $" + resultadoTotal + " por: \n" +
            cantidadSandia + " unidades de Sandia ($" + resultadoSandia + ").");
        document.getElementById("resultadoSandia").innerText = resultadoSandia;
        document.getElementById("resultadoTotal").innerText = resultadoTotal;
    }
    else {
        alert("Tu importe total incial es $" + resultadoTotal);
        alert("No obtuviste descuento \nTu importe total a pagar es $" + resultadoTotal + " por: \n" +
            cantidadSandia + " unidades de Sandia ($" + resultadoSandia + ").");
        document.getElementById("resultadoSandia").innerText = resultadoSandia;
        document.getElementById("resultadoTotal").innerText = resultadoTotal;
    }
}

else if (busqueda === "ambas") {
    alert(aviso);

    let cantidadLechuga = prompt("Ingresa la cantidad de Lechuga que querés llevarte");
    while (cantidadLechuga < 0) {
        cantidadLechuga = prompt("Ingresa la cantidad de Lechuga que querés llevarte");
    }
    let cantidadPepino = prompt("Ingresa la cantidad de Pepino que querés llevarte");
    while (cantidadPepino < 0) {
        cantidadPepino = prompt("Ingresa la cantidad de Pepino que querés llevarte");
    }
    let cantidadSandia = prompt("Ingresa la cantidad de Sandía que querés llevarte");
    while (cantidadSandia < 0) {
        cantidadSandia = prompt("Ingresa la cantidad de Sandia que querés llevarte");
    }

    document.getElementById("cantidadLechuga").innerText = cantidadLechuga;
    document.getElementById("cantidadPepino").innerText = cantidadPepino;
    document.getElementById("cantidadSandia").innerText = cantidadSandia;
    document.getElementById("Sandía").innerText = "Sandía a $";
    document.getElementById("Lechuga").innerText = "Lechuga a $";
    document.getElementById("Pepino").innerText = "Pepino a $";

    let resultadoLechuga = (precioLechuga * cantidadLechuga);
    let resultadoPepino = (precioPepino * cantidadPepino);
    let resultadoSandia = (precioSandia * cantidadSandia);

    let resultadoTotal = resultadoLechuga + resultadoPepino + resultadoSandia;

    if (resultadoTotal > 50000) {
        alert("Tu importe total incial es $" + resultadoTotal);

        resultadoLechuga = resultadoLechuga * descuentoDelQuince;
        resultadoPepino = resultadoPepino * descuentoDelQuince;
        resultadoSandia = resultadoSandia * descuentoDelQuince;
        resultadoTotal = resultadoTotal * descuentoDelQuince;

        alert("Obtuviste un descuento del 15% \nTu importe total a pagar es $" + resultadoTotal + " por: \n" +
            cantidadLechuga + " plantas de Lechuga ($" + resultadoLechuga + "),\n" +
            cantidadPepino + " unidades de Pepino ($" + resultadoPepino + "),\n" +
            cantidadSandia + " unidades de Sandia ($" + resultadoSandia + ").");
        document.getElementById("resultadoLechuga").innerText = resultadoLechuga;
        document.getElementById("resultadoPepino").innerText = resultadoPepino;
        document.getElementById("resultadoSandia").innerText = resultadoSandia;
        document.getElementById("resultadoTotal").innerText = resultadoTotal;
    }
    else if (resultadoTotal > 20000) {
        alert("Tu importe total incial es $" + resultadoTotal);

        resultadoLechuga = resultadoLechuga * descuentoDelDiez;
        resultadoPepino = resultadoPepino * descuentoDelDiez;
        resultadoSandia = resultadoSandia * descuentoDelDiez;
        resultadoTotal = resultadoTotal * descuentoDelDiez;

        alert("Obtuviste un descuento del 10% \nTu importe total a pagar es $" + resultadoTotal + " por: \n" +
            cantidadLechuga + " plantas de Lechuga ($" + resultadoLechuga + "),\n" +
            cantidadPepino + " unidades de Pepino ($" + resultadoPepino + "),\n" +
            cantidadSandia + " unidades de Sandia ($" + resultadoSandia + ").");
        document.getElementById("resultadoLechuga").innerText = resultadoLechuga;
        document.getElementById("resultadoPepino").innerText = resultadoPepino;
        document.getElementById("resultadoSandia").innerText = resultadoSandia;
        document.getElementById("resultadoTotal").innerText = resultadoTotal;
    }
    else {
        alert("Tu importe total incial es $" + resultadoTotal);
        alert("No obtuviste descuento \nTu importe total a pagar es $" + resultadoTotal + " por: \n" +
            cantidadLechuga + " plantas de Lechuga ($" + resultadoLechuga + "),\n" +
            cantidadPepino + " unidades de Pepino ($" + resultadoPepino + "),\n" +
            cantidadSandia + " unidades de Sandia ($" + resultadoSandia + ").");
        document.getElementById("resultadoLechuga").innerText = resultadoLechuga;
        document.getElementById("resultadoPepino").innerText = resultadoPepino;
        document.getElementById("resultadoSandia").innerText = resultadoSandia;
        document.getElementById("resultadoTotal").innerText = resultadoTotal;
    }
}*/

//EXPERIMENTOS PARA SEGUNDA ENTREGA

/*
//cartel bienvenida

function primeraLetraMayuscula(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

alert("¡Hola, estamos felices de recibirte en Almacén Paykuna!");


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

if (eleccion === "ambas") {
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
*/