let user = {
  name: "Cosimo",
  age: 30,
};

function User(name, age) {
  this.name = name;
  this.age = age;
}

let paolo = new User("Paolo", 30);
console.log(paolo);
