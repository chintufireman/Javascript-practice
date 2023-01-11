
const changeBody=()=>{
    document.body.firstElementChild.style.background="red"
}
changeBody()
let b=document.body

console.log("First child of b is", b.firstChild)
/* this will give you firstChild that is anything can be given after parent tag
like there can be comment then comment will be given after there are spaces or tabs then
text node will be given or if there is any tag or element like div or nav then it will be 
given. */



console.log("First Element of b is", b.firstElementChild)
/* but in this case it will only give first child which can tag or element 
and it will ignore all spaces, texts and comments */
console.log(b.previousElementSibling)
console.log(b.nextElementSibling)
console.log(b.firstElementChild)
console.log(b.lastElementChild)