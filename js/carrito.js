const boton = document.getElementById("boton");

boton.addEventListener("click", function () {

    let nombreUsuario = prompt("Ingresá tu nombre");

    if (nombreUsuario === null) {

        alert("Compra cancelada. ¡Esperamos verte pronto!");
        return;
    }

    const productos = [
        {
            nombre: "lechuga 🥬",
            tipo: "verduras",
            precio: 1500
        },
        {
            nombre: "pepino 🥒",
            tipo: "verduras",
            precio: 3400
        },
        {
            nombre: "banana 🍌",
            tipo: "frutas",
            precio: 1750
        },
        {
            nombre: "silla 🪑",
            tipo: "muebles",
            precio: 11500
        },
        {
            nombre: "palta 🥑",
            tipo: "frutas",
            precio: 4000
        },
        {
            nombre: "puerta 🚪",
            tipo: "muebles",
            precio: 14000
        },
        {
            nombre: "sillón 🛋",
            tipo: "muebles",
            precio: 85000
        },
        {
            nombre: "frutilla 🍓",
            tipo: "frutas",
            precio: 9000
        },
        {
            nombre: "berenjena 🍆",
            tipo: "verduras",
            precio: 4000
        },
        {
            nombre: "yerba 🧉",
            tipo: "almacén",
            precio: 10000
        },
        {
            nombre: "arroz 🍚",
            tipo: "almacén",
            precio: 4500
        },
        {
            nombre: "leche 🥛",
            tipo: "almacén",
            precio: 3200
        }
    ];

    function primeraLetraMayuscula(cadena) {
        return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    }

    function todosLosTipos() {
        const tiposUnicos = ["Generales", "Frutas y Verduras"];
        let resultado = "";
        productos.forEach(producto => {
            let tipo = primeraLetraMayuscula(producto.tipo);
            if (!tiposUnicos.includes(tipo)) {
                tiposUnicos.push(tipo);
            }
        });
        tiposUnicos.sort();
        tiposUnicos.forEach((tipo, index) => {
            resultado += `${index + 1}. ${tipo}\n`;
        });
        return resultado;
    }

    function arrayTodosLosTipos() {
        const tiposUnicos = ["Generales", "Frutas y Verduras"];
        let resultado = "";
        productos.forEach(producto => {
            let tipo = primeraLetraMayuscula(producto.tipo);
            if (!tiposUnicos.includes(tipo)) {
                tiposUnicos.push(tipo);
            }
        });
        tiposUnicos.sort();
        tiposUnicos.forEach((tipo, index) => {
            resultado += `${index + 1}. ${tipo}\n`;
        });
        return tiposUnicos;
    }

    while ((nombreUsuario === "") || !isNaN(nombreUsuario)) {
        alert("No aceptamos desconocidos. Ingresá algo por lo menos.")
        nombreUsuario = prompt("Ingresá tu nombre, dale bebuli");
    }

    alert("¡Hola " + primeraLetraMayuscula(nombreUsuario) + "! Estamos felices de recibirte en Almacén Paykuna!");

    let ofrecimiento = "Esto tenemos para ofrecerte\n" + todosLosTipos() + "\nRecordá el número de la opción que querés elegir.";

    alert(ofrecimiento);

    let eleccion = prompt("¿Que es lo que estás buscando?");

    function eleccionDeTipos() {
        let unTipo = arrayTodosLosTipos()[eleccion - 1];
        let resultado = "Elegiste " + unTipo;

        const listadoDeProductos = productos.filter(producto => {
            return producto.tipo === unTipo.toLocaleLowerCase();
        });

        let productosStr = "Productos:\n";
        listadoDeProductos.forEach(producto => {
            productosStr += primeraLetraMayuscula(producto.nombre) + " $" + producto.precio + "\n";
        });

        alert(resultado + "\n" + productosStr);

        calcularPrecio(listadoDeProductos);
    }

    function frutaYverdura() {
        let unTipo = arrayTodosLosTipos()[eleccion - 1];
        let resultado = "Elegiste " + unTipo;

        const listadoDeProductos = productos.filter(producto => {
            return producto.tipo === (productos[0].tipo).toLocaleLowerCase() ||
                producto.tipo === (productos[2].tipo).toLocaleLowerCase();
        });

        let productosFiltrados = "Productos:\n";
        listadoDeProductos.forEach(producto => {
            productosFiltrados += primeraLetraMayuscula(producto.nombre) + " $" + producto.precio + "\n";
        });

        alert(resultado + "\n" + productosFiltrados);

        calcularPrecio(listadoDeProductos);
    }

    function todosLosProductos() {
        let unTipo = arrayTodosLosTipos()[eleccion - 1];
        let resultado = "Elegiste " + unTipo;

        let productosTodos = "Productos:\n";
        productos.forEach(producto => {
            productosTodos += primeraLetraMayuscula(producto.nombre) + " $" + producto.precio + "\n";
        });

        alert(resultado + "\n" + productosTodos);

        calcularPrecio(productos);
    };

    function calcularPrecio(listadoDeProductos) {
        let sumaTotal = 0;
        let productosComprados = {};

        listadoDeProductos.forEach(producto => {
            let cantidad;
            let cantidadValida = false;

            while (!cantidadValida) {
                cantidad = parseInt(prompt("Ingrese la cantidad de " + primeraLetraMayuscula(producto.nombre) + ":"));

                if (!isNaN(cantidad)) {
                    cantidadValida = true;
                } else {
                    alert("La cantidad ingresada no es válida. Por favor, ingrese un número válido.");
                }
            }

            let precioTotal = producto.precio * cantidad;
            sumaTotal += precioTotal;

            productosComprados[producto.nombre] = cantidad;
            alert("El precio total de " + cantidad + " " + primeraLetraMayuscula(producto.nombre) + " es $" + precioTotal);
        });

        let mensajeProductosComprados = "Productos comprados:\n";
        for (let producto in productosComprados) {
            let precioUnitario = listadoDeProductos.find(item => item.nombre === producto).precio;
            let precioTotalProducto = productosComprados[producto] * precioUnitario;
            mensajeProductosComprados += primeraLetraMayuscula(producto) + 
            " x " + productosComprados[producto] + " und. P Unit: $" 
            + precioUnitario + ". P Total: $" + precioTotalProducto + "\n";
        }

        alert(mensajeProductosComprados + "\nGracias " + nombreUsuario + " por tu compra. El importe total es $" + sumaTotal);

    }

    while (eleccion < 1 || eleccion > 6 || isNaN(eleccion)) {
        alert("Elegiste mal, debés ingresar una opción válida");
        eleccion = prompt("¿Que es lo que estás buscando?");
    }

    switch (eleccion) {
        case "1":
            eleccionDeTipos();
            break;
        case "2":
            eleccionDeTipos();
            break;
        case "3":
            frutaYverdura();
            break;
        case "4":
            todosLosProductos();
            break;
        case "5":
            eleccionDeTipos();
            break;
        default:
            eleccionDeTipos();
            break;
    }
});