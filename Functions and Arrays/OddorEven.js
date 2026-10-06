function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let number = 11;
console.log("Given Number is ", isOddOrEven(number));