/* //Synchronus programming
console.log("hey enter something")
console.log("something has been entered....")
console.log("end of taking inputs...")
// line by line execution of program is called as synchronus programming
 */

//Asynchronus programming
/* 
console.log("Start")
setTimeout(function(){
    console.log("Hey i am harsh")
}, 3000)
console.log("End")
 */
//the two statements of console will be executed first then setTimeout will be executed

//callbacks
function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src
    script.onload = function(){
        console.log("Loaded script with SRC"+src);
        callback(null,src);
    }
    script.onerror = function(){
        console.log("Error in loading script");
        callback(new Error("Src got some error"),src);
    }
    document.body.appendChild(script);
}

function hello(error,src){
    if(error){
        console.log(error);
        return;
    }
    alert("Heyy hello"+src)
}

function goodmorning(src){
    alert("goodmorninng"+src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",hello)
/* the function which we pass in arguments is called as callback function here
which is called when we use it inside the function  */