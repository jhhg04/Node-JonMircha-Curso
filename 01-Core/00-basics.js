'use strict';

console.log('Hola Mundo desde Node, esto se vera en la terminal');
console.log(2 + 5);

// console.log(window);
console.log(global);

setInterval(() => {
  console.log('Hola Node.js ' + new Date());
}, 1000);
