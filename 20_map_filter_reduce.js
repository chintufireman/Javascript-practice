let num = [1, 23, 4, 567, 8, 9, 200000];

//map function same as map in streams in java but creates new array here
/* 
let a =num.map((element, index, array)=>{
    console.log(element,index,array);
    return element*2;
})
console.log(a);
 */



//filters in javascript same as in java stream used to fetch data but creates new array
//here

/* let arr = num.filter((value) => {
  return value < 100;
});

console.log(arr); */


//array reduce method which reduces array values into single one
const reduce_func = (h1, h2)=>{
    return h1+h2;
}

let arr = num.reduce(reduce_func);
console.log(arr);