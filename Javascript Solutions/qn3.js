// Write a JavaScript program that takes a person's age and displays:
// Below 13 → "Child"
// 13–19 → "Teenager"
// 20–59 → "Adult"
// 60 or above → "Senior Citizen"

let age = 61;
if (age >= 0 && age <= 13) {
    console.log("Child")
}
else if (age > 13 && age <= 19) {
    console.log("Teenager")

}
else if (age >= 20 && age <= 59) {
    console.log("Adult")

}
else {
    console.log("Senior Citizen")
}