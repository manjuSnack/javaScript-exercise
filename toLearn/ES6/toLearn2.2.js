// 2.2 Arrow Functions in the Real World

// email search
const emails = [
  "manju@google.com",
  "snack@gmail.com",
  "naver@google.com",
  "twitter@gmail.com",
];

// find()
const foundMail = emails.find((item) => item.includes("@gmail.com"));
// const foundMail = emails.find(function (item) {
//   return item.includes("@gmail.com");
// });

console.log(foundMail);

// filter( )
const noGmail = emails.filter((potato) => !potato.includes("@gmail.com"));

console.log(noGmail);

// forEach( )
// emails.forEach((email) => {
//   console.log(email.split("@")[0]);
// });

// const cleaned = [];
// emails.forEach((email) => {
//   cleaned.push(email.split("@")[0]);
// });
// console.log(cleaned);

// forEach( ), map( )
const cleaned = emails.map((email) => email.split("@")[0]);
console.log(cleaned);

const cleanedObject = emails.map((email, index) => ({
  username: email.split("@")[0],
  index: index,
}));
console.table(cleanedObject); // table 형식으로 출력
