// const gfg = () => {
//     console.log("hi");
// }*/

/*const square = x => x*x;
console.log(square(4));*/

// const gfg = (x,y,z) => {
//     console.log(x+y+z)
// }
// gfg(10,20,30);

// function foo(){
//     let b = 1;
//     function inner() {
//         return b;
//     }
//     return inner;
// }
// let get_func_inner = foo();
// console.log(get_func_inner());
// console.log(get_func_inner());
// console.log(get_func_inner());   

// 

// 

// function greet()
// {
//     console.log("hello");
// }
// const greetexp = function(){
//     console.log("hello from expression");
// };
// greet();
// greetexp();

// function greet(name){
//     console.log("hello",name);
// }
// greet("computer science");
// greet(); 


// function student(details){
//     console.log("name:",details.name);
//     console.log("roll no:",details.roll);
//     console.log("course:",details.course);
// }
// student({
//     name: "daksh",
//     roll: 101,
//     couse: "btech"
// });

// function greet(name,msg="good morning")
// {
//     console.log(msg+"     "+name);
// }
// greet("yuvraj");
// greet("yuvraj","welcome");

// function add(...numbers){
//     let sum = 0;
//     for(let n of numbers){
//         sum+= n;
//     }
//     return sum;
// }
// console.log(add(5,10,15,20));

// function greet(name,callback){
//     console.log("hello"+ name);
//     callback();
// }
// function saybye(){
//     console.log("goodbye!");
// }
// greet("palak",saybye);


// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// let counter = outer();
// counter();//1
// counter();//2
// counter();//3


// function counter(){
//     let count = 0;
//     return{
//         increment: function(){
//             count++;
//             console.log("Count:", count);
//         },
//         decrement: function(){
//             count--;
//             console.log("Count:", count);
//         } };


//     }
//     let c=counter();
//     c.increment();
//     c.increment();
//     c.decrement();
//     console.log(c.count);

// function greetfactory(greeting){
//     return function(name){
//         console.log(greeting+","+name);
//     };
// }
// let sayHello = greetfactory("Hello");
// let sayHi = greetfactory("Hi");
// sayHello("ishita");
// sayHi("ishita");
    
// function createmultiplier(multiplier){
//     return function(number){
//         return number*multiplier;
//     };
// }
// let double = createmultiplier(2);
// let triple = createmultiplier(3);

// console.log(double(5));
// console.log(triple(5));
    
// let numbers = [1,2,3,4,5];
// let squares = numbers.map(num => num*num);
// console.log(squares);

// let names = ["ishita"];
// let upperNames = names.map(name => name.toUpperCase());
// console.log(upperNames);

// let numbers = [1,2,3,4,5,6];
// let evennumbers = numbers.filter(num=> num %2===0);
// console.log(evennumbers);

// let marks = [35,70,87,45,67];
// let passed = marks.filter(mark => mark >= 40);
// console.log(passed);

// let students = [
//     {name: "a", marks:85},
//     {name: "b", marks:35},
//     {name: "c", marks:75},

// ];
// let topstudents = students.filter(student => student.marks> 70);
// console.log(topstudents);

// setTimeout(function(){
//     console.log("Hello after 3 seconds");
// },3000);


// let timer = setTimeout(() => {
//     console.log("this will not run");
// },5000);
// clearTimeout(timer);


// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 3));

// let numbers = [10,5,25,8];
// let max=numbers.reduce(function(a,b){
//     return a>b?a:b;

// });
// console.log(max);

// let fruits =["apple","banana","apple","orange","banana"];
// let count = fruits.reduce(function(acc,fruit){
//     acc[fruit]=(acc[fruit]||0)+1;
//     return acc;

// },{});
// console.log(count);

// let numbers = [10,20,30];
// numbers.forEach(function(num){
//     console.log(num);
// });

// let fruits = ["apple","banana","orange"];
// fruits.forEach(function(fruit,index){
//     console.log(index + ":"+fruit);
// })


// let numbers = [10,15,25,5];
// let result = numbers.some(function(num){
//     return num>20;

// });
// console.log(result);

