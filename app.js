// console.log("hello"); // вивід в консоль hello
// коментар
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

// змінні

// let var const

// let message = "hello everybody";

// console.log(message);

// let name = "Volodymyr";
// name = "Ivan";
// const name = "Volodymyr";
// name = "Ivan";

// let name = "Volodymyr";
// // name = "Ivan";
// name = 5;

// console.log("hello " + name);
// const user = {
//     name: "Volodymyr",
//     age: 28,
//     online: true,
//     house: null,
//     wife: unde
// }

// let age = 2000;
// let name  = "Volodymyr";

// console.log(typeof age);
// console.log(typeof(name));
// let name = "Volodymyr";
// let age = 2000;
// let email = "mail@mail";

// console.log("Hello " + name + " your age is " + age + "email: " + email);
// console.log(`Hello ${name} your age is ${age} email is ${email}`);

// alert("hello from js");

// let name = prompt("hello whats your name?");

// alert("Hello " + name);

// let ok = confirm("Are you okay?");
// alert("the user is ok? - " + ok);

// lesson 2

// let i = 1;

// i = i + 1;
// i++;
// i+=1;
// i--
// i-=1;

// Math

// Math.pow(2,4); - степінь

// Math.sqrt(16);

// console.log(10 + "5"); - "105"

// console.log(5 +"5"+5); - "555"

// console.log(10 >= 10)

// false - 0, ""
// true = 1, "sf"

// let age = +prompt("how old are you?");

// let result = (age > 18) ? "you are adult" : "you are young";

// console.log(result);

// const students = ["Ivan", "Petro", "Marcel"];

// console.log(students);
// console.log(students[2]);

// students[0] = "John";

// console.log(students);

// students[3] = "John";

// students[6] = "Max";
// console.log(students);

// console.log(students.length);

// const students = ["Ivan", "Petro", "Marcel"];

// students.push("John");
// students.pop();

// console.log(students);
// let age = +prompt("how old are you?");

// if(age > 18){
//     console.log("you are adult");
// }

// if(age > 18){
//     console.log("you are adult");
// }else{
//     console.log("you are too young");
// }

// if(age > 18){
//     console.log("you are adult");
// }else if(age < 18){
//     console.log("you are too young");
// }else{
//     console.log("wrong age");
// }

// if(age > 18 && age < 25){
//     console.log("age is between 18 and 25");
// }else if(age > 25 && age < 35){
//     console.log("age is between 25 and 35");
// }else if (age > 35 && 45){
//     console.log("age is between 35 and 45");
// }

// let age = +prompt("how old are you?");

// switch(true){
//     case age > 18 && age < 25:
//         onsole.log("age is between 18 and 25");
//         break;
//     case age > 25 && age < 35:
//         console.log("age is between 25 and 35");
//         break;
//     case age > 35 && age < 45:
//         console.log("age is between 35 and 45");
//         break;
//     default:
//         console.log("you are not 18 and not 25");
// }

// switch(age){
//     case 18:
//         console.log("you are 18");
//         break;
//     case 25:
//         console.log("you are 25");
//         break;
//     default:
//         console.log("you are not 18 and not 25");

// }

// lesson 3

// while for for of for in

// while

// console.log(0);
// console.log(1);

// let i = 0;
// while(i <= 5){
//     console.log(i);
//     i+=2;
// }

// let i = 5;
// while(i >= 0){
//     console.log(i);
//     i-=1;
// }

// for

// for(let i = 0; i <= 10; i+=2){
//     console.log(i);
// }

// const students = ["Ivan", "Petro", "Marcel", "John", "Marcko"];

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

// for(let i = 0; i < students.length; i+=2){
//     console.log(students[i]);
// }

// for of

// for(let element of students){
//     console.log(element);
// }

// for in

// for(let i in students){
//     console.log(students[i]);
// }

// break, continue

// const students = ["Ivan", "Petro", "Marcel", "John", "Marcko"];

// for(let i = 0; i < students.length; i+=1){
//     console.log(students[i]);
//     if(students[i] === "Marcel"){
//         break;
//     }
// }

// for(let i = 0; i < students.length; i+=1){
//     if(students[i] === "Marcel"){
//         continue;
//     }
//     console.log(students[i]);
// }

// functions

// function sayHello(){
//     console.log("hello");
// }

// function sayHello(message){
//     console.log(message);
// }

// function sayHello(message){
//     // console.log(message);
//     return message;
// }

// let result = sayHello("hello hello");
// console.log(result);

// console.log(sayHello("hi guys"));

// function sum(a,b){
//     // console.log(a + b);
//     return a + b;
// }

// console.log(sum(10,20));

// arguments

// function func(){
//     // console.log(arguments);
//     for(let i = 0; i < arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }

// func("ivan", "petro", "vasyl");

