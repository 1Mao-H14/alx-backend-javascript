const assert = require("assert");
const { it, describe } = require("mocha");
const performCalculation = require("./1-calcul");

describe("performCalculation()", function() {
    it("should round numbers and add them", function() {
        const result = performCalculation("SUM", 1, 2);
        assert.strictEqual(result, 3);
    });
    it("should round numbers and subtract them", function() {
        const result = performCalculation("SUBTRACT", 1.4, 2.2);
        assert.strictEqual(result, -1);
    });
    it("should round numbers and subtract them", function() {
        const result = performCalculation("SUBTRACT", 4.9, 2.7);
        assert.strictEqual(result, 2);
    });
    it("should round numbers and divide them", function() {
        const result = performCalculation("DIVIDE", 4, 2);
        assert.strictEqual(result, 2);
    });
    it("should return 'Error' when dividing by zero", function() {
        const result = performCalculation("DIVIDE", 1.7, 0);
        assert.strictEqual(result, "Error");
    });
    it("should round numbers and divide them", function() {
        const result = performCalculation("DIVIDE", 1.4, 4.6);
        assert.strictEqual(result, 0.2);
    });
});
