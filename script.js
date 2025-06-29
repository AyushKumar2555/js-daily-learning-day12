let obj = {
    name: "ayush",
    age: 21,
    employed: true,
    email: "ayushk9451@gmail.com",
    bio: function (name , age ) {
        console.log(`my name is ${name} and i am ${age} years old`);
    }
};

obj.bio(obj.name , obj.age); // calling method

// Constructor Function
function Car(Brand, Model, Year) {
    this.Brand = Brand;
    this.Model = Model;
    this.Year = Year;
}
const car1 = new Car('Mahindra', 'Thar', 2024);
console.log(car1);
