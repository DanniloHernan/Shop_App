
async function recuperaUsuario (){
    let resultado = JSON.parse(localStorage.getItem('datosUsuarios'))
    console.log(resultado)
    return resultado
}

async function eliminarProductos(){

    let data = await recuperaUsuario()

    let result = await fetch(`http://localhost:3000/carrito/${data.usuario}`, {
                method: 'delete',
                headers: {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${data.token}`
                },       
            })

    let datosCarrito = await result.json()
    console.log(datosCarrito)
}

let precio1 = document.getElementById("compra1").textContent
let precio2 = document.getElementById("compra2").textContent
let precio3 = document.getElementById("compra3").textContent

sumaCompra(precio1, precio2, precio3)

async function sumaCompra(precio1, precio2, precio3) {
    totalCompra = parseInt(precio1) + parseInt(precio2) + parseInt(precio3)
    document.getElementById('totalCompra').innerHTML = totalCompra;
}