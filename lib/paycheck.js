class Paycheck {
    constructor() {}

    calcular_inss(salario_base) {
        if (salario_base < 1751.82) {
            return salario_base * 0.08
        } else if (salario_base > 1751.81 && salario_base < 2919.73) {
            return salario_base * 0.09
        } else if (salario_base > 2919.72 && salario_base < 5839.46) {
            return salario_base * 0.11
        } else {
            return 642.34
        }
    }
}

module.exports = Paycheck