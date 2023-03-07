// 1.3 The future of 'var'
// 2.0 Arrow Functions
const names = ["manju", "snack", "milk"];

// 기존의 작성 방법
// function addHeart(item) {
//   return item + " ❤";
// }
// const hearts = names.map(addHeart);

// 기존의 간략하게 작성한 방법
// const hearts = names.map(function(item) {
//   return item + " ❤";
// });

// 3. Arrow functions
// const hearts = names.map(item => {
//   return item + " ❤";
// });

// const hearts = names.map((item, index) => {
//   console.log("we are on", index);
//   return item + " ❤";
// });

// 매개변수를 1개만 사용할 때, implicit function
// const hearts = names.map(item => item + " ❤");

// 매개변수를 2개 이상 사용할 때
// const hearts = names.map((item, index) => item + " ❤ " + index);

// 매개변수가 없을 때
const hearts = names.map(() => " ❤ ");

console.log(hearts);
