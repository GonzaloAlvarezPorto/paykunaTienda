//Apertura y cierre menú cabecera 24-3
let nav = document.getElementById("nav");
let abrir = document.getElementById("abrir");
let menuAbierto = false;

abrir.addEventListener("click", () => {
    if (menuAbierto) {
        nav.classList.remove("visible");
        abrir.src = "../media/images/boton__apertura__menu.png";
        abrir.alt = "abrir";
        abrir.title = "abrir"
    }
    else {
        abrir.src = "../media/images/flecha_blanca_asc2.png";
        abrir.alt = "cerrar";
        abrir.title = "cerrar"
        nav.classList.add("visible");
    }
    menuAbierto = !menuAbierto;
});

//Funcion primera letra mayúscula
function primeraLetraMayuscula(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

//Funcionalidades eCommerce
let usuarioGuardado = localStorage.getItem("usuario"); //Recupera el usuario que haya quedado guardado
let apellidoGuardado = localStorage.getItem("apellido"); //Recupera el apellido que haya quedado guardado
let mailGuardado = localStorage.getItem("mail");
let contrasenyaGuardada = localStorage.getItem("contrasenya"); //Recupera la contraseña que haya ingresado el usuario 

//Bienvenida dependiendo del usuario
let cartelBienvenida; //Inicializamos el texto de bienvnida
let primerLetraUsuario;

let sectorCarrito__usuario = document.getElementById("sectorCarrito__usuario");

sectorCarrito__usuario.addEventListener("mouseover", () => {
    let sectorCarrito__datosUsuario = document.getElementById("sectorCarrito__datosUsuario");

    let textoParaMostrar = document.getElementById("sectorCarrito__datosUsuario");

    textoParaMostrar.innerHTML = `Nombre: ${usuarioGuardado}<br>Apellido: ${apellidoGuardado}<br>Mail: ${mailGuardado}`;

    sectorCarrito__datosUsuario.style.display = "flex";
});

sectorCarrito__usuario.addEventListener("mouseout", () => {
    let sectorCarrito__datosUsuario = document.getElementById("sectorCarrito__datosUsuario");

    sectorCarrito__datosUsuario.style.display = "none";
});

let agregarCartelBienvenida = document.getElementById("sectorCarrito__texto");
let agregarPrimerLetraUsuario = document.getElementById("sectorCarrito__usuario");

//Registrarse
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
}
//Loguearse
else {
    cartelBienvenida = `Hola ${usuarioGuardado} ingresá tu contraseña para corroborar que sos vos.`;
    agregarPrimerLetraUsuario.innerHTML += usuarioGuardado[0] + apellidoGuardado[0];
    agregarCartelBienvenida.innerHTML += cartelBienvenida;
}

function queAparezcaElCarrito() {
    let paginaCompras__menuDeCompra = document.getElementById("paginaCompras__menuDeCompra");
    paginaCompras__menuDeCompra.style.display = "flex";
}

function coincideContrasenya() {

    let paginaCompras__sectorCarrito = document.getElementById("paginaCompras__sectorCarrito");
    paginaCompras__sectorCarrito.style.display = "none";

    queAparezcaElCarrito();
}

let sectorCarrito__botonIniciarSesion = document.getElementById("sectorCarrito__botonIniciarSesion");

sectorCarrito__botonIniciarSesion.addEventListener("click", () => {
    let sectorCarrito__contrasenyaIngresada = document.getElementById("sectorCarrito__contrasenyaIngresada").value;

    document.getElementById("sectorCarrito__contrasenyaIngresada").value = "";

    if (sectorCarrito__contrasenyaIngresada !== contrasenyaGuardada || sectorCarrito__contrasenyaIngresada === null) {
        alert("Probá de nuevo o registrate");
    }
    else {
        coincideContrasenya();
    }
});

//Funciones comunes entre logueo y registro

//Cierre sesión
let menuLateral__botonCierreSesion = document.getElementById("menuLateral__botonCierreSesion");

menuLateral__botonCierreSesion.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
})

