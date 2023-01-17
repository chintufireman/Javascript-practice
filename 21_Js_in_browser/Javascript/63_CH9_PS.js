let loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " added Successfully!!");
    };
    document.head.append(script);
  });
};

//problem 1
/* let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
a.then((v) => {
  console.log(v);
});
 */

//problem 2
/* let main2= async ()=>{
    console.log(new Date().getMilliseconds());
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
    console.log(a);
    console.log(new Date().getMilliseconds());
} */
// main2();


//problem 3

/* let p=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Please this is not acceptable"));
        },3000);
    })
}

let a = async ()=>{
   try {
    let c = await p();
    console.log(c);
   } catch (e) {
    console.log(e.name);
    console.log(e.message);
   }
}
a() */

//problem 4
let p1 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10);
        }, 2000);
    })
}
let p2 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(20);
        }, 3000);
    })
}
let p3 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(30);
        }, 4000);
    })
}

const run=async ()=>{
    console.time("start")
    // let a1 = await p1();
    // let a2 = await p2();
    // let a3 = await p3();
    // console.log(a1,a2,a3);

    let a1 =  p1();
    let a2 =  p2();
    let a3 =  p3();
   
    let a1a2a3 = await Promise.all([a1,a2,a3]);
    console.log(a1a2a3);
    console.timeEnd("start")

    /* in the first part we are waiting for every task to be loaded
    one by one like first waiting for p1 then p2 and p3
    
    but in second part what we did is we used promise.all and every task 
    in that is now executing parallely like p1, p2 and p3 are getting
    executed parallely
    */
}
run();