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