const sequelize = require('../../db/conexion');


//Catalogo
module.exports.verProductos = async function (){

    try {
        let resultado = await sequelize.query('SELECT * FROM productos')
        return resultado
      } catch (err) {
        console.log(error)
        throw new Error ('Ocurrio un error en la consulta de productos')
      }
    return resultado
}

module.exports.altaProducto = async function (producto){

    try {
        let resultado = await sequelize.query(`INSERT INTO productos (nombre_producto, precio_producto, nombre_vendedor, modelo_producto, direccion_producto, condicion_producto, imagen_producto) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        {replacements: producto, type: sequelize.QueryTypes.SELECT});
        console.log(resultado)
        return resultado
      } catch(err) {
        console.log(err)
        throw new Error('Ocurrio un error en la creación del producto')
      }
}

module.exports.traerProductos = async (tipo)=> {
  try {
    //let resultado =  await Productos.findAll({attributes: [tipo]})
    let resultado = await sequelize.query(`SELECT * FROM dbo.productos WHERE productos.disponible = '${tipo}'`);
    return resultado[0]
      } catch(err) {
          console.log(err)
          throw new Error('Ocurrio un error en la creación del producto')
      }
}

/* module.exports.eliminaproducto = async function (idproducto){

    let resultado = await productos.findByIdAndDelete({_id: idproducto})
    return ('producto eliminado correctamente')
}

module.exports.modificaproducto = async function (data) {

    let resultado = await productos.findByIdAndUpdate(data.id , {$set:{vendedor: data.vendedor}})
    return resultado   
} 
 */
