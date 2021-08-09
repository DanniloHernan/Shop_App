const catalogo = require('../controlador/controlador.productos')
const midd = require('../../middlewares/usuario.midd')

module.exports = async (app)=> {

    app.get('/catalogo', async (req,res)=> {
        try {
            let resultado = await catalogo.listaProductos()
            res.json(resultado)        
        }catch (error) {
            res.status(500).send('Algo raro paso en tu peticion de ver el catalogo')
        }
    })

    app.post('/catalogo',midd.usuarioValido, midd.administradorValido, async (req,res)=>{
        let producto = req.body
        try {
            let resultado = await catalogo.nuevoProducto(producto)
            res.status(200).json({ message: "Producto agregado exitosamente", resultado})
        }catch (error) {
            res.status(500).send('Algo raro paso en tu intento de introducir datos al catalogo')
        }

    });

    app.delete('/catalogo/:id', midd.administradorValido, async (req,res)=> {
        let id = req.params.id
        try {
            let resultado = await catalogo.eliminaproducto(id)
            //console.log(resultado)
            res.json('se elimino correctamente el producto')
        }catch (error) {
            res.status(500).send('Algo raro paso')
        }
    });

    app.patch('/catalogo', midd.administradorValido, async (req,res)=> {
        let data = req.body
        try {
            let resultado = await catalogo.modificaproducto(data)
            res.json(resultado)
        }catch (error) {
            console.log(error)
            res.status(500).send('Algo raro paso')
        }
    })

    app.get('/TeclaShop/:tipo', async (req,res)=> {
        try{
            let resultado = await catalogo.cargarProducto(req.params.tipo)
            res.render("tienda", {
                nombre: resultado[0].nombre_producto, precio: resultado[0].precio_producto, modelo: resultado[0].modelo_producto, vendedor: resultado[0].nombre_vendedor, link: resultado[0].imagen_producto,
                nombre2: resultado[1].nombre_producto, precio2: resultado[1].precio_producto, modelo2: resultado[1].modelo_producto, vendedor2: resultado[1].nombre_vendedor, link2: resultado[1].imagen_producto,
                nombre3: resultado[2].nombre_producto, precio3: resultado[2].precio_producto, modelo3: resultado[2].modelo_producto, vendedor3: resultado[2].nombre_vendedor, link3: resultado[2].imagen_producto,
                nombre4: resultado[3].nombre_producto, precio4: resultado[3].precio_producto, modelo4: resultado[3].modelo_producto, vendedor4: resultado[3].nombre_vendedor, link4: resultado[3].imagen_producto,
                nombre5: resultado[4].nombre_producto, precio5: resultado[4].precio_producto, modelo5: resultado[4].modelo_producto, vendedor5: resultado[4].nombre_vendedor, link5: resultado[4].imagen_producto,
                nombre6: resultado[5].nombre_producto, precio6: resultado[5].precio_producto, modelo6: resultado[5].modelo_producto, vendedor6: resultado[5].nombre_vendedor, link6: resultado[5].imagen_producto,
                nombre7: resultado[6].nombre_producto, precio7: resultado[6].precio_producto, modelo7: resultado[6].modelo_producto, vendedor7: resultado[6].nombre_vendedor, link7: resultado[6].imagen_producto,
                nombre8: resultado[7].nombre_producto, precio8: resultado[7].precio_producto, modelo8: resultado[7].modelo_producto, vendedor8: resultado[7].nombre_vendedor, link8: resultado[7].imagen_producto,
                nombre9: resultado[8].nombre_producto, precio9: resultado[8].precio_producto, modelo9: resultado[8].modelo_producto, vendedor9: resultado[8].nombre_vendedor, link9: resultado[8].imagen_producto,
            })
        }catch (error) {
            console.log(error)
            res.status(500).json('Algo raro ocurrio con esta pagina')
        } 
    })


}