//Registro
let sectorCarrito__botonRegistro = document.getElementById("sectorCarrito__botonRegistro");
let sectorCarrito__formularioRegistro = document.getElementById("sectorCarrito__formularioRegistro");
let sectorCarrito__textoRegistro = document.getElementById("sectorCarrito__textoRegistro");
let sectorCarrito__fichaUsuario = document.getElementById("sectorCarrito__fichaUsuario");
let sectorCarrito__botonera = document.getElementById("sectorCarrito__botonera");

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

    formularioRegistro__enviar.addEventListener("click", () => {
        let formularioRegistro__nombre = document.getElementById("formularioRegistro__nombre").value;
        let formularioRegistro__apellido = document.getElementById("formularioRegistro__apellido").value;
        let formularioRegistro__contrasenya = document.getElementById("formularioRegistro__contrasenya").value;
        let formularioRegistro__mail = document.getElementById("formularioRegistro__mail").value;

        if (formularioRegistro__nombre === null || !isNaN(formularioRegistro__nombre)) {
            alert("Ingresá nuevamente tu nombre, no es apropiado");
            return;
        }

        if (formularioRegistro__apellido === null || !isNaN(formularioRegistro__apellido)) {
            alert("Ingresá nuevamente tu apellido, no es apropiado");
            return;
        }

        if (formularioRegistro__mail === null || !isNaN(formularioRegistro__mail)) {
            alert("Igresá nuevamente tu mail, no es válido");
            return;
        }

        if (formularioRegistro__contrasenya === null || formularioRegistro__contrasenya.length < 8) {
            alert("Contraseña incorrecta, tiene que tener mínimo 8 dígitos");
            return;
        }

        usuarioIngresado = localStorage.setItem("usuario", primeraLetraMayuscula(formularioRegistro__nombre));
        apellidoIngresado = localStorage.setItem("apellido", primeraLetraMayuscula(formularioRegistro__apellido));
        contrsenyaIngresada = localStorage.setItem("contrasenya", formularioRegistro__contrasenya);
        mailIngresado = localStorage.setItem("mail", formularioRegistro__mail);

        paginaCompras__sectorCarrito.style.display = "none";

        queAparezcaElCarrito();
    });
});

const productos = [
    {
        nombre: "lechuga",
        imagen: "../media/images/foto__lechuga.jpg",
        precio: "1000",
        agrupador: "verduras"
    },
    {
        nombre: "remolacha",
        imagen: "../media/images/foto__remolacha.jpg",
        precio: "1500",
        agrupador: "verduras"
    },
    {
        nombre: "pepino",
        imagen: "../media/images/foto__pepino.jpg",
        precio: "2000",
        agrupador: "verduras"
    },
    {
        nombre: "sillón",
        imagen: "../media/images/foto__sillon.jpg",
        precio: "2000",
        agrupador: "muebles"
    },
    {
        nombre: "yerba",
        imagen: "../media/images/foto__yerba.jpg",
        precio: "2000",
        agrupador: "almacén"
    },
    {
        nombre: "palta",
        imagen: "../media/images/foto__palta.jpg",
        precio: "2000",
        agrupador: "frutas"
    },
    {
        nombre: "silla",
        imagen: "../media/images/foto__silla.jpeg",
        precio: "2000",
        agrupador: "muebles"
    },
    {
        nombre: "sandía",
        imagen: "../media/images/foto__sandia.jpg",
        precio: "2000",
        agrupador: "frutas"
    },
    {
        nombre: "mesa",
        imagen: "../media/images/foto__mesa.jpeg",
        precio: "2000",
        agrupador: "muebles"
    },
    {
        nombre: "frutilla",
        imagen: "../media/images/foto__frutilla.jpg",
        precio: "2000",
        agrupador: "frutas"
    },
    {
        nombre: "banana",
        imagen: "../media/images/foto__banana.jpg",
        precio: "2000",
        agrupador: "frutas"
    },
    {
        nombre: "leche",
        imagen: "../media/images/foto__leche.jpg",
        precio: "2000",
        agrupador: "almacén"
    },
    {
        nombre: "arroz",
        imagen: "../media/images/foto__arroz.jpeg",
        precio: "2000",
        agrupador: "almacén"
    }
];

