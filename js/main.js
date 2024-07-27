//Funciones
//Funcion que devuelve la primer letra en mayúscula de cualquier cadena
function primeraLetraMayuscula(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
};

//Funcion que comprueba si la contraseña guardada y la contraseña ingresada coinciden
function coincideContrasenya() {
    let paginaCompras__sectorCarrito = document.getElementById("paginaCompras__sectorCarrito");
    paginaCompras__sectorCarrito.style.display = "none";
    queAparezcaElCarrito();
};

//Funcion que hace que el carrito sea visible
function queAparezcaElCarrito() {
    let paginaCompras__menuDeCompra = document.getElementById("paginaCompras__menuDeCompra");
    paginaCompras__menuDeCompra.style.display = "flex";
};

//Funcion que filtra los productos dependiendo del agrupador
let menuDeCompra__grillaDeProductos = document.getElementById("menuDeCompra__grillaDeProductos");

function filtrarPorAgrupador(productos, agrupador) {
    let menuDeCompra__grillaDeProductos = document.getElementById("menuDeCompra__grillaDeProductos");

    menuDeCompra__grillaDeProductos.innerHTML = "";

    productos.forEach(producto => {

        if (producto.agrupador === agrupador) {
            let productoDOM = crearProductoDOM(producto);
            menuDeCompra__grillaDeProductos.appendChild(productoDOM);
        }
    });
};

//Función que comprueba si en el carrito hay algún producto reservado
function hayProductosEnCarrito() {
    let productosEnLocalStorage = JSON.parse(localStorage.getItem('productos')) || [];
    let totalCantidadProductos = productosEnLocalStorage.reduce((total, producto) => total + producto.cantidad, 0);
    return totalCantidadProductos > 0;
};

//Función que dependiendo de si hay productos en el carrito o no, nos muestra el botón para borrar todos los productos
//cargados en el carrito
function actualizarVisibilidadBotonBorrarCarrito() {
    if (hayProductosEnCarrito()) {
        botonBorrarCarrito.style.display = "block";
    } else {
        botonBorrarCarrito.style.display = "none";
    }
};

