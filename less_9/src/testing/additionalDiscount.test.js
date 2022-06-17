const additionalDiscount = require('./additionalDiscountFunctoin');

     
        
    test('Data output', () => {
        const f = additionalDiscount();
        expect(f).toBeDefined();
        expect(f).toBeTruthy();
    } )
  

    describe('Correctness of calculations', () => {
        test('Getting a result', () => {
            expect(additionalDiscount(20, 30000)).toBe(8400);
        })
        test('discount no more than the price', () => {
            expect(additionalDiscount(10, 10000)).toBeLessThan(10000);
        })
    } )
    

    describe('correctness of entered values', () => {
        test('price less than 100 rubles', () => {
            expect(additionalDiscount(20, 99)).toBe("Дополнительная скидка не предоставляется");
        })
        test('loyalty card percentage', () => {
            expect(additionalDiscount(0, 20000)).toBe("Дополнительная скидка не предоставляется");
        })
        test('maximum discount', () => {
            expect(additionalDiscount(31, 20000)).toBe("Дополнительная скидка не предоставляется");
        })
        test('boundary values', () => {
            expect(additionalDiscount(10, 100)).toBe(19);
            expect(additionalDiscount(1, 20000)).toBe(2180);
            expect(additionalDiscount(30, 20000)).toBe(7400);
        })
    })
