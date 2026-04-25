// Object Manipulation

// let obj = {
//     Name: "Anushka",
//     Age: 18,
//     City: "Bhiwadi"
// }

// let obj2 = {
//     name: "Ankita",
//     age: 19,
//     city: "Delhi"   
// }
// obj2.name = "Simran"  // Updating the name property
// console.log(obj2.name)

// const para = document.querySelector('p');  // Selecting the first paragraph element
// para.textContent = "This is updated paragraph."
// console.log(para.textContent);

// console.log(document)  // Logs the entire document object

// //getElementById

// const para = document.getElementById('para1')
// para.textContent = "This is updated paragraph using getElementById."
// para.style.color = "blue"
// console.log(para.textContent)


// getElementsByClassName

// const para = document.getElementsByClassName('info')
// para[0].textContent = "This is updated paragraph using getElementsByClassName."
// para[1].style.color = "pink"
// console.log(para)
// para.forEach((ele) => console.log(ele))

// console.log(document)  // Logs the entire document object

//Query Selector

// const para = document.querySelector('.info');
// para.textContent = "This is updated paragraph using queryselector."
// para.style.color = "pink"
// console.log(para)


//ForEach 

// let arr = [12, 4, 65, 3, 324, 56]
// arr.forEach((ele)=> console.log(ele))


// Query Selector All


// const para2= document.querySelectorAll('.info')
// para2[0].textContent = "This is updated paragraph using getElementsByClassName."
// para2[0].style.color = "green"
// para2[1].style.color = "magenta" 
// para2[2].style.color = "cyan"
// console.log(para2)
// para2.forEach((ele) => console.log(ele))


// INNERHTML and TEXTCONTENT

// const para3= document.querySelectorAll('.info')
// para3[0].innertext = "Updated"
// para3[0].textContent = "Now updated"
// para3[1].innerHTML= "<div>Hello World</div>"
// console.log(para3)


// Adding Event Listeners and Manipulating Classes


// const button = document.querySelector('button')
// const button2 = document.querySelector('#btn')

// button2.addEventListener('click',function(){

//     button.classList.add('btn')
// })


//  Using ClassList to Manipulate Classes

// const button = document.querySelector('button')

// button.classList.add('btn')
// button.classList.remove('btn')
// button.classList.toggle('btn') // adds if not present, removes if present


// function message(){
//     alert("You have clicked the button.")
// }

// button.addEventListener('click', message)
// button.removeEventListener('click', message)


// EXAMPLE: Click Event with Alert and Stop Remove Event Listener

// const button = document.querySelector('#btn')
// const button2 = document.querySelector('#stop')

//  function message(){
//          alert("You have clicked the button.")
// }
// button.addEventListener('click', message)

// button2.addEventListener('click', function(){
//     button.removeEventListener('click', message)
// })


// Event Object Example

// const button3 = document.querySelector('#btn')
// const button4 = document.querySelector('#stop')

//  function message(Event){
//          alert("You have clicked the button.")
//          console.log(Event)
// }
// button3.addEventListener('click', message)

// button4.addEventListener('click', function(){
//     button3.removeEventListener('click', message)
// })


// Keyboard Event Example

// const btn = document.querySelector('#btn')
// // btn.addEventListener('keydown', function(event){     // when key is pressed
// //     console.log(event.key)
// // })
// btn.addEventListener('keyup', function(event){    // when key is released 
//     console.log(event.key)
// })


// Form Submit Event Example

// const handleSubmit = (event) => {
//     event.preventDefault();          // Prevents the default form submission behavior 
//     console.log("Form Submitted")

// }
// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit)


// console.log("updated code")


// const btn = document.querySelector("button")
// const div = document.querySelector(".container")

// btn.addEventListener('click', function(){console.log("Button Clicked")
// })
// div.addEventListener('click', function(){console.log("Div Clicked")})
  

// const btn = document.querySelector("button")
// const div = document.querySelector(".container")
// const div2 = document.querySelector(".outer")

