var num = 5;

if(num === 1){
    console.log("num é igual a 1")
} else {
    console.log("Num é igual a 5")
}

//Outra situação 

if(num === 1){
    console.log("num é igual a 1")
} else if(num ===2) {
    console.log("Num é igual a 2")
} else {
    console.log("Num é 5")
}

// Usando o switch Case -  Vai verificar todas as oções para ver qual será atendida

var mes = "janeiro"

switch(mes){
    case "fevereiro":
    console.log("mes 2")
    break;

    case "março" :
        console.log("mes 3")
        break;

        case "dezembro":
            console.log("mes 12")
            break

            default:
                console.log("nenhum dos casos a cima atendidos")

}