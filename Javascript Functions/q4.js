const ticketPrice = (age) => {
    if (age < 12) {
        return 150;
    }
    else if (age <= 17) {
        return 200;
    }
    else if (age <= 59) {
        return 300;
    }
    else {
        return 200;
    }
}

const calculateTotal = (price, quantity) => price * quantity;

const applyDiscount = (total, quantity) => {
    if (quantity >= 5) {
        return total * 0.10;
    }
    return 0;
}

const bookTicket = (name, age, quantity, callback) => {
    const total = calculateTotal(ticketPrice(age), quantity);
    const discount = callback(total, quantity);
    const finalAmount = total - discount;

    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Ticket Quantity: ${quantity}`);
    console.log(`Total Before Discount: Rs. ${total}`);
    console.log(`Discount: Rs. ${discount}`);
    console.log(`Final Amount: Rs. ${finalAmount}`);
}

bookTicket("Samir", 19, 5, applyDiscount);