// # 3 STRINGS, # 3.0 Sexy Strings

// const sayHi = (aName = "anon") => "hello " + aName + " lovely have to you";
const sayHi = (aName = "anon") => `hello ${aName} lovely to have you`;
console.log(sayHi());

// Calculator
const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
const remainder = (a, b) => a % b;
const square = (a, b) => a ** b;

console.log(`add : ${add()}`);
console.log(`add : ${add}`);
console.log(`add : ${minus}`);
console.log(`add : ${division}`);
console.log(`add : ${multiplication}`);
console.log(`add : ${division}`);
console.log(`add : ${remainder}`);
console.log(`add : ${square}`);
console.log(`add : ${add(6, 6)}`);
console.log(`minus : ${minus(6, 6)}`);
console.log(`multiplication : ${multiplication(6, 6)}`);
console.log(`division : ${division(6, 6)}`);
console.log(`remiander : ${remainder(6, 6)}`);
console.log(`square : ${square(6, 6)}`);