// btn.addEventListener('click', function(){console.log("Button Clicked")}, false)
// div.addEventListener('click', function(){console.log("Div Clicked")}, false)
// div2.addEventListener('click', function(){console.log("Div2 Clicked")}, false)


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


// Asynchronous Example

// console.log("First Line")
// setTimeout(() => {
//     console.log("After 2 seconds")
// }, 2000)
// console.log("Second Line")


// setTimeout Example with Alert

// setTimeout(() => {
//     alert("This alert is shown after 3 seconds")
// }, 3*1000)


//  setInterval Example

// const timerId=setInterval(() => {
//     console.log("Hello Student!")
// }, 1000)

// setTimeout(() => {
//     clearInterval(timerId) 
// }, 10*1000)   // Clears the interval after 10 seconds


// Example: Countdown Timer

// let count = 1;

// const id=setInterval(() => {
//     if(count===10)clearInterval(id)
//     console.log(count)
//     count+=1
// }, 1000)


// Call Stack Example with setTimeout

// console.log("First Line")
// setTimeout(() => {
//     console.log("After 2 seconds")
// }, 0)
// console.log("Second Line")


// console.log("First Line")
// const id=setTimeout(() => {
//     console.log("After 2 seconds")
// }, 2000)
// clearTimeout(id)
// console.log("Second Line")




// function print(name){  // Callback Function
//     console.log("Hello World", name)
// }

// function greet(num){     // Higher-Order Function
//     console.log("Good Morning")
//     setTimeout(() => {
//         console.log("Inside setTimeout")
//         let firstname = "Anushka"
//         num(firstname)
//     }, 2000)
    
// }

// greet(print)




// console.log("Starting Homework...");

// setTimeout(() => {
//     console.log("Homework Completed!");
//     console.log("Starting Dinner...");

//     setTimeout(() => {
//         console.log("Dinner Done!");
//         console.log("Getting Ready to go out...");

//         setTimeout(() => {
//             console.log("Going to the playground!");
//         }, 1000);
//     }, 1500);
// }, 2000);




// function finishHomework(callback){
//     console.log("Starting Homework...");
//     setTimeout(() => {
//         console.log("Homework Completed!");
//         callback();
//     }, 2000);
// }

// function haveDinner(callback){
//     console.log("Starting Dinner...");
//     setTimeout(() => {
//         console.log("Dinner Done!");
//         callback();
//     }, 1500);
// }
// function goToPlayground(){
//     console.log("Getting Ready to go out...");
// }

// // Chained in steps, but clearner
// finishHomework(function(){
//     haveDinner(function(){
//         goToPlayground();
//     });
// });



