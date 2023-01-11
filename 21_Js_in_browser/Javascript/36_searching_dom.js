//change the card title
let ctitle = document.getElementsByClassName("card-title")[0]
console.log(ctitle)
ctitle.style.color="red"
let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color="red"
ctitles[1].style.color="blue"
ctitles[2].style.color="green"

console.log(ctitles)

console.log(document.querySelector(".card").getElementsByTagName("a"))