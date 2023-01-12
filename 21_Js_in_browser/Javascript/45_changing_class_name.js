let first = document.getElementById("first")

first.className = "text-black red"

first.classList.add("red")
//classList will give the all classes used in element
//and add will add new class in it

first.classList.remove("red")
// this will remove the class from multiple used classes

first.classList.contains("red")
//will check if class is present or not

first.classList.toggle("red")
//this method will remove the class if is present in tag 
//or else it will add the class if not present