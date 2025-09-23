const producto = [
    {nombre: "Laptop",precio: 1200},
    {nombre: "Mause", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000}
];
const nombres = producto.filter( precio2 => precio2.precio > 1000).map( precio2 => precio2.nombre);
console.log(nombres);