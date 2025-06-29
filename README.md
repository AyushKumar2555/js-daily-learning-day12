# 🚀 JavaScript Practice - Day 12

This project is a part of my JavaScript learning journey (Day 12), where I explored the following core concepts:

## ✅ What I Learned

- **JavaScript Objects**
  - Creating and accessing object properties
  - Using `for...in` loop to iterate over object keys
- **Object Methods**
  - Defining a function inside an object as a method
- **Function Constructors**
  - Creating multiple object instances using constructor functions

---

## 📁 Files

- `index.js` – Contains all JavaScript practice code

---

## 🔍 Code Highlights

### Object with Method Example

```javascript
let obj = {
  name: "ayush",
  age: 21,
  employed: true,
  email: "ayushk9451@gmail.com",
  bio: function (name, age) {
    console.log(`My name is ${name} and I am ${age} years old`);
  }
};

obj.bio(obj.name, obj.age);
