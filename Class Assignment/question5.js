// 5. Largest of Three Numbers
// • Task: Given three numbers a, b, and c, find and log the
// largest one without using Math.max()

let a = 10;
let b = 25;
let c = 35;

if (a > b && a > c) {
    console.log(a + " is the largest")
}
else if (b > a && b > c) {
    console.log(b + " is the largest")
}
else {
    console.log(c + " is the largest")
}