// const input = document.querySelector('#task')
// const btn = document.querySelector(".btn")
// const lists = document.querySelector(".list")

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     if(input.value===""){
//         alert("Please enter a task")
//         return
//     }
//     const li = document.createElement('li')
//     const deleteBtn = document.createElement('button')
//     deleteBtn.innerText = "Delete"
//     li.innerText = input.value
//     li.appendChild(deleteBtn)
//     lists.appendChild(li)

//     deleteBtn.addEventListener('click', () => {
//         lists.removeChild(li)
//     })
//     input.value = ""
// })


// const p=new Promise(function(resolve,reject){
//     //resolve()
//     //reject()
//     setTimeout(() => {
//         let done=true;
//         if(done){
//             resolve()
//         }else{
//             reject()
//         }
//     }, 2000)
// })
// console.log(p)



// const p=new Promise(function(resolve,reject){
//     //resolve()
//     //reject()
//     setTimeout(() => {
//         let done=true;
//         if(done){
//             resolve({name:"Anushka", age:18})
//         }else{
//             reject("network issue")
//         }
//     }, 5000)
// })
// p.then(function(data){
//     console.log("Resolved",data)
// }).catch(function(){
//     console.log("Rejected",err)
// }).finally(()=>{
//     console.log("Promise is settled")
// })



// funtion doHomework(){
//     const p=new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("Homework Completed!");
//             resolve("Homework completed");
//             }else{
//                 reject("Couldn't complete homework");
//             }
//         }, 5000);
//     });
//     return p
// }


// function haveDinner(){
//     const p=new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("Dinner Done!");
//             resolve("Dinner done");
//             }else{
//                 reject("Couldn't have dinner");
//             }
//         }, 5000);
//     });
//     return p
// }


// function goToPlayground(){
//     const p=new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("Going to the playground!");
//             resolve("Went to playground");
//             }else{
//                 reject("Couldn't go to playground");
//             }
//         }, 5000);
//     });
//     return p
// }

// doHomework().then((data) => {
//     console.log(data);
//     return haveDinner();
// }).then((data) => {
//     console.log(data);
//     return goToPlayground();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("All tasks attempted");
// });



// console.log("First Line")
// setTimeout(()=> {
//     console.log("Inside setTimeout")
// }, 0)
// const p=new Promise((resolve, reject) => {
//     resolve()
// })
// p.then(() => {
//     console.log("Inside Promise")
// }).catch(() => {
//     console.log("Promise Catch")
// })
// console.log("Second Line")

// const p2=new Promise((resolve, reject) => {
//     resolve()
// })
// p2.then(() => {
//     console.log("Inside second Promise")
// }).catch(() => {
//     console.log("Second Promise Catch")
// })


// function orderFood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Food Ordered")
//             resolve("Food Ordered")
//         }, 1000);
//     })
// }

// function prepareFood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Food Prepared")
//             resolve("Food Prepared")
//         }, 1000);
//     })
// }

// function deliverFood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Food Delivered")
//             resolve("Food Delivered")
//         }, 1000);
//     })
// }

// async function Order(){
//     const data=await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()
// }
// Order()


// orderFood().then((data) => {
//     console.log(data)
//     return prepareFood()
// }).then((data) => {
//     console.log(data)
//     return deliverFood()
// }).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })



// console.log("first line")
// try{
//     let age=18
//     if(age<18){
//         //error
//         throw new Error("Access Denied")
//     }
// }catch(error){
//     console.log(error)
// }finally{
//     console.log("fiinally block")
// }
// console.log("last line")



// async function sendData(){
//     try{
//         const response=await fetch('https://dummyjson.com/products/add',{
//             method:'POST',
//             headers:{'content-type':'application/json'},
//             body:JSON.stringify({
//                 title:'iPhone 9',
//                 description:'An apple mobile which is nothing like apple',
//                 price:54000,
//                 discountPercentage:12.96,
//                 rating:4.69,
//                 stock:94,
//                 brand:'Apple',
//             })
//         })

//         const data=await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("Data not found")
//     }
// }
// sendData()



let obj = {
    name: "Ditya",
    age: 18,
    city: "Delhi"
}

// localStorage.setItem('obj', JSON.stringify(obj))  // Storing the object as a string in localStorage
// localStorage.setItem('name', 'Anushka')
// localStorage.setItem('age', 18)
// console.log(localStorage.getItem('name'))
// console.log(localStorage.getItem('age'))
// console.log(JSON.parse(localStorage.getItem('obj')))  // Retrieving and parsing the object from localStorage

// localStorage.removeItem('age')  // Removing the 'age' item from localStorage



// sessionStorage.setItem("obj", JSON.stringify(obj))  
// sessionStorage.setItem('name', 'Anushka')
// sessionStorage.setItem('age', 18)
// console.log(sessionStorage.getItem('name'))
// console.log(sessionStorage.getItem('age'))
// console.log(JSON.parse(sessionStorage.getItem('obj')))
// sessionStorage.removeItem('age')


// document.cookie = "name=Anushka; expires=Fri, 31 Dec 2024 23:59:59 UTC"
// document.cookie = "age=18; expires=Fri, 31 Dec 2024 23:59:59 UTC"
// console.log(document.cookie) // Logs all cookies for the current domain

// async function sample(){
//     await fetch('http://127.0.0.1:5500/index.html')
//  }
//  sample()