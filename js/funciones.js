function calcular (parCantidad, parValor){
    let precio = parseFloat(parCantidad * parValor)
    console.log("La tarifa es de "+precio+"$")
    alert("La tarifa es de "+precio+"$")
}

function tablaPersonajes(){
    console.table(personajes)
}

function buscaPersonajes(){
    debugger
    let busqueda = prompt("Ingresa el nombre del personaje buscado.")
    let resultado = personajes.includes(busqueda)
    if (resultado){
        alert("¡Tenemos ese personaje! \n :)")
    }else{
        alert("Lo sentimos... \n ¡Aún no tenemos ese personaje!")
    }
}

const precioAmigurumi = 3000
const precioLetra = 450