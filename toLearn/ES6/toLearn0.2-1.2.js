// 0.2 ~ 1.2 Block Scope
let hello = "hi";
if (true) {
  console.log(hello);
  const a = "a";
}

console.log(a);