// function sum(){
//     // console.log(arguments);
//     let result = 0;
//     for(let i = 0; i < arguments.length; i++){
//         // console.log(arguments[i]);
//         result += arguments[i];
//     }
//     console.log(result);
// }

// sum(10,20,345,6,5,7,84,34);

// два види функцій

// 1 function expression
// let sum = function(){
//     // console.log();
//     // ...
// }

// 2 function declaration

// function sum(){
//     // ....
// }

// hello();

// function hello(){
//     console.log("hello");
// }

// hello();

// let hello = function(){
//     console.log("hello");
// }

// колекція set

// 3 доманє завдання
//  у чаті homeworks
// здавати потрібно github репозиторій

// папка homework3
// index.html
// app.js

// task1

// ...

// task 2

// ...

// const arr = [1,2,3,];

// const newArr = [...arr];

//  querySelector(""),  querySelectorAll("")

// classList.add();
// let message = 'First paragraph'
// document.body.innerHTML = `<main class="mainClass check item">
//                 <div id="myDiv">
//                     <p>${message}</p>
//                 </div>
//         </main> `

// let regexp = new RegExp(//);

// let regexp = //;

// let regexp = //;

// console.log(/[a][^a]/.test("aa"));

// console.log("sfsfsf 235.8549887676".match(/\d{3}\.\d{3}/));

// const title = document.querySelector(".title");

// title.addEventListener("click",function(){
//     console.log("click work");
// })

// $(function(){

// let title = $(".title");
// title.on("click", function(){
//     console.log("click work");
// })

// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/photos",
//     dataType: "json",
//     success: function(photos){
//         console.log(photos[2].title);
//         // $.each(photos, function(i, photo){
//         //     console.log(photo.title);
//         // })
//     }
// })

// })

// let hello = function(){
//     console.log("hello");
// }

// let hello = () => {
//     console.log("hello");
// }

// let hello = function(a,b){
//     console.log(a);
// }

// let hello = (a,b) => {
//     console.log(a);
// }

// let sum = function(a,b){
//     return a + b;
// }

// let sum = (a,b) => a + b;
// let sum = (a,b) => {
//     if(a > 0){
//         return a + b;
//     }
// };

// setTimeout(function(){
//     console.log("hello");
// },2000);

// setTimeout(() => {
//     console.log("hello");
// },2000);

// function func(a,b = 1){
// console.log(a,b);
// }

// func(2,3);

// const checkboxes = document.querySelectorAll("input");
// console.log(checkboxes);
// const newCkeckboxes = [...checkboxes];

// checkboxes.addEventListener("click", function(){
//     // console.log(checkboxes.checked);
// });

// checkboxes.forEach(element => {
//     element.addEventListener("click",function(){
//         const checkedCheckboxes = document.querySelectorAll("input:checked");
//         if(checkedCheckboxes.length === 3){
//             checkboxes.forEach(element =>{
//                 element.disabled = true;
//             })
//         }
//     });
// })

// console.log(checkboxes);

// console.log("1");

// setTimeout(() => {console.log("2")});
// console.log("3");

// function hello(){
//     return "hello";
// }

// console.log(hello());

// function hello(){
//     return new Promise((resolve, reject) => {
//         resolve("hello");
//     })
// }
// console.log(hello());
// hello().then((result) => {
//     console.log(result);
// })

// function sum(a,b){
//     return new Promise((resolve, reject) => {
//         if(a > 0){
//             resolve(a + b);
//         }else {
//             reject("wrong first value");
//         }
//     })
// }

// sum(-5,6).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

// sum(-5,6).then((result) => {
//     console.log(result);
// }, error => {
//     console.log(error);
// });

// function sum(a,b){
//     return new Promise((resolve, reject) => {
//         if(a > 0){
//             resolve(a + b);
//         }else {
//             reject("wrong first value");
//         }
//     })
// }

// sum(-5,6).then((result) => {
//     // console.log(result);
//     return result + 10;
// }).then((result) => {
//     // console.log(result);
//     // return result + 10;
//     return sum(10,40);
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
//     return sum(20, 100);
// }).then((result) => {
//     console.log(result);
// })

// async function hello(){
//     return "hello";
// }

// // console.log(hello());
// hello().then((result) => {
//     console.log(result);
// })

// const doSomethingAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("I did something"), 2000);
//   });
// };

// const doSomething = async () => {
//   console.log(await doSomethingAsync());
// };

// console.log("Before");
// doSomething();
// console.log("After");


// console.log("hi guys all");

// alert("hello");

// const fs = require("fs");


// fs.readFile("./text.txt", function(err, data){
//   console.log(data.toString());
// })

const http = require("http");
const { hello } = require("./new.js");

console.log(hello);

// http.createServer(function(request, response){
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("<h1>hello hello hello</h1>");
//     response.end();
// }).listen(8000);

// console.log("Server is listening on port http://localhost:8000");