// la extension .js por defecto utiliza CommonJS
// la extension .mjs por defecto utiliza 
// la extension .cjs para utilizar CommonJS


// este es el sistema de modulos moderno
import { sum } from './sum.mjs'

console.log(sum(1,2));