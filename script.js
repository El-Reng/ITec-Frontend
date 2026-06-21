function main() {
    let nombre = prompt("Nombre: ")

if (!nombre) {
    console.log('ERROR: El campo "Nombre" no puede estar vacío.')
    return
}

let edad = Number(prompt("Edad: "))

if (isNaN(edad)) {
    console.log('ERROR: Solo se aceptan "numeros" en este campo.')
    return
}
if (edad < 18) {
    console.log('ACCESO DENEGADO.')
    return
}

let contraseña = prompt("Contraseña: ")

if (!contraseña || contraseña.length < 6) {
    console.log('CONTRASEÑA INVÁLIDA: La contraseña debe tener minimo 6 digitos.')
    return
}

console.log(`Bienvenido ${nombre}\nEdad: ${edad}\nContraseña: ${contraseña}`)

edad = edad + 10
console.log(`\nDatos modificados:\n\nNombre: ${nombre}\nEdad(mod): ${edad}\nContraseña: ${contraseña}`)
}

main()