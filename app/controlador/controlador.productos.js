const dbProductos = require('../modelo/modelo.productos')

module.exports.nuevoProducto = async (producto)=> {
    let modelo = [
        producto.nombre_producto,
        producto.precio_producto,
        producto.nombre_vendedor,
        producto.modelo_producto,
        producto.direccion_producto,
        producto.condicion_producto,
        producto.imagen_producto
    ]
    try {
        let result = await dbProductos.altaProducto(modelo)
    }catch (error) {
        console.log(error)
        throw new Error ('Error en la alta del producto')
    }
}

module.exports.listaProductos = async ()=> {
    try {
        let result = await dbProductos.verProductos()
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}

module.exports.cargarProducto = async (tipo)=> {
    try {
        const resultado = await dbProductos.traerProductos(tipo)
        return Object.values(resultado)
    }catch (error) {
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }
}