// let marks = [55,60,35,70];
// let hasfailed = marks.some(function(mark){
//     return mark<40;
// });
// console.log(hasfailed);

// let numbers = [10,20,30,40];
// let result = numbers.every(num=> num>0);
// console.log(result);

// let numbers = [10,-5,30];
// let result = numbers.every(num=> num>0);
// console.log(result);


// let students =[
//     {name: "naman",marks:80},
//     {name:"riya",marks:70},
//     {name:"rahul",marks:90}
// ];
// let allpassed=students.every(student=> student.marks>=40);
// console.log(allpassed);

// let numbers = [1,3,5,8,10];
// let Index = numbers.findIndex(num=> num%2 === 0);
// console.log(Index);

// let numbers = [1,3,5];
// let result = numbers.find(num => num%2==0);
// console.log(result);

// let student = {
//     name: "Pulkit",
//     age: 25
// };
// console.log(student["name"]);

// let key = "age";
// console.log(student[key]);


// let person = {
//     "full name": "bhavya sharma"
// };
// console.log(person["full name"]);
// person["marks"]=90;
// person["age"]=26;


// let student = {};
// let prop =  "age";
// student[prop]=22;
// console.log(student);

// let keyname = "marks";
// let student = {
//     name:"aman",
//     [keyname]:90

// };
// console.log(student);


// let students = [
//     {name:"himanshu",marks: 60},
//     {name:"Shreya",marks: 80},
//     {name:"Nityam",marks: 90}
// ];
// console.log(students[0].name);

// students[1].marks = 85;
// students[2].grade = "A";
// delete students[0].marks;
// console.log(students);


// let[x,z]=[1,2,3];
// console.log(x);
// console.log(z);


// let numbers = [10,20,30];
// let[a,b,c]=numbers;
// console.log(a);
// console.log(b);
// console.log(c);

// let numbers = [10,20,30];
// let {[0]:x,[1]:y}=numbers;
// console.log(x);
// console.log(y);


// const numbers = [10,20,30,40,50,60,70];
// const[a,b,...rest]=numbers
// console.log(a);
// console.log(b);
// console.log(rest);

// let firstName = "alan";
// let lastName = "turing";
// [firstName , lastName] = [lastName , firstName];        


// let person = { name: "alice" , age: 25,city: "London"};
//     let{name,age}=person;
//     console.log(name);
//     console.log(age);


// let student = {
//     name: "janit",
//     marks: 90
// };
// let{name:studentname,marks:score}=
// student;
// console.log(studentname);
// console.log(score);


// const marks = {
//     section1: {alpha:15,beta:16},
//     section2: {alpha: -31,beta:19}
// };
// const{section1:{alpha:alpha1,beta:beta1}}=marks;
// console.log(alpha1,beta1);


// let student = {
//     name:"ritik",
//     address:{
//         city:"delhi",
//         pincode:110001
//     }
// };
// let {address: {city,pincode}}= student;
// console.log(city);
// console.log(pincode);

// let student = {
//     name: "aman",
//     marks: 90,
//     age:25,
// };
// let{name,...rest}= student;
// console.log(name);
// console.log(rest);

// let obj = {name: "John",age: 30};
//     let jsonString = JSON.stringify(obj);
//     console.log(jsonString);


// let jsonData = '{"name": "john","age":30}';
// let obj= JSON.parse(jsonData);
// console.log(obj.name);
// console.log(obj.age);

// let arr = [10,25,30];
// let result = arr.findLastIndex(x => x<10);
// console.log(result);

// let arr = [10,25,30];
// let result = arr.findLast(x => x>50);
// console.log(result);

// let arr = ["blueberry","cherry","strawberry"];
// arr.sort();
// console.log(arr);

// let arr = ["a","b","c"];
// arr.reverse();
// console.log(arr);

// let students = [
//     {name: "ridhi",marks: 80},
//     {name: "tanu",marks:90},
//     {name: "parth",marks:70}
// ];
// students.sort((a,b) => a.name.localeCompare(b.name));
// console.log(students);

// let arr = [10,2,5,1];
// arr.sort((a,b) => a-b);
// console.log(arr);
// arr.sort((a,b) => b-a);
// console.log(arr);


