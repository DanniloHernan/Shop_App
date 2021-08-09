const sequelize = require('../../db/conexion');

module.exports.verPedido = async function (usuario){

    try {
        let resultado = await sequelize.query(`SELECT * FROM dbo.carrito WHERE carrito.name_cliente = '${usuario}'`)
        return resultado[0]
      } catch (err) {
        console.log(error)
        throw new Error ('Ocurrio un error en la consulta del carrito')
      }
  }
  
  
  module.exports.altaPedido = async function (modelo){
  
    try {
        let resultado = await sequelize.query(`INSERT INTO carrito (nombre_producto, precio_producto, name_cliente) VALUES (?, ?, ?)`,
        {replacements: modelo, type: sequelize.QueryTypes.SELECT});
        console.log(resultado)
        return resultado
      } catch(err) {
        console.log(err)
        throw new Error('Ocurrio un error en el registro de la compra')
      }
  }

  module.exports.borrarPedido = async function (usuario){
  
    try {
        let resultado = await sequelize.query(`DELETE FROM carrito WHERE carrito.name_cliente = '${usuario}'`)
        console.log(resultado)
        return resultado
      } catch(err) {
        console.log(err)
        throw new Error('Ocurrio un error en la eliminacion del carrito')
      }
  }