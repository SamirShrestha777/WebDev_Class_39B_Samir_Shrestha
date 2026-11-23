// function countDown(n) {
//     console.log(n);
//     return countDown(n - 1);
// }
// countDown(5);
// function countDown(n) {
//     console.log(n);
//     if (n > 0) {
//         return countDown(n - 1);
//     }
// }
// countDown(5);

// 1. refrence error
// const displayMessage = () => {
//     let message = "Welcome to JavaScript!";
// }
// displayMessage();
// console.log(message);


// 2. Type error
// const convertToUppercase = (text) => {
//     return text.toUpperCase();
// }
// console.log(convertToUppercase(12345));

// 3. Syntax error
// const calculateGrade = (name, marks) => {
//     let grade = "";
//     if (marks >= 80) {
//         grade = "A";
//     } else if (marks >= 60) {
//         grade = "B";
//     } else if (marks >= 40) {
//         grade = "C";
//     } else {
//         grade = "Fail";
//     }
//     console.log("Student: " + name);
//     console.log("Marks: " + marks);
//     console.log("Grade: " + grade);
//     return grade;
// }
// const student1 = calculateGrade("Ram", 85);
// const student2 = calculateGrade("Sita", 55);
// console.log("Final Grade: " + student1;
// console.log("Final Grade: " + student2);

// 4. Syntax Error
// const calculateBill = (price, quantity, discount) => {
//     let subtotal = price * quantity;
//     let discountAmount = subtotal * (discount / 100);
//     let finalAmount = subtotal - discountAmount;
//     if (quantity <= 0) {
//         console.log("Invalid quantity");
//         return;
//     }
//     if (discount < 0 || discount > 100) {
//         console.log("Invalid discount");
//         return;
//     }
//     console.log("Subtotal: " + subtotal);
//     console.log("Discount: " + discountAmount);
//     console.log("Final Amount: " + finalAmount);
//     return finalAmount;
// }
// let bill1 = calculateBill(500, 3, 10);
// let bill2 = calculateBill(1000, 2, 20;
// console.log("Total payable: " + bill1);
// console.log("Total payable: " + bill2);

// 5. Reference error
// const calculateSalary = (employee, basicSalary, bonus) => {
//     let totalSalary = basicSalary + bonus;
//     let tax = totalSalary * 0.10;
//     let netSalary = totalSalary - tax;
//     console.log("Employee: " + employee);
//     console.log("Basic Salary: " + basicSalary);
//     console.log("Bonus: " + bonus);
//     console.log("Tax: " + tax);
//     return netSallary;
// }
// const employee1 = calculateSalary("Ram", 30000, 5000);
// const employee2 = calculateSalary("Sita", 40000, 8000);
// console.log("Ram's Salary: " + employee1);
// console.log("Sita's Salary: " + employee2);

// 6. Range + Logical error
function countDown(n) {
    console.log(n);
    return countDown(n - 1);
}
countDown(5);