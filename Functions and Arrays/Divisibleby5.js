let result = "";
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        result = result + i + ",";
    }
}
console.log("Numbers Divisible by 5 are: " + result);