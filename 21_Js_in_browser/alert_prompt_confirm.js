alert("Enter the value of a!");
let a = prompt("Enter a here:", 578); // 578 is default value
a = Number.parseInt(a);
alert("you enetered a of type " + typeof a);
let write = confirm("Do u want it to write this on page");
if (write) document.write(a);
else document.write("Please allow me to write");
