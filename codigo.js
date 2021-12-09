function Productos(nombre, tipo, precio) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.precio = precio;
}

let producto1 = new Productos("lechuga", "verdura", 20);
let producto2 = new Productos("tomate", "verdura", 20);
let producto3 = new Productos("pepinillos", "verdura", 20);
let producto4 = new Productos("cebolla", "verdura", 20);
let producto5 = new Productos("cebollaCaramelizada", "verdura", 20);
let producto6 = new Productos("champiñones", "verdura", 20);

let producto7 = new Productos("Carne Vacuna", "medallon", 50);
let producto8 = new Productos("Medallon de Tofu", "medallon", 65);
let producto9 = new Productos("Medallon de Cereales", "medallon", 80);
let producto10 = new Productos("Medallon FULL BLACK", "medallon", 120);

let producto11 = new Productos("Pan Clasico", "pan", 30);
let producto12 = new Productos("Pan BLACK", "pan", 200);

let producto13 = new Productos("Queso Cheddar", "queso", 30);
let producto14 = new Productos("Queso Vegano", "queso", 30);

let producto15 = new Productos("Mayonesa", "salsa", 0);
let producto16 = new Productos("Mostaza", "salsa", 0);
let producto17 = new Productos("Salsa de Tomate", "salsa", 0);
let producto18 = new Productos("Salsa Secreta", "salsa", 0);

// ==================================

// Valor "La Clasica" 1
let valorLaClasica =
  producto11.precio +
  producto7.precio +
  producto13.precio +
  producto4.precio +
  producto5.precio +
  producto1.precio +
  producto2.precio;
console.log("el valor es: " + valorLaClasica + " $");

// Boton "La Clasica"
function clasica() {
  alert('El precio de "La Clasica" es de: ' + valorLaClasica + " $");
  alert("A continuacion le pediremos los datos para realizar el pedido");
  let nombre = prompt("¿Cual es su nombre?");
  let direccion = prompt("Calle/s donde desea recibir su pedido.");
  alert("Perfecto " + nombre + " tu pedido saldra pronto");

  console.log("Precio: " + valorLaClasica + " $");
  console.log("Nombre del comprador: " + nombre);
  console.log("Direccion para enviar: " + direccion);

  // Push Hamburgesa "La Clasica"

  let laClasica = carrito.push({
    Producto: "Hamburgesa La Clasica",
    precio: 190,
  });
}

// =====================================

// Valor "Super Plus" 2
let valorPlus =
  producto11.precio +
  producto7.precio * 2 +
  producto13.precio +
  producto4.precio +
  producto1.precio +
  producto2.precio;
console.log("el valor es: " + valorPlus + " $");

// Boton "Super Plus"
function plus() {
  alert('El precio de "Super Plus" es de: ' + valorPlus + " $");
  alert("A continuacion le pediremos los datos para realizar el pedido");
  let nombre = prompt("¿Cual es su nombre?");
  let direccion = prompt("Calle/s donde desea recibir su pedido.");
  alert("Perfecto " + nombre + " tu pedido saldra pronto");

  console.log("Precio: " + valorPlus);
  console.log("Nombre del comprador: " + nombre);
  console.log("Direccion para enviar: " + direccion);

  // Push Hamburgesa "Super Plus"

  let superPlus = carrito.push({
    Producto: "Hamburgesa Super Plus",
    precio: 220,
  });
}

// =====================================

// Valor "Paladar Negro" 3
let valorPaladarNegro =
  producto12.precio +
  producto7.precio +
  producto13.precio +
  producto4.precio +
  producto5.precio +
  producto1.precio +
  producto2.precio;
console.log("el valor es: " + valorPaladarNegro + " $");

// Boton "Paladar Negro" y con Preguntas
function paladarNegro() {
  alert('El precio de la "Paladar Negro" es de: ' + valorPaladarNegro + " $");
  alert("A continuacion le pediremos los datos para realizar el pedido");
  let nombre = prompt("¿Cual es su nombre?");
  let direccion = prompt("Calle/s donde desea recibir su pedido.");
  alert("Perfecto " + nombre + " tu pedido saldra pronto");

  console.log("Precio: " + valorPaladarNegro + " $");
  console.log("Nombre del comprador: " + nombre);
  console.log("Direccion para enviar: " + direccion);

  // Push Hamburgesa "Paladar Negro"

  let paladarNegro = carrito.push({
    Producto: "Hamburgesa Paladar Negro",
    precio: 360,
  });
}

/*===============================================
DESAFIOS CON ARRAY- Orden de Precio
=================================================*/

let arrayProductos = [
  {
    nombre: "lechuga",
    tipo: "verdura",
    precio: 20,
  },
  {
    nombre: "tomate",
    tipo: "verdura",
    precio: 20,
  },
  {
    nombre: "pepinillos",
    tipo: "verdura",
    precio: 20,
  },
  {
    nombre: "cebolla",
    tipo: "verdura",
    precio: 20,
  },
  {
    nombre: "cebollaCaramelizada",
    tipo: "verdura",
    precio: 20,
  },
  {
    nombre: "champiñones",
    tipo: "verdura",
    precio: 20,
  },
  {
    nombre: "carneVacuna",
    tipo: "medallon",
    precio: 50,
  },
  {
    nombre: "deTofu",
    tipo: "medallon",
    precio: 65,
  },
  {
    nombre: "deCereales",
    tipo: "medallon",
    precio: 80,
  },
  {
    nombre: "fullBlack",
    tipo: "medallon",
    precio: 120,
  },
  {
    nombre: "panClasico",
    tipo: "pan",
    precio: 30,
  },
  {
    nombre: "panBlack",
    tipo: "pan",
    precio: 200,
  },
  {
    nombre: "cheddar",
    tipo: "queso",
    precio: 30,
  },
  {
    nombre: "vegano",
    tipo: "queso",
    precio: 30,
  },
  {
    nombre: "mayonesa",
    tipo: "salsa",
    precio: 0,
  },
  {
    nombre: "mostaza",
    tipo: "salsa",
    precio: 0,
  },
  {
    nombre: "deTomate",
    tipo: "salsa",
    precio: 0,
  },
  {
    nombre: "secreta",
    tipo: "salsa",
    precio: 0,
  },
];

// Ahora para ordenar los precios de Menor a Mayor
arrayProductos.sort((a, b) => {
  if (a.precio < b.precio) {
    return -1;
  }

  if (a.precio > b.precio) {
    return 1;
  }

  return 0;
});

console.log(arrayProductos);

// Array Carrito Al comprar alguna Hamburgesa hace Push en "carrito" En Construccion

let carrito = [];
