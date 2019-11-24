const { VALOR_DEPENDENTE ,} = require('../config/constants')

class Paycheck {
    constructor() {}

    calcular_inss(salario_base) {
        if (salario_base < 1751.82) {
            return parseFloat((salario_base * 0.08).toFixed(2))
        } else if (salario_base > 1751.81 && salario_base < 2919.73) {
            return parseFloat((salario_base * 0.09).toFixed(2))
        } else if (salario_base > 2919.72 && salario_base < 5839.46) {
            return parseFloat((salario_base * 0.11).toFixed(2))
        } else if (salario_base > 5839.45){
            return 642.34
        }
    }

    calcular_fgts(salario_base) {
        if (isNaN(salario_base)) {
            return null
        }
        return parseFloat((salario_base * 0.08).toFixed(2))
    }

    calcular_dependentes(dependentes) {
        if (isNaN(dependentes)) { 
            return 0
        }
        return VALOR_DEPENDENTE * dependentes
    }

    calcular_irrf(salario_base, dependentes) {
        if (isNaN(salario_base) || isNaN(dependentes)) {
            return null
        }
        
        const valor_inss = this.calcular_inss(salario_base)
        const valor_dependentes = this.calcular_dependentes(dependentes)
        const salario_deduzido = salario_base - valor_inss - valor_dependentes

        if (salario_deduzido > 1903.98 && salario_deduzido < 2826.66) {
            return parseFloat(((salario_deduzido * 0.075) - 142.80).toFixed(2))
        } else if (salario_deduzido > 2826.65 && salario_deduzido < 3751.06) {
            return parseFloat(((salario_deduzido * 0.15) - 354.80).toFixed(2))
        } else if (salario_deduzido > 3751.05 && salario_deduzido < 4664.69) {
            return parseFloat(((salario_deduzido * 0.225) - 636.13).toFixed(2))
        } else if (salario_deduzido > 4664.68) {
            return parseFloat(((salario_deduzido * 0.275) - 869.36).toFixed(2))
        }

        return 0
    }
}

module.exports = Paycheck