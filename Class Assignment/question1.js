// 1. Shopping Discount
// • Task: Calculate the final price of an item based on a
// purchaseAmount:
// • $100 or more: 20% discount
// • $50 to $99.99: 10% discount
// • Under $50: No discount

let purchaseAmount = 59;

let finalPrice = purchaseAmount >= 100
    ? purchaseAmount * 0.8
    : purchaseAmount >= 50
        ? purchaseAmount * 0.9
        : purchaseAmount;

console.log(finalPrice);
