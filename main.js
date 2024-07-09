alert ('Hola! Te damos la bienvenida a nuestra tienda de productos argentinos!');

const carrito = [];

const ordenarPorPrecio = () => {
    productos.sort((a, b) => a.precio - b.precio);
};

const ordenarPorNombre = () => {
    productos.sort((a,b) =>{
        if (a.nombre > b.nombre){
            return 1;
        }
        if (a.nombre < b.nombre){
            return -1;
        }
        return 0;
        }
    )
};

const mostrarListaOrdenada = () => {
    const listaOrdenada = prompt ('Si deseas ver la lista de productos ordenada por precio (menor a mayor), escribe "precio", si deseas ver lo productos por orden alfabetico, escribe "abc"').toLowerCase();

    if (listaOrdenada === 'abc'){
        ordenarPorNombre();
        let lista = productos.map(producto => "- "+producto.nombre+': '+producto.precio+" €");
        alert("Lista de precios: \n\n"+lista.join("\n"));
        comprarProductos(lista);
    }
    if (listaOrdenada === 'precio'){
        ordenarPorPrecio();
        let lista = productos.map(producto => "- "+producto.nombre+': '+producto.precio+" €");
        alert("Lista de precios: \n\n"+lista.join("\n"));
        comprarProductos(lista);
    }
    else (
        alert ('Muchas gracias por tu visita! Esperamos verte pronto.')
    )
};

const comprarProductos = (lista) => {
    let productoNombre = "";
    let seguirComprando = false;

    do {
        productoNombre = prompt("Qué producto desea comprar?\n\n"+lista.join("\n"));
    
        const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());
    
        if (producto) {
            agregarAlCarrito(producto);
        } else {
            alert("El producto no existe!");
        }
        
        seguirComprando = confirm("Desea seguir comprando?");
    } while (seguirComprando);
};

const agregarAlCarrito = (producto) => {
    carrito.push(producto);
};

mostrarListaOrdenada();

console.log(carrito);

const precioFinal = carrito.reduce ((acc, productos) => acc + productos.precio, 0);

alert ('El precio total es de '+ precioFinal+ '€');

alert ('Muchas gracias por tu compra! Esperamos verte pronto.');
