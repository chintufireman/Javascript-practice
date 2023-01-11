//operators
let a = 10;
let b =4;


//Arithmatic operators
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a ** b = ", a**b); //a^b
console.log("a % b = ", a%b);

console.log("++a = ", ++a) //11
console.log("a++ = ", a++) //11
console.log("--a = ", --a) //11
console.log("a-- = ", a--) //11
console.log("a = ", a) //10
console.log("a-- = ", a--) //10

//Assignment operators

let assignment = 1
assignment += 5
console.log(assignment)


//Comparison Operators
let comp1 =6
let comp2 ="6"

console.log("comp1 == comp2 is ", comp1==comp2)
console.log("comp1 != comp2 is ", comp1!=comp2)
console.log("comp1 === comp2 is ", comp1===comp2) //also checks type of variable and not just value
console.log("comp1 !== comp2 is ", comp1!==comp2)


//Logical operators
let x=5
let y=6
console.log(x<y && x==5)