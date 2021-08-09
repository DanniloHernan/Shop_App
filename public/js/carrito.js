class vehiculo{
    static contador = 0;

    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._id = ++vehiculo.contador;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre= nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    get id(){
        return this._id;
    }
}