import 'mocha';
import {
    expect
} from 'chai';

import Calculator from '../src/calculator';

describe('The calculator', () => {
    let calculator: Calculator;

    before(() => {
        calculator = new Calculator();
    });

    describe('can add', () => {
        it('-1 + 1 === 0', () => {
            const result = calculator.add(-1, 1);
            expect(result).to.equal(0);
        });

        it('1 + 2 === 3', () => {
            const result = calculator.add(1, 2);
            expect(result).to.equal(3);
        });

        it('0.1 + 0.2 is close to 0.3', () => {
            const result = calculator.add(0.1, 0.2);
            expect(result).to.closeTo(0.3, 10);
        });
    });

    describe('can subtract', () => {
        it('-1 - 1 === -2', () => {
            const result = calculator.subtract(-1, 1);
            expect(result).to.equal(-2);
        });

        it('1 - 2 === -1', () => {
            const result = calculator.subtract(1, 2);
            expect(result).to.equal(-1);
        });

        it('0.1 - 0.2 === -0.1', () => {
            const result = calculator.subtract(0.1, 0.2);
            expect(result).to.equal(-0.1);
        });
    });

    describe('can multiply', () => {
        it('-1 * 1 === -1', () => {
            const result = calculator.multiply(-1, 1);
            expect(result).to.equal(-1);
        });

        it('1 * 2 === 2', () => {
            const result = calculator.multiply(1, 2);
            expect(result).to.equal(2);
        });

        it('0.1 * 0.2 is close to 0.02', () => {
            const result = calculator.multiply(0.1, 0.2);
            expect(result).to.closeTo(0.02, 10);
        });
    });

    describe('can divide', () => {
        it('-1 / 1 === -1', () => {
            const result = calculator.divide(-1, 1);
            expect(result).to.equal(-1);
        });

        it('1 / 2 === 0.5', () => {
            const result = calculator.divide(1, 2);
            expect(result).to.equal(0.5);
        });

        it('0.1 / 0.2 is 0.5', () => {
            const result = calculator.divide(0.1, 0.2);
            expect(result).to.equal(0.5);
        });
    });
});