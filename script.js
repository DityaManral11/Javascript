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


// const p=new Promise(function(){})
// console.log(p);

// const p = new Promise(function(resolve){
//     resolve()
// })
// console.log(p);

// const p = new Promise(function(resolve, reject){
//     // resolve()
//     reject()
// })
// console.log(p);


// const p=new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let done = true;
//         if(done){
//             resolve()
//         }else{
//             reject()
//         }
        
//     }, 5000);
// })
// console.log(p);

// const p=new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let done = true;
//         if(done){
//             resolve({name:"ditya",age:18})
//         }else{
//             reject({message:"Network Issue!"})
//         }
        
//     }, 5000);
// })
// p.then((data)=>{
//     console.log("Resolved", data);
// }).catch((err)=>{
//     console.log("Rejected", err);
// })

// const p=new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let done = false;
//         if(done){
//             resolve({name:"ditya",age:18})
//         }else{
//             reject({message:"Network Issue!"})
//         }
        
//     }, 5000);
// })
// p.then((data)=>{
//     console.log("Resolved", data);
// }).catch((err)=>{
//     console.log("Rejected", err);
// }).finally(()=>{
//     console.log("Finally Block!")
// })

// function doHomework(){
//     const p = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             let done = true;
//             if(done){
//                 console.log("Homework is done!")
//                 resolve("Homework Complete!")
//             }else{
//                 reject("Homework is not done!")
//             }
//         }, 2000);
//     });
//     return p
// }

// function eatDinner(){
//     const p = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             let done = true;
//             if(done){
//                 console.log("Dinner is done!")
//                 resolve("Dinner Complete!")
//             }else{
//                 reject("Dinner is not done!")
//             }
//         }, 2000);
//     });
//     return p
// }

// function goToPlayground(){
//     const p = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             let done = true;
//             if(done){
//                 console.log("Went to the playground!")
//                 resolve("Playground Time!")
//             }else{
//                 reject("Not allowed to play!")
//             }
//         }, 2000);
//     })
//     return p
// }

// doHomework().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Go to Sleep!")
// })


// console.log("First Line!");
// setTimeout(()=>{
//     console.log("Inside SetTimeout!");
// },0)
// const p=new Promise((resolve, reject) => {
//     resolve()
// })
// p.then(() => {
//     console.log("Inside Promise!");
// }).catch(()=>{
//     console.log("Promise Catch!");
// })
// const p2 = new Promise((resolve, reject) => {
//     resolve()
// })
// p2.then(()=>{
//     console.log("Inside Second Promise!");
// }).catch(()=>{
//     console.log("Second Promise Catch!");
// })
// console.log("Last Line!")


// function orderFood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Food ordered")
//             resolve("Food ordered")
//         },1000)
//     })
// }

// function prepareFood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Food prepared")
//             resolve("Food prepared")
//         },1000)
//     })
// }

// function deliverFood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Food delivered")
//             resolve("Food delivered")
//         },1000)
//     })
// }

// orderFood().then((data)=>{
//     console.log(data)
//     return prepareFood()
// }).then((data)=>{
//     console.log(data)
//     return deliverFood()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


// function orderFood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Food ordered")
//             resolve("Food ordered")
//         },1000)
//     })
// }

// function prepareFood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Food prepared")
//             resolve("Food prepared")
//         },1000)
//     })
// }

// function deliverFood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Food delivered")
//             resolve("Food delivered")
//         },1000)
//     })
// }

// async function order(){
//     const data = await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()
// }
// order()


// console.log("First line")
// console.log(sample)
// console.log("Last line")


// console.log("First line")
// try{
//     let sample = 324
//     console.log(sample)
// }catch(error){
//     console.log(error)
// }finally{
//     console.log("Finally block")
// }
// console.log("Last Line")


// console.log("First line")
// try{
//     // let sample = 324
//     // console.log(sample)
//     let age = 15
//     if(age<18){
//         // error
//         throw new Error("Access denied")
//     }
// }catch(error){
//     console.log(error)       
// }finally{
//     console.log("Finally block")
// }
// console.log("Last Line")


// async function getData(){
//     try{
//         const response = await fetch ("https://dummyjson.com/products/200")
//         console.log(response.ok)
//         if(response.ok===false)throw new Error("Data not found")
//         const data=await response.json()
//         console.log(data)
//         // data.products.forEach((ele)=>{
//         //     console.log(ele.price)
//         // })
//     }catch(error){
//         console.log("Data not found")
//     }
// }


// async function sendData(){
//     try{
//         const response = await fetch("https://dummyjson.com/products/add", {
//             method: "POST",
//             headers: {"content-type":"application/json"},
//             body: JSON.stringify({
//                 title:"Macbook",
//                 description:"Macbook Pro",
//                 price:1000000,
//                 discountPercentage:5,
//                 rating:4.5,
//                 stock:5,
//                 brand:"Apple",
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("Data not found!")
//     }
// }
// sendData()


// localStorage.setItem("name", "Ditya")
// localStorage.setItem("age", 18)
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))


// let obj={
//     title:"Macbook",
//     description:"Macbook Pro"
// }

// localStorage.setItem("obj",JSON.stringify(obj))
// localStorage.setItem("name", "Ditya")
// localStorage.setItem("age", 18)
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))
// console.log(JSON.parse(localStorage.getItem("obj")))

// localStorage.removeItem("age")

// localStorage.clear()


// let obj={
//     title:"Macbook",
//     description:"Macbook Pro"
// }
// sessionStorage.setItem("obj",JSON.stringify(obj))
// sessionStorage.setItem("name", "Ditya")
// sessionStorage.setItem("age", 18)
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))
// console.log(JSON.parse(sessionStorage.getItem("obj")))


document.cookie="name:Ditya; expires=Sat 21 Feb 2026 12:00:00 UTC"
document.cookie="age:18; expires=Sat 21 Feb 2026 12:00:00 UTC"

console.log(document.cookie)

async function sample(){
    await fetch("https://127.0.0.1.5500/index.html")
}
sample()