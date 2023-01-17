/* 
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(56);
    },2000)
})

p1.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve("Promise 2 created");
       },2000);
    });
    return p2;
}).then((value)=>{
    console.log(value);
    return 2;
}).then((value)=>{
    console.log(value);
});
 */

//loadscript function
const loadscript =(src)=>{
    let promise = new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.type = "text/javascript"
        script.src = src;
        document.body.appendChild(script);
        script.onload=()=>{
            resolve("Script created");
        }
        script.onerror = ()=>{
            reject("There is some error in src or javascript link");
        }
    })
    return promise;
}
// https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js
// https://localhost:3000/index.js
let p1 = loadscript("https://localhost:3000/index.js");
p1.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
    console.log("Sorry but there was some error");
})