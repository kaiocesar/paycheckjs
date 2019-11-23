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
}

module.exports = Paycheck