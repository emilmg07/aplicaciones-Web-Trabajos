function filtrarPorTalle(productos, talle) {
    // Trabajar con el filter
    const productosFiltrados = productos.filter((producto) => {
        return producto.talle === talle;
    });

    return productosFiltrados;
}