// let arr = [1,2,3,4];
// arr.sort(() => Math.random()-0.5);
// console.log(arr);


// console.log(Math.min(10,5,20));
// let arr = [10,5,20];
// console.log(Math.min(...arr));


// console.log(Math.max(10,5,20));
// let arr = [10,5,20];
// console.log(Math.max(...arr));


// let arr = [1,2,3];
// arr.forEach(x=> console.log(x*2));

// let arr = [1,2,3];
// let result = arr.map(x=>x*2);
// console.log(result);

// let arr = ["A","B"];
// for (let[i,val] of arr.entries()) {
//     console.log(i,val);
// }

// let arr = [1,2,3];
// let newarr = arr.with(1,99);
// console.log(newarr);


// let arr = [1,2,3];
// arr.push(4);
// console.log(arr.length);       


// Primitive Data Types and typeof Operator

// let num = 25;
// let name = "Ishita";
// let isPass = true;
// let x;
// let y = null;

// console.log(typeof num);      // number
// console.log(typeof name);     // string
// console.log(typeof isPass);   // boolean
// console.log(typeof x);        // undefined
// console.log(typeof y);        // object

// Implementing Comparison, Logical and Ternary Operators

// let a = 15;
// let b = 20;
// let c = 15;

// // Comparison Operators
// console.log("a == c :", a == c);
// console.log("a != b :", a != b);
// console.log("a < b :", a < b);
// console.log("b > c :", b > c);

// // Logical Operators
// console.log("a < b && b > c :", a < b && b > c);
// console.log("a > b || c == a :", a > b || c == a);
// console.log("!(a > b) :", !(a > b));

// // Ternary Operator
// let result = (a > b) ? "a is greater" : "b is greater";

// console.log(result);


// Control Flow using if/else and switch

// let marks = 75;
// let day = 2;

// // if/else statement
// if (marks >= 90) {
//     console.log("Grade A");
// }
// else if (marks >= 70) {
//     console.log("Grade B");
// }
// else {
//     console.log("Grade C");
// }

// // switch statement
// switch(day) {

//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     default:
//         console.log("Invalid Day");
// }



// Demonstration of Different Loops in JavaScript

// for loop
// console.log("For Loop");
// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// // while loop
// console.log("While Loop");
// let a = 1;

// while(a <= 5) {
//     console.log(a);
//     a++;
// }

// // do...while loop
// console.log("Do While Loop");
// let b = 1;

// do {
//     console.log(b);
//     b++;
// }
// while(b <= 5);

// // for...in loop
// console.log("For In Loop");

// let student = {
//     name: "Ishita",
//     age: 19
// };

// for(let key in student) {
//     console.log(key + " : " + student[key]);
// }

// // for...of loop
// console.log("For Of Loop");

// let arr = [10, 20, 30];

// for(let value of arr) {
//     console.log(value);
// }


// Creating and Using Objects in JavaScript

// Object creation
// let student = {
//     name: "Ishita",
//     age: 19,
//     course: "BCA"
// };

// // Property access
// console.log(student.name);        // Dot notation
// console.log(student["age"]);      // Bracket notation

// // Dynamic properties
// student.city = "Chandigarh";      // Add property
// student.age = 20;                 // Modify property

// delete student.course;            // Delete property

// // Display updated object
// console.log(student);

// // Function Declaration (Hoisted)
// sayHello();

// function sayHello() {
//     console.log("Hello from Function Declaration");
// }

// // Function Expression (Not Hoisted)

// // greet(); //  Error if uncommented

// let greet = function() {
//     console.log("Hello from Function Expression");
// };

// greet();

// // Hoisting Example

// console.log(a); // undefined (hoisted but not initialized)
// var a = 10;
// console.log(a); // 10


// Arrow Functions and Lexical this

// // Regular function
// function normalFunction() {
//     console.log("Normal function this:", this);
// }

// // Arrow function
// const arrowFunction = () => {
//     console.log("Arrow function this:", this);
// };

// // Object to demonstrate lexical this
// const student = {
//     name: "Ishita",

