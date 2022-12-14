//function is a block of code, that does something and returns the output
// function functionName() {
    // some logic
// }
// no parmeters
function printSomething() {
    console.log('Hello World')
}
console.log(printSomething())

let x = 10+30
// takes two paramters a, b
function addNumbers(a, b) {
    return a + b
}

console.log(addNumbers(10,20))
console.log(addNumbers(9,87))
console.log(addNumbers(2,45))

function multiplyNumbers(x, y) {
    return x*y
}

console.log(multiplyNumbers(2,45))

function giveMeSquare(a) {
    return a * a
}
console.log(giveMeSquare(25))

function findBiggest(a, b) {
    if(a > b) return a
    else return b
}

function areaOfTriangle(b,h){
    return 1/2*b*h
}
console.log(areaOfTriangle(10,40))
// write a simple function to find area of a triangle
// 1/2 * b * h

console.log(findBiggest(100,200))

function isOdd(a) {
    console.log('Is Odd ' + a % 2 == 1)
    return a % 2 == 1
}
isOdd(9)

function findLengthOfArray(arr) {
    return arr.length
}
const arr = [ 'India', 'USA', 'Mexico', 'UK', 'France' ]
console.log(findLengthOfArray(arr))