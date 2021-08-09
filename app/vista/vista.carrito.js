const carritoServ = require('../controlador/controlador.carrito')
const midd = require('../../middlewares/usuario.midd')


//exportamos los modulos que vamos a utilizar
module.exports = async (app)=> {

    app.get('/carrito/:cliente/:token',midd.urlValido, async (req,res)=> {
        try {
            let resultado = await carritoServ.listaPedidos(req.params.cliente)
            console.log(resultado)
            res.render("compra", {nombre: resultado[0].nombre_producto, precio: resultado[0].precio_producto,
                nombre2: resultado[1].nombre_producto, precio2: resultado[1].precio_producto,
                nombre3: resultado[2].nombre_producto, precio3: resultado[2].precio_producto})
        }catch (error) {
            res.status(500).send('Carrito vacio regresa al catalogo para comprar')
        }
    })
    
    app.post('/carrito', midd.usuarioValido, async (req,res)=>{
        let pedido = req.body
        console.log(pedido)
            try {
                let resultado = await carritoServ.nuevoPedido(pedido)
                //console.log(resultado)
                res.status(200).json({ message: "Pedido agregado exitosamente", resultado})
            }catch (error) {
                res.status(500).send('Algo raro paso')
            }
    })

    app.delete('/carrito/:cliente',midd.usuarioValido, async (req,res)=> {
        console.log(req.headers.authorization)
        try {
            let resultado = await carritoServ.eliminarPedido(req.params.cliente)
            console.log(resultado)
            res.status(200).json({ message: "Pedido borrado correctamente", resultado})
        }catch (error) {
            res.status(500).send('Algo raro paso')
        }
    })

    /* app.get('/compra',  async (req,res)=> {
        try{
            res.render("compra", {})
        }catch (error) {
            res.status(500).json('Algo raro ocurrio con esta pagina')
        } 
    })
 */
}