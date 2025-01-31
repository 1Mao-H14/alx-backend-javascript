const MathUtils = require("./utils");

function processPaymentRequest(totalAmount, shippingCost) {
    const total = MathUtils.performCalculation("SUM", totalAmount, shippingCost);
    console.log(`The total is: ${total}`);
}

module.exports = processPaymentRequest;
