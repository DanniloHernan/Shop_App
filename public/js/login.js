let inicio = document.getElementById('iniciar')

class Usuario {
    constructor (usuario, pass, token) {
        this.usuario = usuario
        this.pass = pass
        this.token = token
    }

    static async guardaUsuario (usuario) {
        localStorage.setItem('datosUsuarios', JSON.stringify(usuario))
    }

    static async recuperaUsuario () {
        let resultado = await JSON.parse(localStorage.getItem('datosUsuarios'))
        return resultado
    }
}

inicio.addEventListener('click', async ()=>{

    let usuario = document.getElementById('user').value
    let pass = document.getElementById('password').value

        let resultado = await fetch('http://localhost:3000/login', {
                method: 'post',
                headers: {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json"
                },       
                body: JSON.stringify({
                    "usuario" : usuario,
                    "pass": pass
                })
        })
    
    let datosVuelta = await resultado.json()

    let data = new Usuario (usuario, pass, datosVuelta)

    if(data.token != null){
        Usuario.guardaUsuario(data)
    }else{
        window.confirm("Usuario invalido")
    }
})



