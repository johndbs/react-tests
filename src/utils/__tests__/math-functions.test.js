import {divide, multiply, substract, sum} from "../math-functions"

describe("Math functions", ()=> {
    it("Sum correctly 2 numbers", ()=> {
        expect(sum()).toBe(0);
        expect(sum(1,1)).toBe(2);
        expect(sum(0,0)).toBe(0);
        expect(sum(-1,10)).toBe(9);
        expect(sum(-1,-2)).toBe(-3);
    });

    it("Substract correctly 2 numbers", ()=> {
        expect(substract()).toBe(0);
        expect(substract(1,1)).toBe(0);
        expect(substract(0,0)).toBe(0);
        expect(substract(-1,10)).toBe(-11);
        expect(substract(-1,-2)).toBe(1);
    });

    it("Multiply correctly 2 numbers", ()=> {
        expect(multiply()).toBe(0);
        expect(multiply(1,1)).toBe(1);
        expect(multiply(0,0)).toBe(0);
        expect(multiply(-1,10)).toBe(-10);
        expect(multiply(-1,-2)).toBe(2);
    });

    it("Divide correctly 2 numbers", ()=> {
        expect(()=> divide()).toThrow("You can't divide by 0");
        expect(divide(1,1)).toBe(1);
        expect(()=> divide(0,0)).toThrow("You can't divide by 0");
        expect(divide(-1,10)).toBe(-0.1);
        expect(divide(-1,-2)).toBe(0.5);
    });


});
