const {DataTypes, Model } = require('sequelize');
const sequelize = require('./conexion')

//Defino los modelos de DB que voy a utilizar

const Productos = sequelize.define('productos' , {
    nombre_producto : {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    precio_producto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    nombre_vendedor: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    modelo_producto: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    direccion_producto : {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    condicion_producto : {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    imagen_producto : {
        type: DataTypes.STRING(200),
        allowNull: true
    }
}, {
    timestamps: true
})

module.exports = Productos