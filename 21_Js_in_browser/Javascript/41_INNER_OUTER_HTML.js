console.log(document.getElementsByTagName("span")[0]); 
//will give the dom tree

console.dir(document.getElementsByTagName("span")[0]); 
//will give the elements as an object and its properties

console.log(document.body.firstChild.nodeName)
//this will give the o/p #text
console.log(document.body.firstElementChild.nodeName)
//this will give the o/p span

let x = document.getElementById("first").innerHTML;
console.log(x);
document.getElementById("first").innerHTML="<i>hey i am italic</i>"
//the innerhtml property allows to get the HTMl inside the element as a string
//and this is valid for elements node only and not for #text or comment
//to get the values from text node or comment u can use data or nodevalue
//like
console.log("from data",document.body.firstChild.data)
console.log("from node",document.body.firstChild.nodeValue)


let y = document.getElementById("first").outerHTML;
console.log(y);
document.getElementById("first").outerHTML ="<div>Hey</div>"
//the puterhtml property contains the full html innerhtml + element itself
// and u can change it too


console.log(document.body.textContent) //all text comes from here no elements and tags
