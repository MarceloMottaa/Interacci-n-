

let name = prompt("Ingrese su nombre:")
let apellido = prompt("Ingese su apellido")
let edad = prompt ("Ingresar su edad:") 

alert("Bienvenid@ " + name + " " + apellido + ", tu edad es " +edad )

/* Creo que esto sería lo de impuestos y descuentos, todavía no logro comprender como agregarlo a mi formulario, así que no sé si estará bien :( */

const suma = (a,b) => a + b
const resta = (a,b) => a - b

const iva = x => x * 0.10
let precioProducto = 800
let descuento = 50

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)

console.log(nuevoPrecio) 


