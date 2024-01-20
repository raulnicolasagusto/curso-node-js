function sum (a,b){
   return a+b;
}

module.exports = sum //forma clasica y vieja de exportar este archivo, no es la que se usa actualmente ( no hace falta que tenga llaves)


// otra mejor forma de exportar es creando un objeto con la funcion dentro y luego improtarla pero con llaves
module.exports = {
   sum
}