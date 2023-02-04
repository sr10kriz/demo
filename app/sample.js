let person = {
  name: "Josh",
  age: 25,
};
console.log(person);
// person = object | name,age = property
person.name = "Portialla";
// dot notation (this is better choice)
console.log(person.name);
// OR bracket notation
person["name"] = "JoshPortialla";
console.log(person["name"]);