//Función que crea la ficha de productos en el carrito
function crearProductoDOM(producto) {

    let grillaDeProductos__contenedor = document.createElement("div");
    grillaDeProductos__contenedor.className = "grillaDeProductos__contenedor";

    let contenedor__productoTitulo = document.createElement("p");
    contenedor__productoTitulo.className = "contenedor__productoTitulo";
    contenedor__productoTitulo.textContent = primeraLetraMayuscula(producto.nombre);

    let imagenProducto = document.createElement("img");
    imagenProducto.src = producto.imagen;
    imagenProducto.alt = producto.nombre;

    let contenedor__productoPrecio = document.createElement("p");
    contenedor__productoPrecio.className = "contenedor__productoPrecio";
    contenedor__productoPrecio.textContent = `$${producto.precio}`;

    let contenedor__productoComandos = document.createElement("form");
    contenedor__productoComandos.className = "contenedor__productoComandos";
    contenedor__productoComandos.id = `contenedor__productoComandos${producto.nombre}`;

    let productoComandos__botoneraNegativa = document.createElement("button");
    productoComandos__botoneraNegativa.className = "productoComandos__botonera";
    productoComandos__botoneraNegativa.id = `productoComandos__botoneraNegativa${producto.nombre}`;
    productoComandos__botoneraNegativa.textContent = "-";
    productoComandos__botoneraNegativa.type = "button";

    let productoComandos__cantidadComprada = document.createElement("input");
    productoComandos__cantidadComprada.className = "productoComandos__cantidadComprada";
    productoComandos__cantidadComprada.id = `productoComandos__cantidadComprada${producto.nombre}`;
    productoComandos__cantidadComprada.type = "text";
    productoComandos__cantidadComprada.value = "0";

    let productoComandos__botoneraPositiva = document.createElement("button");
    productoComandos__botoneraPositiva.className = "productoComandos__botonera";
    productoComandos__botoneraPositiva.id = `productoComandos__botoneraPositiva${producto.nombre}`;
    productoComandos__botoneraPositiva.textContent = "+";
    productoComandos__botoneraPositiva.type = "button";

    let contenedor__botonAgregarProducto = document.createElement("button");
    contenedor__botonAgregarProducto.className = "contenedor__botonAgregarProducto";
    contenedor__botonAgregarProducto.id = "contenedor__botonAgregarProducto";
    contenedor__botonAgregarProducto.textContent = "Agregar";

    contenedor__productoComandos.appendChild(productoComandos__botoneraNegativa);
    contenedor__productoComandos.appendChild(productoComandos__cantidadComprada);
    contenedor__productoComandos.appendChild(productoComandos__botoneraPositiva);

    grillaDeProductos__contenedor.appendChild(contenedor__productoTitulo);
    grillaDeProductos__contenedor.appendChild(imagenProducto);
    grillaDeProductos__contenedor.appendChild(contenedor__productoPrecio);
    grillaDeProductos__contenedor.appendChild(contenedor__productoComandos);
    grillaDeProductos__contenedor.appendChild(contenedor__botonAgregarProducto);


    productoComandos__botoneraNegativa.addEventListener('click', () => {
        let cantidadComprada = parseInt(productoComandos__cantidadComprada.value);
        productoComandos__cantidadComprada.value = cantidadComprada - 1;
        if (parseInt(productoComandos__cantidadComprada.value) < 0) {
            contenedor__botonAgregarProducto.textContent = "Quitar";
        } else {
            contenedor__botonAgregarProducto.textContent = "Agregar";
        }
    });

    productoComandos__botoneraPositiva.addEventListener('click', () => {
        let cantidadComprada = parseInt(productoComandos__cantidadComprada.value);
        productoComandos__cantidadComprada.value = cantidadComprada + 1;
        if (parseInt(productoComandos__cantidadComprada.value) < 0) {
            contenedor__botonAgregarProducto.textContent = "Quitar";
        } else {
            contenedor__botonAgregarProducto.textContent = "Agregar";
        }
    });

    contenedor__botonAgregarProducto.addEventListener('click', () => {
        let cantidadComprada = parseInt(productoComandos__cantidadComprada.value);
        if (cantidadComprada !== 0) {

            let nombreProducto = producto.nombre;
            let precioProducto = parseInt(producto.precio);

            let productosEnLocalStorage = JSON.parse(localStorage.getItem('productos')) || [];

            let productoExistente = productosEnLocalStorage.find(item => item.nombre === nombreProducto);

            if (cantidadComprada > 0) {

                if (productoExistente) {
                    productoExistente.cantidad += cantidadComprada;
                    productoExistente.total = productoExistente.cantidad * precioProducto;
                } else {
                    productosEnLocalStorage.push({
                        nombre: nombreProducto,
                        cantidad: cantidadComprada,
                        precio: precioProducto,
                        total: cantidadComprada * precioProducto
                    });
                }
                Toastify({
                    text: primeraLetraMayuscula(producto.nombre) + " X" + cantidadComprada + " agregado al carrito.",
                    duration: 3000,
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                        borderRadius: "10px"
                    }
                }).showToast();

            } else {

                if (productoExistente && productoExistente.cantidad >= Math.abs(cantidadComprada)) {
                    productoExistente.cantidad += cantidadComprada;
                    productoExistente.total = productoExistente.cantidad * precioProducto;

                } else {
                    Swal.fire({
                        icon: "error",
                        text: `No hay suficientes unidades de ${primeraLetraMayuscula(nombreProducto)} en el carrito para quitar.`,
                    });
                    return;
                }
                Toastify({
                    text: primeraLetraMayuscula(producto.nombre) + " X" + -cantidadComprada + " borrado del carrito.",
                    duration: 3000,
                    style: {
                        background: "linear-gradient(to right, red, yellow)",
                        borderRadius: "10px"
                    }
                }).showToast();
            }

            localStorage.setItem('productos', JSON.stringify(productosEnLocalStorage));

            productoComandos__cantidadComprada.value = "0";
            contenedor__botonAgregarProducto.textContent = "Agregar";

            mostrarProductosEnCarrito(menuLateral__contenedorProductosEnCarrito);
            mostrarProductosEnCarrito(cierreCompra__contenedorDetallesCompra);
            actualizarVisibilidadBotonBorrarCarrito();
        } else {
            Swal.fire({
                icon: "error",
                text: `Debés poner al menos un número positivo o negativo.`,
            });

        }
    });

    return grillaDeProductos__contenedor;
};

