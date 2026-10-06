let str1 = "listen";
let str2 = "silent";
let first = str1.replaceAll(" ", "").toLowerCase();
let second = str2.replaceAll(" ", "").toLowerCase();
first = first.split("").sort().join("");
second = second.split("").sort().join("");
let result = first === second;
console.log(result);