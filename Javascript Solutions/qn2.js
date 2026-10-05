// Write a JavaScript program that takes the number of electricity units
// consumed and calculates the bill according to these rules:
// Up to 50 units → Rs. 5 per unit
// 51–100 units → Rs. 7 per unit
// 101–200 units → Rs. 10 per unit
// Above 200 units → Rs. 12 per unit

let unit = 50;
let price = 0;
if (unit >= 0 && unit <= 50) {
    price = unit * 5;
    console.log("The price of electricity is:" + price)

}
else if (unit > 50 && unit <= 100) {
    price = unit * 7;
    console.log("The price of electricity is:" + price)
}
else if (unit > 100 && unit <= 200) {
    price = unit * 10;
    console.log("The price of electricity is:" + price)
}
else {
    price = unit * 12;
    console.log("The price of electricity is:" + price)
}