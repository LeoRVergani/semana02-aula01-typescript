
export default class CalculadoraTrabalhista {

    porcentagem(valor: number, porcentagem: number) {
        return valor * (porcentagem / 100);
    };
    
    calcularInss(salarioBruto: number){
    
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
    
        if(inss > 908.85) inss = 908.85;
    
        return inss;
    }
    
    calcularImpostoDeRenda(renda: number): number {
        if (renda <= 2112) return 0;
        else if (renda <= 2826.65) return renda * 0.075;
        else if (renda <= 3751.05) return renda * 0.15;
        else if (renda <= 4664.68) return renda * 0.225;
        else return renda * 0.275;
    };
    
    calcularSalarioLiquido(salarioBruto: number) {
        const descontoInss = this.calcularInss(salarioBruto);
        const descontoImpostoRenda = this.calcularImpostoDeRenda(salarioBruto);
        return salarioBruto - descontoInss - descontoImpostoRenda
    }
    
    calcularSalarioFerias(salarioMensal: number) {
        const PORCENTAGEM_BASE_CALCULO_FERIAS = 33
        const tercoSalario = this.porcentagem(salarioMensal, PORCENTAGEM_BASE_CALCULO_FERIAS)
        return salarioMensal + tercoSalario
    }
}