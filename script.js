const productos = [
    {
        "nombre": "Bermuda",
        "cantidad": 5,
        "precio": 2500
    },
    {
        "nombre": "Remera",
        "cantidad": 2,
        "precio": 2000
    },
    {
        "nombre": "Buzo",
        "cantidad": 10,
        "precio": 3000
    }
]

// Filter
const productosEnStock = productos.filter(elem => elem.cantidad > 3);

// Reduce
const totalCarrito = productos.reduce((acumulador, elem) => {
    return acumulador += elem.precio * elem.cantidad;
}, 0);

// Map
const productosConImpuestos = productos.map(elem => {
    return {
        ...elem,
        precioConImpuesto: elem.precio * 1.2
    }
})

console.log("Los productos con stock mayor a 3 son: ", productosEnStock);
console.log("El total del carrito es: ", totalCarrito);
console.log("Los productos con el 20% de impuesto son: ", productosConImpuestos);