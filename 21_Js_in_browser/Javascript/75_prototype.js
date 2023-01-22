let a = {
    name1:"Harsh",
    lang:"Javascript",
    run: ()=>{
        alert("self run");
       }
}
let p = {
   run: ()=>{
    alert("run");
   }
}
p.__proto__={
    name2:"Jackie"
}
a.__proto__ = p
a.run();
//a run method will run because it is present their but if not then
//it will check in its prototype and it will execute that

console.log(a.name2)
/* this object first went to check its own object that if there is 
any property with name2 if not then go and check its prototype if not in that
then go and check in p's prototype and if got print that */