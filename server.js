const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const sequelize = require('./db/conexion')
const midd = require ('./middlewares/usuario.midd')

const Usuarios = require('./db/clientes.modelo')

const CarritoRoutes = require('./app/vista/vista.carrito')
const ClientesRoutes = require('./app/vista/vista.cliente')
const ProductosRoutes = require('./app/vista/vista.productos')


//configuramos nuestro servidor
app.use(express.json())
app.use(cors())
app.use(midd.limiter)
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

async function iniciarServidor() {
    try {
      //await Usuarios.sync({alter:true})
      await sequelize.authenticate();
      console.log('Conexión establecida correctamente');
      app.listen(process.env.PORT, ()=> {
        console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
      })
    } catch (err) {
      console.error('No se pudo conectar con la Base de datos: ', err)
    }
  }
  

iniciarServidor()

CarritoRoutes(app)
ClientesRoutes(app)
ProductosRoutes(app)