//Función que muestra todos los productos agregados al carrito
function mostrarProductosEnCarrito(contenedor) {
    let productosEnLocalStorage = JSON.parse(localStorage.getItem('productos')) || [];
    contenedor.innerHTML = '';

    let subtotal = 0;

    productosEnLocalStorage.forEach(producto => {
        if (producto.cantidad > 0) {
            let productoElemento = document.createElement('div');
            productoElemento.className = 'contenedorProductosEnCarrito__productoEnCarrito';

            let nombreProducto = document.createElement('p');
            nombreProducto.textContent = `Producto: ${primeraLetraMayuscula(producto.nombre)}`;
            nombreProducto.className = "productoEnCarrito__titulo";

            let cantidadProducto = document.createElement('p');
            cantidadProducto.textContent = `Cantidad: ${producto.cantidad}`;
            cantidadProducto.className = "productoEnCarrito__cantidad";

            let precioProducto = document.createElement('p');
            precioProducto.textContent = `Unitario: $${producto.precio}`;
            precioProducto.className = "productoEnCarrito__precioUnitario";

            let totalProducto = document.createElement('p');
            totalProducto.textContent = `Total: $${producto.total}`;
            totalProducto.className = "productoEnCarrito__total";

            productoElemento.appendChild(nombreProducto);
            productoElemento.appendChild(cantidadProducto);
            productoElemento.appendChild(precioProducto);
            productoElemento.appendChild(totalProducto);

            contenedor.appendChild(productoElemento);

            subtotal += producto.total;
        }
    });

    contenedor.style.display = subtotal > 0 ? 'block' : 'none';

    document.getElementById('cierreCompra__subtotalCompra').innerHTML = `El importe total de tu compra es <br> $${subtotal}`;
}

//Función que parsea todos los productos en formato JSON
function mostrarTodos(productos) {
    if(menuDeCompra__grillaDeProductos){
    let menuDeCompra__grillaDeProductos = document.getElementById("menuDeCompra__grillaDeProductos");

    menuDeCompra__grillaDeProductos.innerHTML = "";

    productos.forEach(producto => {
        let productoDOM = crearProductoDOM(producto);
        menuDeCompra__grillaDeProductos.appendChild(productoDOM);
    });
}
};

// -------------------------------------------

//Menu de opciones
let nav = document.getElementById("nav");
let abrir = document.getElementById("abrir");
let menuAbierto = false;

abrir.addEventListener("click", () => {
    if (menuAbierto) {
        nav.classList.remove("visible");
        abrir.src = "../media/images/boton__apertura__menu.png";
        abrir.alt = "abrir";
        abrir.title = "abrir";
    } else {
        abrir.src = "../media/images/flecha_blanca_asc2.png";
        abrir.alt = "cerrar";
        abrir.title = "cerrar";
        nav.classList.add("visible");
    }
    menuAbierto = !menuAbierto;
});
// -------------------------------------------

//PARTE DE INGRESO DE USUARIO
//Datos del usuario registrado
let usuarioGuardado = localStorage.getItem("usuario");
let apellidoGuardado = localStorage.getItem("apellido");
let mailGuardado = localStorage.getItem("mail");
let contrasenyaGuardada = localStorage.getItem("contrasenya");

