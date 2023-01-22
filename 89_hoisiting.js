/* hoisting refers to the process whereby the interpreter
appears to move the declarations to the top of the code 
before execution.
variables can thus be referenced before they are declared in javascript
*/

greet();
function greet(){
    console.log("Hello greetings")
}
/* during interpreting the function declartion is moved up by js engine */


/* important note

1.js only hoists declarations, not initializations the variable will be 
undefined until the line where its initialized is reached

2.let and var works differently during hoisting

3.function expressions and class expressions are not hoisted
*/
console.log(a);
var a =87 //declarations hoisted to the top but initialization is not

// let a, let a=798 will give not defined error because it will go in temporary 
//dead zone variable will get declared at the top but value will not get initialized 
//and var a= 87 will give undefined
/* if u use let then it will give error not defined but if you use var
then it will print undefined even if you initialize with some value */
console.log(a); // here it will print a value

something();
const something=()=>{

} //will throw error Cannot access 'something' before initialization
something2();
var something2=()=>{

}//will throw error something2 is not a function
/* function expressions are those which you write using is equal to =
like var a = function (){}
*/