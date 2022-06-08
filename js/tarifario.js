function elegirProducto(){
    debugger
    let servicio = prompt ("¡Bienvenido a la Tienda de Deepika Tejidos! \n Elegí una opción, escribiendo el valor numérico \n 1) Comprar amigurumis \n 2) Comprar cartel personalizado \n 3) Buscar personajes \n 4) Ver lista de personajes")

    switch (servicio){
        case "1":
            console.log ("Amigurumis")
            let cantidad = prompt("¿Cuántos muñecos querés comprar?")
            console.log (cantidad, " amigurumis.")        
            calcular (cantidad, precioAmigurumi)
        break
        case "2":
            console.log ("Cartel personalizado.")
            let cartel = prompt("Escriba su cartel (nombre o apodo)")
            let letras = cartel.length
            console.log (letras, " letras")
            calcular (letras, precioLetra)
        break
        case "3":
            buscaPersonajes()
        break
        case "4":
            tablaPersonajes()
            alert("Podés ver la lista de personajes en la consola \n :)")
        break
        default:
        console.error("La opción ingresada no es válida")
        break
    }
}