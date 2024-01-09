function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

const myFather = new Person("John", "Doe", 50, "blue");
document.getElementById("demo").innerHTML = "My father is " + myFather.name();

class ToyotaCar {
  constructor(brand) {
    console.log("creating new object");
    this.brand = brand;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  //Define a variable.
  setBrand(brand) {
    this.brand = brand;
  }

  favColor(color) {
    this.color = color;
  }

  fullName(name, age) {
    this.name = name; //this.name (is a object propertie),,\ and (name) is and fuction argument
    this.age = age;
  }
}

//Create and object using class

let fortuner = new ToyotaCar("fortuner");
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.favColor("blue");

fortuner.fullName("Deepak", 34);
