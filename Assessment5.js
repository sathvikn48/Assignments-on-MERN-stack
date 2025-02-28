let str = "Java Is open source language and Javascript is scripting language. java Is very user-friendly and easy to use";
//1
let result1 = str.replace("Java", "Python");
//2
let result2 = str.replace(/\bjava\w*/gi, "python");
//3
let result3 = str.replace(/java/gi, "Hello");
//4
let result4 = str.replace(/\bis\b/gi, "are");

console.log("Result 1:", result1);
console.log("Result 2:", result2);
console.log("Result 3:", result3);
console.log("Result 4:", result4);
