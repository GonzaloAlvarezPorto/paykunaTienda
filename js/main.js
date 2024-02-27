let nombreUsuario = prompt("Ingresá tu nombre");

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
}