//     // Regular method
//     showNormal: function () {
//         console.log("Normal method:", this.name);
//     },

//     // Arrow method (lexical this)
//     showArrow: () => {
//         console.log("Arrow method:", this.name);
//     }
// };

// // Calling functions
// normalFunction();
// arrowFunction();

// student.showNormal(); // works fine
// student.showArrow();  // undefined (lexical this)


// Function Arguments, Default Parameters, and Rest Operator

// Function with default parameter
// function greet(name = "Guest") {
//     console.log("Hello " + name);
// }

// greet("Ishita");
// greet(); // uses default value

// // Function arguments
// function add(a, b) {
//     console.log("Sum:", a + b);
// }

// add(10, 20);

// // Rest operator
// function sum(...numbers) {
//     let total = 0;

//     for (let num of numbers) {
//         total += num;
//     }

//     console.log("Total Sum:", total);
// }

// sum(5, 10, 15);
// sum(1, 2, 3, 4, 5);


// Call by Value and Call by Reference in JavaScript

// Call by Value (Primitive Types)
// function changeValue(x) {
//     x = x + 10;
//     console.log("Inside function (x):", x);
// }

// let a = 5;
// changeValue(a);
// console.log("Outside function (a):", a);

// // Call by Reference (Objects)
// function changeObject(obj) {
//     obj.name = "Updated Name";
//     console.log("Inside function:", obj);
// }

// let student = {
//     name: "Ishita"
// };

// changeObject(student);
// console.log("Outside function:", student);

// Recursive Function (Factorial)

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log("Factorial using recursion:", factorial(5));

// // Lambda Expression (Arrow Function)

// const fact = (n) => {
//     return (n === 0 || n === 1) ? 1 : n * fact(n - 1);
// };

// console.log("Factorial using arrow function:", fact(5));




// function counter() {
//     let count = 0; // private variable

//     return {
//         increment: function () {
//             count++;
//             console.log("Count:", count);
//         },

//         decrement: function () {
//             count--;
//             console.log("Count:", count);
//         },

//         getCount: function () {
//             return count;
//         }
//     };
// }

// let c = counter();

// c.increment();
// c.increment();
// c.decrement();

// console.log("Final Count:", c.getCount());

// Higher Order Functions: map, filter, reduce, setTimeout

// let arr = [1, 2, 3, 4, 5];

// // map() - transform each element
// let mapped = arr.map(x => x * 2);
// console.log("Map:", mapped);

// // filter() - select elements
// let filtered = arr.filter(x => x % 2 === 0);
// console.log("Filter:", filtered);

// // reduce() - single output value
// let reduced = arr.reduce((sum, x) => sum + x, 0);
// console.log("Reduce:", reduced);

// // setTimeout() - delayed execution
// setTimeout(() => {
//     console.log("This message is delayed by 2 seconds");
// }, 2000);

// Arrays & Objects with Destructuring and JSON Handling

// Array destructuring
// let numbers = [10, 20, 30];
// let [a, b, c] = numbers;

// console.log("Array Destructuring:", a, b, c);

// // Object destructuring
// let student = {
//     name: "Ishita",
//     age: 19,
//     course: "BCA"
// };

// let { name, age, course } = student;

// console.log("Object Destructuring:", name, age, course);

// // JSON handling (stringify)
// let jsonString = JSON.stringify(student);
// console.log("JSON String:", jsonString);

// // JSON parsing
// let parsedObject = JSON.parse(jsonString);
// console.log("Parsed Object:", parsedObject);

// Primitive Data Types and typeof Operator

// Implementing Comparison, Logical and Ternary Operators
// Implementing Comparison, Logical and Ternary Operators

// Control Flow using if/else and switch

// let marks = 75;
// let day = 2;

// // if/else statement
// if (marks >= 90) {
//     console.log("Grade A");
// }
// else if (marks >= 70) {
//     console.log("Grade B");
// }
// else {
//     console.log("Grade C");
// }

// // switch statement
// switch(day) {

//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     default:
//         console.log("Invalid Day");
// }
 
 // Demonstration of Different Loops in JavaScript

