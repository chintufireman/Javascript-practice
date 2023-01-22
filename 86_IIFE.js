let a = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(456);
        }, 4000);
    })
}

(
    async ()=>{
        let b = await a();
        console.log(b);
        let c = await a();
        console.log(c);
        let d = await a();
        console.log(d);
    }
)()//this is IIFE function 

/* this is also used to avoid global namespace
sometimes what happen is in above example if you did not used async function and 
then executed it directly then the value of b, c and d are available in local name
space but you used async function so what js engine does is it executes the all 
statements and then releases all memory from local namespaces 
*/