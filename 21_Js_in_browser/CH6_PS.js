let canDrive = (a) => {
  return a >= 18 ? true : false;
};

let runAgain = true;
while (runAgain) {
  let a = prompt("enter your age!!");
  a = Number.parseInt(a);
  if (a < 0) {
    console.error("please enter a valid age it cannot be negative idiot!!");
    break;
  }
  if (canDrive(a)) {
    alert("Yes you can drive");
  } else {
    alert("You cannot drive");
  }
  runAgain = confirm("Do you want to test again");
}
