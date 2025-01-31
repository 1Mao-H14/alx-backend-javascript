function performCalculation(operationType, num1, num2) {
    const roundedNum1 = Math.round(num1);
    const roundedNum2 = Math.round(num2);
    let result = 0;

    switch (operationType) {
        case 'SUM':
            result = roundedNum1 + roundedNum2;
            break;
        case 'SUBTRACT':
            result = roundedNum1 - roundedNum2;
            break;
        case 'DIVIDE':
            if (roundedNum2 === 0) {
                result = "Error";
            } else {
                result = roundedNum1 / roundedNum2;
            }
            break;
        default:
            throw new Error("Invalid operation type");
    }

    return result;
}

module.exports = performCalculation;
