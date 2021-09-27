
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [
    {id: 1, nombre: "Pedigree Adultos", precio:2500},
    {id: 2, nombre: "Eukanuba Adultos", precio:1500},
    {id: 3, nombre: "DogChow Cachorros", precio:1700}   ];



for (const producto of productos){
    let divProducto=document.createElement('div');    
    divProducto.innerHTML=`<h3>Nombre: ${producto.nombre}</h3>
                            <p>ID: ${producto.id}</p>
                            <p>Precio: ${producto.precio}</p>`;

    document.body.appendChild(divProducto);
}

