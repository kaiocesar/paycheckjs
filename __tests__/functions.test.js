const Paycheck = require('../lib/paycheck')
const p = new Paycheck();

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

    describe('DESCONTO: Calculo do INSS - ', () => {
        
        it('Salario nullo', () => {
            expect(p.calcular_inss(null)).toBe(0)
        })

        it('Salario string', () => {
            expect(p.calcular_inss('mil e setessento e cinquenta e dois')).toBe(undefined)
        })

        it('Salário de R$1751.81 e inss de R$140,14 referente a 8%', () => {
            expect(p.calcular_inss(1751.81)).toBe(140.14)
        })

        it('Salário de R$1751.82 e inss de R$157,66 referente a 9%', () => {
            expect(p.calcular_inss(1751.82)).toBe(157.66)
        })

        it('Salário de R$3.000,00 e inss de R$330,00 referente a 11%', () => {
            expect(p.calcular_inss(3000)).toBe(330)  
        })

        it('Salário teto de R$5839.46 referente a R$642,34', () => {
            expect(p.calcular_inss(5839.46)).toBe(642.34)
        })
    })

    describe('BENEFÍCIO: Calculo do FGTS - ', () => {
        it('Salário nullo', () => {
            expect(p.calcular_fgts(null)).toBe(0)
        })

        it('Salário undefined', () => {
            expect(p.calcular_fgts(undefined)).toBe(null)
        })

        it('Salário string', () => {
            expect(p.calcular_fgts('três mil reais')).toBe(null)
        })

        it('Salário objeto', () => {
            expect(p.calcular_fgts({salario: 3999})).toBe(null)
        })

        it('Salario de R$3.000,00 e desconto fixo de 8%', () => {
            expect(p.calcular_fgts(3000)).toBe(240)
        })
    })


})