function filtrarPorAgrupador(productos, agrupador) {
    let menuDeCompra__grillaDeProductos = document.getElementById("menuDeCompra__grillaDeProductos");
    
    // Limpiar el contenido existente del contenedor
    menuDeCompra__grillaDeProductos.innerHTML = "";

    productos.forEach(producto => {
        // Verificar si el producto coincide con el agrupador especificado
        if (producto.agrupador === agrupador) {
            let productoDOM = crearProductoDOM(producto);
            menuDeCompra__grillaDeProductos.appendChild(productoDOM);
        }
    });
}

function crearProductoDOM(producto) {
    // Crear elementos para cada producto
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
    contenedor__productoComandos.id = "contenedor__productoComandos";

    let productoComandos__botoneraNegativa = document.createElement("button");
    productoComandos__botoneraNegativa.className = "productoComandos__botonera";
    productoComandos__botoneraNegativa.id = "productoComandos__botoneraNegativa";
    productoComandos__botoneraNegativa.textContent = "-";

    let productoComandos__cantidadComprada = document.createElement("input");
    productoComandos__cantidadComprada.className = "productoComandos__cantidadComprada";
    productoComandos__cantidadComprada.id = "productoComandos__cantidadComprada";
    productoComandos__cantidadComprada.type = "text";
    productoComandos__cantidadComprada.value = "0";

    let productoComandos__botoneraPositiva = document.createElement("button");
    productoComandos__botoneraPositiva.className = "productoComandos__botonera";
    productoComandos__botoneraPositiva.id = "productoComandos__botoneraPositiva";
    productoComandos__botoneraPositiva.textContent = "+";

    let contenedor__botonAgregarProducto = document.createElement("button");
    contenedor__botonAgregarProducto.className = "contenedor__botonAgregarProducto";
    contenedor__botonAgregarProducto.id = "contenedor__botonAgregarProducto";
    contenedor__botonAgregarProducto.textContent = "Agregar";

    // Agregar los elementos al formulario de comandos
    contenedor__productoComandos.appendChild(productoComandos__botoneraNegativa);
    contenedor__productoComandos.appendChild(productoComandos__cantidadComprada);
    contenedor__productoComandos.appendChild(productoComandos__botoneraPositiva);

    // Agregar todos los elementos al contenedor del producto
    grillaDeProductos__contenedor.appendChild(contenedor__productoTitulo);
    grillaDeProductos__contenedor.appendChild(imagenProducto);
    grillaDeProductos__contenedor.appendChild(contenedor__productoPrecio);
    grillaDeProductos__contenedor.appendChild(contenedor__productoComandos);
    grillaDeProductos__contenedor.appendChild(contenedor__botonAgregarProducto);

    return grillaDeProductos__contenedor;
};

function mostrarTodos(productos) {
    let menuDeCompra__grillaDeProductos = document.getElementById("menuDeCompra__grillaDeProductos");

    // Limpiar el contenido existente del contenedor
    menuDeCompra__grillaDeProductos.innerHTML = "";

    productos.forEach(producto => {
        let productoDOM = crearProductoDOM(producto);
        menuDeCompra__grillaDeProductos.appendChild(productoDOM);
    });
};

mostrarTodos(productos);

let menuLateral__seccionesMuebles = document.getElementById("menuLateral__seccionesMuebles");
let menuLateral__seccionesVerduras = document.getElementById("menuLateral__seccionesVerduras");
let menuLateral__seccionesFrutas = document.getElementById("menuLateral__seccionesFrutas");
let menuLateral__seccionesAlmacen = document.getElementById("menuLateral__seccionesAlmacen");
let menuLateral__seccionesGenerales = document.getElementById("menuLateral__seccionesGenerales");

menuLateral__seccionesGenerales.addEventListener("click", ()=> {
    mostrarTodos(productos);
});

menuLateral__seccionesMuebles.addEventListener("click", () => {
    filtrarPorAgrupador(productos, "muebles");
});

menuLateral__seccionesVerduras.addEventListener("click", () => {
    filtrarPorAgrupador(productos, "verduras");
});

menuLateral__seccionesFrutas.addEventListener("click", () => {
    filtrarPorAgrupador(productos, "frutas");
});

menuLateral__seccionesAlmacen.addEventListener("click", () => {
    filtrarPorAgrupador(productos, "almacén");
});