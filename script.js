// let obj = {
//     name:"Ditya",
//     phone: 1234567890,
//     address: "DLI"
// }
// let obj2 = {
//     name: "Jiya",
//     phone: 9876543210,
//     address: "HR"
// }
// obj2.name = "Laxmi"
// console.log(obj2.name)

// const para = document.getElementById('para')
// para.textContent = "This is now an updated paragraph"
// para.style.color = "green"
// console.log(para)

// const para = document.getElementsByClassName('para')
// para[0].textContent = "This is now an updated paragraph"
// para[1].style.color = "green"
// console.log(para)

// const para = document.querySelector('.para')
// para.textContent = "This is now an updated paragraph"
// para.style.color = "green"
// console.log(para)

// const para = document.querySelector('#para')
// para.textContent = "This is now an updated paragraph"
// para.style.color = "green"
// console.log(para)            

// let arr = [12,4,67,567,98]
// arr.forEach((ele)=> console.log(ele))

// const para = document.getElementsByClassName('para')
// para[0].textContent = "This is now an updated paragraph"
// para[1].style.color = "green"
// console.log(para)
// para2.forEach((ele)=>console.log(ele.textContent))


// const para2 = document.querySelectorAll('.para')
// para2[0].textContent = "This is now an updated paragraph"
// para2[1].style.color = "green"
// console.log(para2)
// para2.forEach((ele)=>console.log(ele))
// para2.forEach((ele)=>console.log(ele.textContent))

// INNER HTML
// const para2 = document.querySelectorAll('.para')
// para2[0].innertext = "This is now an updated paragraph"
// para2[0].textContent = "This is now an updated paragraph"
// para2[1].style.color = "green"
// para2[1].innerHTML = "<div><b>Hello</b>World</div>"
// console.log(para2)

// const button = document.querySelector('button')
// // const button2 = document.querySelector('#btn')

// // button2,addEventListener('click', function(){
// //     button.classList.add('btn')
// // })
// button.classList.add('btn')
// button.classList.remove('btn')
// button.classList.toggle('btn')

// const button = document.querySelector('button')
// button.classList.add('btn1')
// function message(){
//     alert("You have clicked the button")
// }
// button.addEventListener('click', message)
// // button.addEventListener('mouseover', message)


// const button = document.querySelector('#btn1')
// const button2 = document.querySelector('#btn2')
// button.classList.add('#btn1')
// function message(){
//     alert("You have clicked the button")
// }
// button.addEventListener('click', message)

// button2.addEventListener('click' , function(){
//     button.removeEventListener('click' , message)
// })


// const button = document.querySelector('#btn1')
// // const button2 = document.querySelector('#btn2')
// button.classList.add('#btn1')
// function message(event){
//     alert("You have clicked the button")
//     console.log(event)
// }
// button.addEventListener('click', message)

// // button2.addEventListener('click' , function(){
// //     button.removeEventListener('click' , message)
// // })

// const btn1 = document.querySelector("#btn1")
// btn1.addEventListener('keydown', function(event){          //when key is pressed
//     console.log(event.key)
// })

// const para = document.querySelector("#btn1")
// para.addEventListener('keyup', function(event){            //when key is released
//     console.log(event.key)
// })

// const handlesubmit = () => {
//     console.log("Form Submitted!")
// }
// const form = document.querySelector("form") 
// form.addEventListener("Submit", handlesubmit)


// const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form Submitted!")
// }
// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit)

// console.log("Updated Code!")

// const btn = document.querySelector("button")
// const div = document.querySelector(".container")
// const div2 = document.querySelector(".outer")

// btn.addEventListener("click", function(){console.log("button")}, true)
// div.addEventListener("click", function(){console.log("Div")})
// div2.addEventListener("click",function(){console.log("Div2")})


// debugger
// console.log(a)

// var a=78  //part of global scope
// let b=90  //part of script scope
// console.log(a)
// console.log(b)

// function print(){
//     let c=45
//     console.log(c)
//     console.log("Inside Function")
// }
// print()


// debugger
// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     console.trace()
// }
// first()

// let total=100

// function calculate()

// ASYNCHRONOUS PROGRAMMING

// console.log("First Line")
// setTimeout(() => {
//     console.log("After 2 sec")
// },2000)
// console.log("Second Line")

// setTimeout(() => {
//     alert("Alert after 3 sec")
// }, 3*1000)


// const timerId = setInterval(() => {
//     console.log("Hello Students!")
// },2000)             // for 2 sec

// console.log(timerId)
// clearInterval()

// const timerId = setInterval(() => {
//     console.log("Hello Students!")
// },1000)             // for 2 sec

// setTimeout(() => {
//     clearInterval(timerId)
// },10*1000)

// let count = 1;

// const id = setInterval(() => {
//     if(count == 10)clearInterval(id) 
//     console.log(count);
//     count += 1
// },1000);

// console.log("First Line")
// const id = setTimeout(() => {
//     console.log("After 2 sec")
// },2000)
// clearTimeout(id)
// console.log("Second Line")

// Callback Function Example

// function print (){              //callback function
//     console.log("Hello Student")
// }

// function greet(num){        // higher order function
//     console.log("Welcome to my class!!")
//     setTimeout(() => {
//         console.log("Inside setTimeout")
//     }, 2000);
//     num()
// }

// greet(print)  // passing function as an argument


// Callback Function Example with changing num position

// function print (){              //callback function
//     console.log("Hello Student")
// }

// function greet(num){        // higher order function
//     console.log("Welcome to my class!!")
//     setTimeout(() => {
//         console.log("Inside setTimeout")
//     num()
//     }, 2000);
// }

// greet(print)  // passing function as an argument


// Callback Function Example with Argument

// function print (name){              //callback function
//     console.log("Hello Student", name)
// }

// function greet(num){        // higher order function
//     console.log("Welcome to my class!!")
//     setTimeout(() => {
//         console.log("Inside setTimeout")
//         let firstname = "Jiya"
//         num(firstname)
//     }, 2000);
// }

// greet(print)  // passing function as an argument


// Callback Hell Example

// console.log("Starting Homework...");

// setTimeout(() => {
//     console.log("Homework done!");
//     console.log("Starting Dinner...");

//     setTimeout(() => {
//         console.log("Dinner done!");
//         console.log("Getting ready to go out....");

//         setTimeout(() => {
//             console.log("Going to the playground!");
//         }, 1000);          //after dinner

//     }, 1500);       //dinner time

// }, 2000);           // homework time


// 2nd method Callback Hell Example

// function finishHomework(callback){
//     console.log("Starting Homework...");
//     setTimeout(() => {
//         console.log("Homework done!");
//         callback();
//     }, 2000);
// }
// function eatDinner(callback){
//     console.log("Starting Dinner...");
//     setTimeout(() => {
//         console.log("Dinner done!");
//         callback();
//     }, 1500);
// }
// function goPlayground(){
//     console.log("Going to the playground!");
// }

// finishHomework(() => {
//     eatDinner(() => {
//         goPlayground()
//     });
// });
