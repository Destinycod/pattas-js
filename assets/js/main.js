/*
Sugerencia: Es posible asociar más de un evento a un elemento y se pueden emplear funciòn comunes, 
anónimas y arrow para los manejadores de eventos.

>> Consigna: Asociar eventos que buscamos controlar sobre los elementos de la interfaz de nuestro 
simulador

>>Ejemplo:
-Cuando el usuario selecciona un producto, se determina el id del seleccionado y se realiza una salida 
en confirmación.
-Capturar la tecla ENTER para confirmar alguna acción.

*/
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
                            <p>Precio: ${producto.precio}</p>
                            <button id='${producto.id}' class = 'btnCarrito'>Añadir al Carrito</button>`;

    document.body.appendChild(divProducto);
}

let botones=document.getElementsByClassName('btnCarrito');
console.log(botones);

for (const boton of botones) {
        boton.addEventListener('click',Selection);
        
}

function Selection(){
    let seleccion= productos.find(producto => producto.id == this.id);
    console.log('El id del producto seleccionado es '+seleccion.id);
}   