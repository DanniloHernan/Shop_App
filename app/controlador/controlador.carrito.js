const dbCarrito = require('../modelo/modelo.carrito')

module.exports.listaPedidos = async (usuario)=> {
    try {
        let result = await dbCarrito.verPedido(usuario)
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}

module.exports.eliminarPedido = async (usuario)=> {
    try {
        let result = await dbCarrito.borrarPedido(usuario)
        return result
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
}

module.exports.nuevoPedido = async (producto)=> {
    let modelo = [
        producto.nombre_producto,
        producto.precio_producto,
        producto.name_cliente,
    ]
    try {
        let result = await dbCarrito.altaPedido(modelo)
    }catch (error) {
        console.log(error)
        throw new Error ('Error en la alta del producto')
    }
}