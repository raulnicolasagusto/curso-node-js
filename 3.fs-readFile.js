const fs = require('node:fs');

console.log('leyendo el primer archivo');
const text = fs.readFile('./archivo.txt', 'utf-8', (err,text)=>{ // asincrono
    console.log(text);
}); 