//Muestra los datos del usuario al pasar con el mouse sobre sus iniciales
let primerLetraUsuario;
let sectorCarrito__usuario = document.getElementById("sectorCarrito__usuario");
let sectorCarrito__datosUsuario = document.getElementById("sectorCarrito__datosUsuario");

if (sectorCarrito__usuario && sectorCarrito__datosUsuario) {
    sectorCarrito__usuario.addEventListener("mouseover", () => {
        sectorCarrito__datosUsuario.innerHTML = `Nombre: ${usuarioGuardado}<br>Apellido: ${apellidoGuardado}<br>Mail: ${mailGuardado}`;
        sectorCarrito__datosUsuario.style.display = "flex";
    });

    sectorCarrito__usuario.addEventListener("mouseout", () => {
        sectorCarrito__datosUsuario.style.display = "none";
    });
}

//Mensaje de bienvenida
let cartelBienvenida;

let agregarCartelBienvenida = document.getElementById("sectorCarrito__texto");
let agregarPrimerLetraUsuario = document.getElementById("sectorCarrito__usuario");

//Comprobador de si usuario está guardado o no
if (usuarioGuardado === null) {
    cartelBienvenida = `Hola, tenés que registrarte para acceder al carrito`;
    agregarPrimerLetraUsuario.innerText += `-`;

    let sectorCarrito__contrasenyaIngresada = document.getElementById("sectorCarrito__contrasenyaIngresada");
    let sectorCarrito__botonera = document.getElementById("sectorCarrito__botonera");
    let sectorCarrito__texto = document.getElementById("sectorCarrito__texto");
    let sectorCarrito__usuario = document.getElementById("sectorCarrito__usuario");

    sectorCarrito__usuario.style.display = "none";
    sectorCarrito__contrasenyaIngresada.style.display = "none";
    sectorCarrito__botonera.style.display = "none";
    sectorCarrito__texto.style.display = "none";
} else {
    if (agregarCartelBienvenida) {
        cartelBienvenida = `Hola ${usuarioGuardado} ingresá tu contraseña para corroborar que sos vos.`;
        agregarPrimerLetraUsuario.innerHTML += usuarioGuardado[0] + apellidoGuardado[0];
        agregarCartelBienvenida.innerHTML += cartelBienvenida;
    }
}

//Validación de contraseña
let sectorCarrito__botonIniciarSesion = document.getElementById("sectorCarrito__botonIniciarSesion");

if (sectorCarrito__botonIniciarSesion) {
    sectorCarrito__botonIniciarSesion.addEventListener("click", () => {
        let sectorCarrito__contrasenyaIngresada = document.getElementById("sectorCarrito__contrasenyaIngresada").value;
        document.getElementById("sectorCarrito__contrasenyaIngresada").value = "";

        let comprobacionContrasenya = document.getElementById("sectorCarrito__contrasenyaIngresada");


        if (sectorCarrito__contrasenyaIngresada !== contrasenyaGuardada || sectorCarrito__contrasenyaIngresada === null) {
            comprobacionContrasenya.style.borderColor = "red";
            Swal.fire({
                icon: "error",
                title: "¡Alto ahí!",
                text: "Tu contraseña no es correcta",
            });
        } else {
            coincideContrasenya();
        }
    });
}

//Cierre de sesión
let menuLateral__botonCierreSesion = document.getElementById("menuLateral__botonCierreSesion");

