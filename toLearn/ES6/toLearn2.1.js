// 2.1 'this' in Arrow Functions
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(this); // HTMLButtonElement를 가리킨다.
  this.style.backgroundColor = "tomato";
  console.log("I have been clicked");
});

// Arrow functions에서 this는 windows를 가리킨다.
const handleClick = () => {
  console.log(this);
};

button.addEventListener("click", handleClick);
button.addEventListener("click", () => {
  console.log(this);
});

const manju = {
  name: "Manju",
  age: 5,
  addYear() {
    this.age++;
  },
  // Arrow Function은 this가 windows Object를 가리킨다.
  //   addYear: () => {
  //     this.age++;
  //   },
};

console.log(manju);
manju.addYear();
manju.addYear();
console.log(manju);
