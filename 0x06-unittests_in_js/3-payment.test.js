const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("should call Utils.calculateNumber with SUM and the provided arguments", function() {
        const spy = sinon.spy(Utils, "calculateNumber");

        sendPaymentRequestToApi(100, 20);

        assert(spy.calledOnce);
        assert(spy.calledWith("SUM", 100, 20));

        spy.restore(); // Always restore the spy to avoid affecting other tests
    });
});
