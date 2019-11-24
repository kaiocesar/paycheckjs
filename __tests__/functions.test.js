const Paycheck = require('../lib/paycheck')
const p = new Paycheck();

describe('testando as funções de calculo', () => {

    //  * Calculo do INSS: 
    //  * Calculo do FGTS: 
    //  * Calculo de dependentes: 
    //  * Calculo do IRRF
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

        it('Sálario teto de R$6.000,00 referente a R$642,34', () => {
            expect(p.calcular_inss(6000)).toBe(642.34)
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

    describe('DEDUÇÃO: calculo de dependentes', () => {
        it('2 dependentes', () => {
            expect(p.calcular_dependentes(2)).toBe(379.18)
        })
    })

    describe('DESCONTO: calculo de IRRF', () => {
        it('Salario de R$1.903,98 e nenhum dependente', () => {
            expect(p.calcular_irrf(1903.98, 0)).toBe(0)
        })

        it('Salário de R$3.000,00 e 2 dependentes e R$330,00 de inss', () => {
            expect(p.calcular_irrf(3000, 2)).toBe(29.01)
        })

        it('Salário de R$3.000,00 e 0 dependentes e R$330,00', () => {
            expect(p.calcular_irrf(3000, 0)).toBe(57.45)
        })

        it('Salário de R$5.000,00 e ZERO dependentes e R$550,00 de inss e faixa de 22,5% de irrf', () => {
            expect(p.calcular_irrf(5000, 0)).toBe(365.12)
        })

        it ('Salário teto R$6.000,00, inss de 11% (R$642,34) e IRRF de 27,5% e zero dependentes.', () => {
            expect(p.calcular_irrf(6000, 0)).toBe(604)
        })
    })


    describe('SALARIO LIQUIDO', () => {
        it('Salario base de R$3.000,00 e salario liquido de R$2.612,55 e zero dependentes', () => {
            expect(p.calcular_salario_liquido(3000, 0)).toBe(2612.55)
        })
    })

})