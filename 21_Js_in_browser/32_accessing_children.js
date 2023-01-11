console.log(document.body.firstChild) 
//because of space it will print #text but bring <div> tag close to <body> by removing spaces
console.log(document.body.lastChild)
let arr=Array.from((document.body.childNodes))
//before converting above document.body.childNodes to array it was a nodelist so we used Array.from
//childnodes looks like an array but its not actually an array but a collection
console.table(arr)