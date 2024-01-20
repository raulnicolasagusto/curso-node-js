const os = require('node:os') // estamos importando un modulo nativo de node js , particula// este nos da info del sistema operativo

console.log('CPUs', os.cpus());
console.log('uptime', os.uptime() / 60 / 60) // cuantas horas la pc esta encendida