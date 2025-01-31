const { describe, it } = require("mocha");
const sinon = require("sinon");
const processPaymentRequest = require("./3-payment");
const MathUtils = require("./utils");
const assert = require("assert");

describe("processPaymentRequest", function() {
    it("should verify that MathUtils.performCalculation was called once", function() {
        const spy = sinon.spy(MathUtils, "performCalculation");

        processPaymentRequest(50, 24.52);

        assert(spy.calledOnce);
        spy.restore();
    });
});
