const Paycheck = require('../lib/paycheck')

describe('testando as funções de calculo', () => {

    //  Calculo do INSS: 
    //  Calculo do FGTS: 
    //  Calculo de dependentes: 
    //  Calculo do IRRF
    //  Calcular DSR (Descanso Semanal Remunerado)
    //  Calculo de vale transporte
    //  Calculo de adicional noturno
    //  Calcular adicional insalubridade
    //  Calcular Salario Liquido

    describe('Calculo do INSS:', () => {
        it('Salário de R$1751.81 e inss de R$140,14 referente a 8%', () => {
            expect(new Paycheck().calcular_inss(1751.81)).toBe(140.1448)
        })

        it('Salário de R$3.000,00 e inss de R$330,00 referente a 11%', () => {
            expect(new Paycheck().calcular_inss(3000)).toBe(330)  
        })
    })

})