let age = 22;

let price = 10.99

let gpa = 2.1;


let firstName 
firstName = window.prompt("What's your name?")

console.log(price)
console.log(firstName)
console.log(typeof gpa)
console.log(`The Price Is ${price} Dollars`)
console.log(`The Age is ${age}`);

// manipulating The DOM
document.getElementById("p1").textContent = firstName

//arithmetic operators 

let students = 30;

students  = students  ** 2
console.log(students)
students -= 223
students %= 2; 

console.log(students)

document.getElementById("mysubmit").onclick = function(){
    firstName = document.getElementById("myText").value;
    document.getElementById("p1").textContent = firstName
}