const getFoodPrice = (foodName) => {
    const menu = {
        Burger: 250,
        Pizza: 500,
        Momo: 150,
        Chowmein: 180
    };
    return menu[foodName];
}

const calculateServiceCharge = (total) => total * 0.05;

const calculateOrder = (foodName, quantity, callback) => callback(foodName) * quantity;

const generateReceipt = (customerName, foodName, quantity, callback) => {
    if (getFoodPrice(foodName) === undefined) {
        console.log(`Sorry ${customerName}, "${foodName}" is not on the menu.`);
        return;
    }

    const foodAmount = callback(foodName, quantity, getFoodPrice);
    const serviceCharge = calculateServiceCharge(foodAmount);
    const finalAmount = foodAmount + serviceCharge;

    console.log(`Customer: ${customerName}`);
    console.log(`Food: ${foodName}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Food Amount: Rs. ${foodAmount}`);
    console.log(`Service Charge: Rs. ${serviceCharge}`);
    console.log(`Final Amount: Rs. ${finalAmount}`);
}

generateReceipt("Suman", "Burger", 2, calculateOrder);