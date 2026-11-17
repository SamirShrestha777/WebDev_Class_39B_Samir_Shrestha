// 2. Time-Based Greeting
// • Task: Given an hour variable (in 24-hour format, 0–23), log:
// • "Good morning" for hours 5 through 11
// • "Good afternoon" for hours 12 through 17
// • "Good evening" for all other hours

let hour = 6;

let greeting = (hour >= 5 && hour <= 11)
    ? "Good morning"
    : (hour >= 12 && hour <= 17)
        ? "Good afternoon"
        : "Good evening";

console.log(greeting);