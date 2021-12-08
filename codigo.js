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

// Valor "La Clasica" 11111111
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
}

// =====================================

// Valor "Super Plus" 22222222222
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
}

// =====================================

// Valor "Paladar Negro" 333333333
let valorPaladarNegro =
  producto12.precio +
  producto7.precio +
  producto13.precio +
  producto4.precio +
  producto5.precio +
  producto1.precio +
  producto2.precio;
console.log("el valor es: " + valorPaladarNegro + " $");

// Boton "Paladar Negro"
function paladarNegro() {
  alert('El precio de la "Paladar Negro" es de: ' + valorPaladarNegro + " $");
  alert("A continuacion le pediremos los datos para realizar el pedido");
  let nombre = prompt("¿Cual es su nombre?");
  let direccion = prompt("Calle/s donde desea recibir su pedido.");
  alert("Perfecto " + nombre + " tu pedido saldra pronto");

  console.log("Precio: " + valorPaladarNegro + " $");
  console.log("Nombre del comprador: " + nombre);
  console.log("Direccion para enviar: " + direccion);
}
