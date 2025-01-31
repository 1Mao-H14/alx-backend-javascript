const expect = require("chai").expect;
const { describe, it } = require("mocha");
const performCalculation = require("./2-calcul_chai");

describe("performCalculation", function() {
    describe("SUM", function() {
        it("should round numbers and add them", function() {
            expect(performCalculation("SUM", 1, 2)).to.equal(3);
        });
        it("should round numbers and add them", function() {
            expect(performCalculation("SUM", 1.6, 2.6)).to.equal(5);
        });
    });

    describe("SUBTRACT", function() {
        it("should round numbers and subtract them", function() {
            expect(performCalculation("SUBTRACT", 1.4, 2.3)).to.equal(-1);
        });
        it("should round numbers and subtract them", function() {
            expect(performCalculation("SUBTRACT", 4.9, 2.7)).to.equal(2);
        });
        it("should round numbers and subtract them", function() {
            expect(performCalculation("SUBTRACT", -4.9, -2.7)).to.equal(-2);
        });
    });

    describe("DIVIDE", function() {
        it("should round numbers and divide them", function() {
            expect(performCalculation("DIVIDE", 4, 2)).to.equal(2);
        });
        it("should round numbers and divide them", function() {
            expect(performCalculation("DIVIDE", 4.6, 1.8)).to.equal(2.5);
        });
        it("should return 'Error' when dividing by zero", function() {
            expect(performCalculation("DIVIDE", 4, 0)).to.equal("Error");
        });
    });
});