// for loop
// console.log("For Loop");
// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// // while loop
// console.log("While Loop");
// let a = 1;

// while(a <= 5) {
//     console.log(a);
//     a++;
// }

// // do...while loop
// console.log("Do While Loop");
// let b = 1;

// do {
//     console.log(b);
//     b++;
// }
// while(b <= 5);

// // for...in loop
// console.log("For In Loop");

// let student = {
//     name: "Ishita",
//     age: 19
// };

// for(let key in student) {
//     console.log(key + " : " + student[key]);
// }

// // for...of loop
// console.log("For Of Loop");

// let arr = [10, 20, 30];

// for(let value of arr) {
//     console.log(value);
// }

 // Creating and Using Objects in JavaScript

// Object creation
// let student = {
//     name: "Ishita",
//     age: 19,
//     course: "BCA"
// };

// // Property access
// console.log(student.name);        // Dot notation
// console.log(student["age"]);      // Bracket notation

// // Dynamic properties
// student.city = "Chandigarh";      // Add property
// student.age = 20;                 // Modify property

// delete student.course;            // Delete property

// // Display updated object
// console.log(student);

// Function Declaration (Hoisted)
// sayHello();

// function sayHello() {
//     console.log("Hello from Function Declaration");
// }

// // Function Expression (Not Hoisted)

// // greet(); // Error if uncommented

// let greet = function() {
//     console.log("Hello from Function Expression");
// };

// greet();

// // Hoisting Example

// console.log(a); // undefined (hoisted but not initialized)
// var a = 10;
// console.log(a); // 10
 
 
// // Function Declaration (Hoisted)
// sayHello();

// function sayHello() {
//     console.log("Hello from Function Declaration");
// }

// // Function Expression (Not Hoisted)

// // greet(); // Error if uncommented

// let greet = function() {
//     console.log("Hello from Function Expression");
// };

// greet();

// // Hoisting Example

// console.log(a); // undefined (hoisted but not initialized)
// var a = 10;
// console.log(a); // 10
 
//  // Function Declaration (Hoisted)
// sayHello();

// function sayHello() {
//     console.log("Hello from Function Declaration");
// }

// // Function Expression (Not Hoisted)

// // greet(); // Error if uncommented

// let greet = function() {
//     console.log("Hello from Function Expression");
// };

// greet();

// // Hoisting Example

// console.log(a); // undefined (hoisted but not initialized)
// var a = 10;
// console.log(a); // 10
 
 
// // Function Declaration (Hoisted)
// sayHello();

// function sayHello() {
//     console.log("Hello from Function Declaration");
// }

// // Function Expression (Not Hoisted)

// // greet(); // Error if uncommented

// let greet = function() {
//     console.log("Hello from Function Expression");
// };

// greet();

// // Hoisting Example

// console.log(a); // undefined (hoisted but not initialized)
// var a = 10;
// console.log(a); // 10
 
 


// Function Declaration (Hoisted)
// s// Arrow Functions and Lexical this

// Regular function
// // Function Arguments, Default Parameters, and Rest Operator

// Function with default parameter
// function greet(name = "Guest") {
//     console.log("Hello " + name);
// }

// greet("Ishita");
// greet(); // uses default value

// // Function arguments
// function add(a, b) {
//     console.log("Sum:", a + b);
// }

// add(10, 20);

// // Rest operator
// function sum(...numbers) {
//     let total = 0;

//     for (let num of numbers) {
//         total += num;
//     }

//     console.log("Total Sum:", total);
// }

// sum(5, 10, 15);
// sum(1, 2, 3, 4, 5);



// Call by Value and Call by Reference in JavaScript

// // Higher Order Functions: map, filter, reduce, setTimeout

// // Arrays & Objects with Destructuring and JSON Handling

// Array destructuring
let numbers = [10, 20, 30];
let [a, b, c] = numbers;

console.log("Array Destructuring:", a, b, c);

// Object destructuring
let student = {
    name: "Ishita",
    age: 19,
    course: "BCA"
};

let { name, age, course } = student;

console.log("Object Destructuring:", name, age, course);

// JSON handling (stringify)
let jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

// JSON parsing
let parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);
