// chapter 1 -Q1

let a = "Harsh";
let b = 6;
console.log(a+b);

//chapter 1-Q2
console.log(typeof(a+b));

//chapter 1-Q3 create a const object in js, can u change it to hold a number later
const item ={
    name:"Harsh",
    section: 1,
    isPrincipal: false
}
console.log(item)
/* item = 56 => not possible because it is already a declared using const but can be changed
when declared with let keyword */


//chapter 1-Q4
item["friend"]="Rajat"
item["name"]="Harshwardhan"
console.log(item)

/* 
you cannot change the item variable value again because its a reference which is pointing 
to a memory and it's declared using const keyword that's why, but u can change the value
inside the object of item like adding new key value pair or changing value of key inside
item 
*/

//chapter 1-Q5 create 5 word meaning dictionary

const dict={
    appreciate:"recognize full worth",
    ataraxia: "state of freedom from emotional disturbance and anxiety",
    yakka: "work especially hard"
}

console.log(dict.yakka)
