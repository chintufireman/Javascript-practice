//let num = ["dwadaw", 53243,"adw",9978, false,"not operator"]
let num = [1, 23, 4, 567, 8, 9, 200000];
let num2 = [11, 123, 14, 17, 18, 19];
let num3 = [114, 1423, 144, 174, 184, 149];

/* console.log(num.length)
delete num[0]
console.log(num)
console.log(num.length) //array length doesnot changes */

/* 
let num4 = num.concat(num2,num3)
console.log(num4) 
//concatinations of multiple arrays
*/

/* 
let compare =(a,b)=>{
    return a-b
}
//now this will sort array according to numbers in ascending order

num.sort(compare); //changes the original array
console.log(num) //this will the numbers inside array in alphabetical order
console.log(num.reverse()) //reverses the array
 */

//Slice and Splice

let num5 = [1, 2, 3, 4, 5, 6, 7];
console.log(num5);
let r = num5.splice(2, 3, 10, 12, 13, 14);//returns deleted items modifies array
console.log(r)
/* 
1.takes index value from which index should we add new elements
2. takes the number of values to be removed after taking starting index
3.takes the values to be added in array
*/
console.log(num5);


let num6 = [1, 2, 3, 4, 5, 6, 7];
let num7 = num6.slice(2,5) //returns the new array and includes starts from and not includes last one
console.log(num7)
