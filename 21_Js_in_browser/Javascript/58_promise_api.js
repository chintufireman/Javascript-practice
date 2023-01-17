let p1 = new Promise((resolve,reject)=>{
    setInterval(()=>{
        resolve("value 1")
    },11000)
})
let p2 = new Promise((resolve,reject)=>{
    setInterval(()=>{
        resolve("value 2")
    },2000)
})
let p3 = new Promise((resolve,reject)=>{
    setInterval(()=>{
        resolve("value 3")
    },3000)
})
let p4 = new Promise((resolve,reject)=>{
    setInterval(()=>{
        reject(new Error("Error"))
    },1000)
})

/* p1.then((value)=>{
    console.log(value);
})
p2.then((value)=>{
    console.log(value);
})
p3.then((value)=>{
    console.log(value);
}) */

// let promise_all = Promise.all([p1,p2,p3,p4]);
/* with above .all method we get to see error if there is any single error in n number
of promises
*/

// let promise_all = Promise.allSettled([p1,p2,p3,p4]);
/* with this if any of the promise throws the error 
we wont see any error but we get to see its status and value  */

// let promise_all = Promise.race([p1,p2,p3,p4]);
/* with above method we get to see value whichever gets first resolved pretty cool na harry
bhai said and if it throws error or the promise which gets resolved first is 
throwing reject or error then it shows error*/

// let promise_all = Promise.any([p1,p2,p3,p4]);
/* with this method it will look for which promise gets resolved first without 
error first if it the fastest resolved promise throws error then it will look
for other fastest resolved value */

// let promise_all = Promise.resolve(6);
//this will give resolved promise with 6 value

let promise_all = Promise.reject("Hey");
//gives the rejected promise with hey value
promise_all.then((v)=>{
    console.log(v);
})