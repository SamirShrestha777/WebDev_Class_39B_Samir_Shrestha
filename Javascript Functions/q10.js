const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

const calculate = (a, b, operationCallback) => operationCallback(a, b);

console.log(`Addition: 20 + 10 = ${calculate(20, 10, add)}`);
console.log(`Subtraction: 20 - 10 = ${calculate(20, 10, subtract)}`);
console.log(`Multiplication: 20 * 10 = ${calculate(20, 10, multiply)}`);
console.log(`Division: 20 / 10 = ${calculate(20, 10, divide)}`);