// File sistem, de los modulos mas importante y utilizado de Node JS

const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(),// si es un archivo
    stats.isDirectory(), // si es una carpeta / directorio
    stats.isSymbolicLink(), // si es un enlace simbólico
    stats.size, // tamaño en bytes
);


