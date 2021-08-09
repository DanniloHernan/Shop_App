const servClientes = require('../controlador/controlador.cliente')
const midd = require('../../middlewares/usuario.midd')

module.exports = async (app)=> {
    app.post('/nuevoUsuario', midd.chequeoRegistro, async (req,res)=>{
        let usuario = req.body
        try{

            let resultado = servClientes.crearCliente(usuario)
            res.status(201).json('Usuario creado correctamente')
            //res.json(resultado)
            res.redirect(301, `/login`)
        }catch(err){
            res.status(400).send('Ocurrio un error inesperado')  
        }
    })

    app.post('/login', midd.chequeoLogin, async (req,res)=>{
        let usuario = req.body
        try {
            let resultado = await servClientes.cheqCliente(usuario)
            if (resultado == true) { 
                let validacion = await servClientes.generaToken(usuario)
                res.json(validacion)
                //res.redirect(301, `/TeclaShop/used`)
            }
            else{
                res.status(400).send('Verifique sus datos')
            }
        }catch (err){
            res.status(500).send('Usuario no registrado verifique sus datos')
        }
    })

    app.get('/clientes', midd.administradorValido, async (req,res)=>{
        try {
            let resultado = await servClientes.listarUsuarios()
            res.status(200).json(resultado)
        }catch(error) {
            console.log(error)
            res.status(400).send('Algo raro paso al intentar recuperar la lista de usuarios')
        }
    })

    /* app.get('/usuario' , midd.usuarioValido, (req,res)=>{
        try {
            res.status(200).json('Se verifico el jwt')
        }catch(error) {
            console.log(error)
            res.status(400).send('algo raro paso')
        }
    }) */

    //CRUD Login 

    app.get('/', async (req,res)=> {
        try{
            res.render("login", {url: '/login'})
        }catch (error) {
            res.status(500).json('Algo raro ocurrio con esta pagina')
        } 
    })

    app.get('/registro', async (req,res)=> {
        try{
            res.render("registro", {})
        }catch (error) {
            res.status(500).json('Algo raro ocurrio con esta pagina')
        } 
    })



}