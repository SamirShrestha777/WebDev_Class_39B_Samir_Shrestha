let calculateBonus = (salary) => {
    if (salary >= 40000) {
        let bonus = salary * 0.10;
        return bonus;
    }
    else if (salary < 40000) {
        let bonus = salary * 0.05;
        return bonus;
    }
}
const calculateTax = (salary) => {
    let tax = salary * 0.05;
    return tax;
}
const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
    let finalSalary = salary + bonusCallback(salary) - taxCallback(salary);
    return finalSalary;
}
const generatePayslip = (name, salary, callback) => {
    console.log(`Employee: ${name}`);
    console.log(`Basic Salary: Rs. ${salary}`);
    console.log(`Bonus: Rs. ${calculateBonus(salary)}`);
    console.log(`Tax: Rs. ${calculateTax(salary)}`);
    console.log(`Net Salary: Rs. ${callback(salary, calculateBonus, calculateTax)}`);
}
generatePayslip("Sam", 50000, calculateNetSalary);