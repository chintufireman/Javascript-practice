let num = [1,2,3,45,6]
let b = num.toString();
console.log(b)
console.log(typeof b)

let c = num.join("-")
console.log(c, typeof c)

/* let r =num.pop() //return popped elements
console.log(r) */

/* let r = num.push(56)
console.log(num) */

/* let r = num.shift() //removes first element
console.log(num) */

let r = num.unshift(7) //adds element at first
console.log(r,num)//returns new array length