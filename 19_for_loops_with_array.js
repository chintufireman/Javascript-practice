let num = [1, 23, 4, 567, 8, 9, 200000];

/* for (let i = 0; i < num.length; i++) {
    console.log(num[i])
} */



//for each loop
/* num.forEach((element)=>{
    console.log(element*element);
})
 */


//Array.from is used to create an array from object

/* let name = "Harsh";
let arr = Array.from(name);
console.log(arr); */


//for of
for (let i of num){
    console.log(i)
}

//for in
for (const key in num) {
   console.log(key)
}