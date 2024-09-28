//Qs-1. generate a random number representing a dice roll
let dice = Math.floor(Math.random() * 6) + 1;
console.log(`Dice no: ${dice}`);


//Qs-2. an object representing a car with properties : name,model,color
let car = {
    name: "Tata",
    model: "Bolt",
    color: "Grey"
};
console.log(car.name);


//Qs-3. Create an objectPerson with their name,age and city.
//Edit their city’s original value to change it to “New York”.
//Add a new property country and set it to the United States
let person = {
    name: "Firangi",
    age: 30,
    city: "Las Vegas"
}
person.city = "New York";
console.log(person.city);

person.country = "USA";
console.log(person.country);

console.log(person);


//Qs-4. 
