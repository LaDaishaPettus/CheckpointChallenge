// 1. an object is a collection of related data with key value pairs
//2. "this" is referring to the object where its created, it's referring to the scope. 
// 3. *.class *.constructors, *.using object literals

// // 4.
//  var fruits = [];
//  fruits.push({fruit: 'bananas'})










// // 5.
// var person = {
//     name: "John", age: "20",
// }
// alert(`${person.name} is ${person.age}`)


// 6. 
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.introduce = function () { `My name is ${this.firstName} ${this.lastName} and i am ${this.age} years old` };
    this.discountEligible = function () {
        if (this.age >= 65) {
            alert('your eligible for a discount!')
        }
        else {
            alert('your not eligible for a discount!')
        }
    }

}

let arely = new Person('arely', 'guevara', 20);
arely.discountEligible();



// 7. 
// function Movie(title, director, writer, release, rating) {
//     this.title = title;
//     this.director = director;
//     this.writer = writer;
//     this.release = release;
//     this.rating = rating;
//     this.trailor = function () {
//         alert(`${this.title} was written by ${this.writer} and directed by ${this.director} and will be released on ${this.release}`)
//     }
//     this.audience = function () {
//         if (this.rating == "R") {
//             alert("For audience above age 16");
//         }
//         else if (this.rating == "PG-13") {
//             alert("parental guidence suggested");
//         }

//         else if (this.rating == "G") {
//             alert("For general audiences");
//         }
//         else {
//             return
//             this.rating;
//         }

//     }
// }

// let scary = new Movie('Scary Stories', 'Andre Ovredal', 'Guillermo del Toro', 'August 9 2019', 'PG-13');
// scary.trailor();
// scary.audience();

