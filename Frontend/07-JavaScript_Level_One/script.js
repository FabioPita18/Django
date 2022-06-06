var firstName = prompt("Please enter your first name: ");
var lastName = prompt("Please enter your last name: ");
var age = prompt("Please enter your age: ");
var height = prompt("Please enter your height in centimeteres: ");
var petName = prompt("Please enter your pets name: ");
alert("thanks for the information.")

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

if (firstName[0] === lastName[0]) {
  nameCond=true;
}else {
  nameCond=false;
}

if (age > 20 && age < 30) {
  ageCond=true;
}else {
  ageCond=false;
}

if (height>=170) {
  heightCond = true;
}else {
  heightCond = false;
}

if (petName[petName.length-1] === "y") {
  petCond= true;
}else {
  petCond= false;
}

if (nameCond && ageCond && heightCond && petCond) {
  console.log("Welcome my spy!");
}else {
  console.log("Wrong log bozo");
}
