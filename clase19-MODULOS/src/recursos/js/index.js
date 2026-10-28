// import productos from "./productos.js" // -> no nombrada
import {productosMascotas, categorias} from './productos.js' //-> nombrada
import {filtrarPorTalle,renderizarCatalogo} from './funciones.js'

// Utilizar un objeto disponible para acceder a HTML
// Referenciamos un elemento del html
const contenedorProductos = document.getElementById("contenedor-productos")
const BotonEvento = document.getElementById('boton-evento')
const Dialogo = document.getElementById('dialogo')
// Filtramos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'M')

// Renderizamos
renderizarCatalogo(contenedorProductos, productosFiltrados)

// Eventos
BotonEvento.addEventListener('Click', (Evento)=>{
   // console.log(Evento)
   // dialogo.show
    dialogo.showModal()
})

// aplicar escuchadores a los botones de los productos
const BotonesProductos = contenedorProductos.querySelectorAll()