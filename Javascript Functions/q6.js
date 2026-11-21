const calculateDelivery = (distance) => {
    if (distance <= 2) {
        return 30;
    }
    return 30 + (distance - 2) * 15;
}

const checkFreeDelivery = (orderAmount) => orderAmount >= 1000;

const processOrder = (customer, distance, orderAmount, callback) => {
    let deliveryCharge = 0;

    if (!checkFreeDelivery(orderAmount)) {
        deliveryCharge = callback(distance);
    }

    console.log(`Customer: ${customer}`);
    console.log(`Order Amount: Rs. ${orderAmount}`);
    console.log(`Distance: ${distance} km`);
    console.log(`Delivery Charge: Rs. ${deliveryCharge}`);
}

processOrder("Ramesh Babu", 5, 800, calculateDelivery);