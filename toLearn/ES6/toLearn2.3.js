// #2.3 Default Values
// function sayHi(aName) {
//   return "Hello " + (aName || " anon"); // default value 주는 방법
// }

function sayHi(aName = "anon") {
  return "Hello " + aName;
}

const DEFAULT = "manju";

const sayBye = (aName = DEFAULT) => "Bye " + aName;

console.log(sayHi());
console.log(sayBye());
