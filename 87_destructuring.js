let arr = [3,4,6,9,12,10]

// let[a,b,c,d, ...rest] = arr //=> destructuring
// console.log(a,b,c,d,rest)

// let[a, , ,...rest] =arr


/* 
let[a, , b,...rest] =arr
console.log(a,b,rest);
 */


let {a,b}={a:1,b:5} //=> destructuring the object
console.log(a,b);//some more examples on destructuring is on mdn docs


//Spread operator (...)
let arr2 = [3,4,6] // convert this array into the object
let obj1 = {...arr2}
console.log(obj1); //{ '0': 3, '1': 4, '2': 6 } 0,1,2 are key

/* suppose there is a function who takes 3 values as a argument and there is
array which also have 3 values in its array then u can pass it by this way */

/* function sum(v1,v2,v3){
    return v1+v2+v3;
}
console.log(sum(...arr2))
 */

//Useful example used in react
let obj2 ={
    name:"harsh",
    company:"xyz",
    address:"XYZ"
}
console.log({...obj2}) //and if here you want to change name value then
console.log({...obj2, name:"Johan",company:"abc"}); 
console.log({...obj2, rollno:"90"}); 
/* what happens here is it retrives all the values inside the object given 
in the curly braces after the comma it will override the old key value with new one 
or you can add new key value inside the object */

console.log({name:"Johan",company:"abc", ...obj2}); 
console.log({name:"Johan",company:"abc",rollno:90, ...obj2}); 
/* in first case this will take the value and after that it will override with the
old one as it is using old object but in second case for first two same 
keys it will get override with old one but for new key this will be added into the
object */
//actually everything inside the {} in console.log is object and after ... 
//everything inside the object is getting opened so dont confuse it
// with anything serious