let num = [1, 23, 4, 567, 8, 9, 20];

//p1 add new element

/* console.log(num);
num.push(60);
console.log(num);
 */
//p2 add new element in array until user enters 0

//p3 use filter to fetch data divisible by 10
/* 
let arr = num.filter((v)=>{
    return v%10==0;
});
console.log(arr)
 */



//p4 use map to return square of number
/* 
let arr = num.map((v)=>{
    return v*v;
});
console.log(arr) 
*/




//p5 use reduce to calculate factorial of first n natural numbers 
let num2 = [1,2,3,4,5,6,7,8,9,10]
let arr = num2.reduce((v1, v2)=>{
    
    return v1*v2;
});
console.log(arr)