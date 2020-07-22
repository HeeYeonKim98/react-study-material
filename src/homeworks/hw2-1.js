//1
var a = "hello";

if (1) {
  var a = "hello in block";
  console.log(a);
}
console.log(a);

//2
let a = "hello";
if (1) {
  let a = "hello in block";
  console.log(a);
}
console.log(a);

//3
const a = "hello";
{
  const a = "hello in block";
  console.log(a);
}
console.log(a);

//4
setTimeout(() => console.log("안녕하세요"), 2000);

console.log("안녕히가세요");
