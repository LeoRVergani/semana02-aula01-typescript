function calcularInss(salarioBruto: number){

    let inss = 0

    if(salarioBruto > 4000.04) {
        inss = salarioBruto * 14 / 100
    } else if (salarioBruto > 2666.69) {
        inss = salarioBruto * 12 / 100
    } else if (salarioBruto > 1412.01) {
        inss = salarioBruto * 9 / 100
    } else {
        inss = salarioBruto * 7.5 / 100
    }

    if(inss > 908.85) inss = 908.85

    return inss
}

function Irrf (salarioBruto: number){

    let irrf: number = 0

    if(salarioBruto > 4664.68) {
        irrf = salarioBruto * 27.5 / 100
    } else if (salarioBruto > 3751.06) {
        irrf = salarioBruto * 22.5 / 100
    } else if (salarioBruto > 2826.66) {
        irrf = salarioBruto * 15 / 100
    } else if (salarioBruto > 2112.01) {
        irrf = salarioBruto * 7.5 / 100
    }

    return irrf
}