if (menuLateral__botonCierreSesion) {
    menuLateral__botonCierreSesion.addEventListener("click", () => {
        Swal.fire({
            title: "¿Cerrando sesión?",
            text: "¿Estás seguro que deseas salir de la sesión? Se borrarán todos los datos cargados.",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, estoy seguro.",
            cancelButtonText: "No, no quiero."
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                window.location.reload();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    });
}
//Registrar y guardar datos de usuario
let sectorCarrito__botonRegistro = document.getElementById("sectorCarrito__botonRegistro");
let sectorCarrito__formularioRegistro = document.getElementById("sectorCarrito__formularioRegistro");
let sectorCarrito__textoRegistro = document.getElementById("sectorCarrito__textoRegistro");
let sectorCarrito__fichaUsuario = document.getElementById("sectorCarrito__fichaUsuario");
let sectorCarrito__botonera = document.getElementById("sectorCarrito__botonera");

//Al pulsar en registro borra datos anteriores y muestra el formulario de registro

if (sectorCarrito__botonRegistro) {
    sectorCarrito__botonRegistro.addEventListener("click", () => {
        localStorage.clear();

        sectorCarrito__botonRegistro.style.display = "none";
        sectorCarrito__fichaUsuario.style.display = "none";
        sectorCarrito__textoRegistro.style.display = "none";
        sectorCarrito__contrasenyaIngresada.style.display = "none";
        sectorCarrito__botonera.style.display = "none";
        agregarCartelBienvenida.style.display = "none";

        sectorCarrito__formularioRegistro.style.display = "flex";

        let formularioRegistro__enviar = document.getElementById("formularioRegistro__enviar");

        //Validación de datos de registro, si todo está ok, aparece el carrito
        formularioRegistro__enviar.addEventListener("click", () => {
            let formularioRegistro__nombre = document.getElementById("formularioRegistro__nombre");
            let formularioRegistro__apellido = document.getElementById("formularioRegistro__apellido");
            let formularioRegistro__contrasenya = document.getElementById("formularioRegistro__contrasenya");
            let formularioRegistro__mail = document.getElementById("formularioRegistro__mail");

            if (formularioRegistro__nombre.value === "" || !isNaN(formularioRegistro__nombre.value)) {
                formularioRegistro__nombre.setAttribute("placeholder", "Ingresá tu nombre");
                formularioRegistro__nombre.style.borderColor = "red";
                Swal.fire({
                    icon: "error",
                    title: "¡Detente anónimo!",
                    text: "Tenés que ingresar tu nombre.",
                });
                return;
            } else {
                formularioRegistro__nombre.style.borderColor = "";
            }

            if (formularioRegistro__apellido.value === "" || !isNaN(formularioRegistro__apellido.value)) {
                formularioRegistro__apellido.setAttribute("placeholder", "Ingresá tu apellido");
                formularioRegistro__apellido.style.borderColor = "red";
                Swal.fire({
                    icon: "error",
                    title: "¡Detente anónimo!",
                    text: "Tenés que ingresar tu apellido.",
                });
                return;
            } else {
                formularioRegistro__apellido.style.borderColor = "";
            }

            if (formularioRegistro__mail.value === null || !isNaN(formularioRegistro__mail.value)) {
                formularioRegistro__mail.setAttribute("placeholder", "Ingresá tu mail");
                formularioRegistro__mail.style.borderColor = "red";
                Swal.fire({
                    icon: "error",
                    title: "¿Sin ubicación electrónica?",
                    text: "Tenés que ingresar tu mail.",
                });
                return;
            } else {
                formularioRegistro__mail.style.borderColor = "";
            }

            if (formularioRegistro__contrasenya.value === "" || formularioRegistro__contrasenya.value.length < 8) {
                formularioRegistro__contrasenya.style.borderColor = "red";
                Swal.fire({
                    icon: "error",
                    title: "¡La seguridad ante todo!",
                    text: "Tenés que ingresar una contraseña. Tiene que tener mínimo 8 caracteres.",
                });
                return;
            } else {
                formularioRegistro__contrasenya.style.borderColor = "";
            }

            usuarioIngresado = localStorage.setItem("usuario", primeraLetraMayuscula(formularioRegistro__nombre.value));
            apellidoIngresado = localStorage.setItem("apellido", primeraLetraMayuscula(formularioRegistro__apellido.value));
            contrsenyaIngresada = localStorage.setItem("contrasenya", formularioRegistro__contrasenya.value);
            mailIngresado = localStorage.setItem("mail", formularioRegistro__mail.value);

            Swal.fire({
                icon: "success",
                text: "Registro realizado con éxito, adelante.",
            });

            paginaCompras__sectorCarrito.style.display = "none";

            queAparezcaElCarrito();
        });
    });
}
//SECTOR CARRITO
//Listado de productos
let productos = [];

fetch("https://raw.githubusercontent.com/GonzaloAlvarezPorto/paykunaTienda/main/data/productos.json")
    .then((res) => res.json())
    .then((data) => {
        productos = [...data];

        mostrarTodos(data);
    })


//Creación del botón borrar carrito
let botonBorrarCarrito = document.createElement("button");
botonBorrarCarrito.textContent = "Borrar Carrito";
botonBorrarCarrito.className = "menuLateral__botonBorrarCarrito";

//Al pulsar el botón borrar carrito elimina todos los datos del carrito que hayan sido guardados
botonBorrarCarrito.addEventListener('click', () => {

    localStorage.removeItem('productos');
    actualizarVisibilidadBotonBorrarCarrito();

    let menuLateral__contenedorProductosEnCarrito = document.getElementById("menuLateral__contenedorProductosEnCarrito");

    menuLateral__contenedorProductosEnCarrito.style.display = "none";
});

let menuDeCompraMenuLateral = document.getElementById('menuDeCompra__menuLateral');
if (menuDeCompraMenuLateral) {
    menuDeCompraMenuLateral.appendChild(botonBorrarCarrito);
}

document.addEventListener('DOMContentLoaded', function () {
    actualizarVisibilidadBotonBorrarCarrito();
});

//Proceso de finalización de la compra
const menuLateral__botonRealizarCompra = document.getElementById('menuLateral__botonRealizarCompra');
const botonRealizarCompra__aviso = document.getElementById("botonRealizarCompra__aviso");

if (menuLateral__botonRealizarCompra) {

    menuLateral__botonRealizarCompra.addEventListener('click', () => {

        if (!hayProductosEnCarrito()) {
            Swal.fire({
                icon: "error",
                text: "No hay elementos en el carrito para realizar la compra.",
            });
            return;
        }

        let paginaCompras__menuDeCompra = document.getElementById("paginaCompras__menuDeCompra");

        paginaCompras__menuDeCompra.style.display = "none";
        let paginaCompras__cierreCompra = document.getElementById("paginaCompras__cierreCompra");

        paginaCompras__cierreCompra.style.display = "flex";
    });
}

//Proceso para volver a tu compra antes de confirmarla
const cierreCompra__volverCarrito = document.getElementById("cierreCompra__volverCarrito");

if (cierreCompra__volverCarrito) {

    cierreCompra__volverCarrito.addEventListener("click", () => {

        let paginaCompras__cierreCompra = document.getElementById("paginaCompras__cierreCompra");

        paginaCompras__cierreCompra.style.display = "none";

        let paginaCompras__menuDeCompra = document.getElementById("paginaCompras__menuDeCompra");

        paginaCompras__menuDeCompra.style.display = "flex";

    });
}

//Proceso para hacer una nueva compra
const confirmacionCompra__botonOtraCompra = document.getElementById("confirmacionCompra__botonOtraCompra");

if (confirmacionCompra__botonOtraCompra) {
    confirmacionCompra__botonOtraCompra.addEventListener("click", () => {

        let paginaCompras__cierreCompra = document.getElementById("paginaCompras__cierreCompra");

        paginaCompras__cierreCompra.style.display = "none";

        localStorage.removeItem('productos');
        actualizarVisibilidadBotonBorrarCarrito();

        let menuLateral__contenedorProductosEnCarrito = document.getElementById("menuLateral__contenedorProductosEnCarrito");

        menuLateral__contenedorProductosEnCarrito.style.display = "none";

        let paginaCompras__menuDeCompra = document.getElementById("paginaCompras__menuDeCompra");

        paginaCompras__menuDeCompra.style.display = "flex";

        let paginasCompras__confirmacionCompra = document.getElementById("paginasCompras__confirmacionCompra");

        paginasCompras__confirmacionCompra.style.display = "none";

    });
}

//Validación final de la compra
const cierreCompra__validacion = document.getElementById("cierreCompra__validacion");

if (cierreCompra__validacion) {
    cierreCompra__validacion.addEventListener("click", () => {
        
        // Ocultar la página de cierre de compra
        let paginaCompras__cierreCompra = document.getElementById("paginaCompras__cierreCompra");
        paginaCompras__cierreCompra.style.display = "none";
        
        // Mostrar la página de confirmación de compra
        let paginasCompras__confirmacionCompra = document.getElementById("paginasCompras__confirmacionCompra");
        paginasCompras__confirmacionCompra.style.display = "flex";

        // Mostrar mensaje de éxito
        Swal.fire("Compra realizada con éxito.");

        // Obtener productos del localStorage (suponiendo que están almacenados como un array de objetos)
        const productos = JSON.parse(localStorage.getItem('productos')) || [];
        const usuario = `${localStorage.getItem('usuario')} ${localStorage.getItem('apellido')}`;
        const mail = localStorage.getItem('mail');

        // Generar resumen del pedido
        let resumenPedido = `Resumen del pedido:\nNombre: ${usuario}\nMail: ${mail}\n`;
        let total = 0;

        productos.forEach((producto, index) => {
            resumenPedido += `- Producto: ${primeraLetraMayuscula(producto.nombre)} - Cantidad: ${producto.cantidad}, Precio: $${producto.precio}, Total producto: $${producto.cantidad*producto.precio}\n`;
            total += producto.cantidad * producto.precio;
        });

        resumenPedido += `Total: $${total.toFixed(2)}`;

        // Número de WhatsApp al que se enviará el mensaje
        const whatsappNumber = "+5491157953908"; // Reemplaza con el número deseado

        // Crear el enlace de WhatsApp con el resumen del pedido
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(resumenPedido)}`;

        // Abrir el enlace de WhatsApp en una nueva pestaña
        window.open(whatsappLink, '_blank');

        // Remover productos del localStorage
        localStorage.removeItem('productos');
    });
}


let menuLateral__contenedorProductosEnCarrito = document.getElementById("menuLateral__contenedorProductosEnCarrito");

if (menuLateral__contenedorProductosEnCarrito) {
    mostrarProductosEnCarrito(menuLateral__contenedorProductosEnCarrito);
}

if (menuDeCompra__grillaDeProductos) {
    mostrarTodos(productos);
}

let menuLateral__seccionesMuebles = document.getElementById("menuLateral__seccionesMuebles");
let menuLateral__seccionesVerduras = document.getElementById("menuLateral__seccionesVerduras");
let menuLateral__seccionesFrutas = document.getElementById("menuLateral__seccionesFrutas");
let menuLateral__seccionesAlmacen = document.getElementById("menuLateral__seccionesAlmacen");
let menuLateral__seccionesGenerales = document.getElementById("menuLateral__seccionesGenerales");

if (menuLateral__seccionesGenerales) {
    menuLateral__seccionesGenerales.addEventListener("click", () => {
        mostrarTodos(productos);
    });
}

if (menuLateral__seccionesMuebles) {
    menuLateral__seccionesMuebles.addEventListener("click", () => {
        filtrarPorAgrupador(productos, "muebles");
    });
}

if (menuLateral__seccionesVerduras) {
    menuLateral__seccionesVerduras.addEventListener("click", () => {
        filtrarPorAgrupador(productos, "verduras");
    });
}

if (menuLateral__seccionesFrutas) {
    menuLateral__seccionesFrutas.addEventListener("click", () => {
        filtrarPorAgrupador(productos, "frutas");
    });
}

if (menuLateral__seccionesAlmacen) {
    menuLateral__seccionesAlmacen.addEventListener("click", () => {
        filtrarPorAgrupador(productos, "almacén");
    });
}