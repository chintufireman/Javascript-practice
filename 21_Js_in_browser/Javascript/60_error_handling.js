setTimeout(() => {
  console.log("Hacking wifi....please wait...");
}, 1000);

setTimeout(() => {
  console.log("Fetching username and password please wait.....");
}, 2000);
setTimeout(() => {
  console.log("Hacking Rajat and Swarnim Facebook Id.... Please Wait....");
}, 3000);
setTimeout(() => {
  console.log("Username and password has been fetched....");
}, 4000);
try {
  setTimeout(() => {
    try {
      console.log(rahul);
    } catch (e) {
      console.log("Kya baat hai,...." + e);
    }
    // console.log(rahul); -->script dies and try catch dose not works 
    
    /* thats because the function itself is executed later when the engine has 
    already left the try catch construct */

    /* 
    try catch works synchronorously 
    if an exception happens in scheduled code, like in 
    setTimeout, the try catch wont catch it
    */


  }, 5000);
} catch (e) {
  console.log(e);
}
