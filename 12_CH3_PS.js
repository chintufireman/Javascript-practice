let marks = {
  Harsh: 90,
  Marry: 100,
  Shubh: 0,
  Indu: 100,
};

//Q1
//Object.keys(marks) will give array of keys
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]
  );
}

//Q2
for (let key in marks) {
  console.log("Marks of " + key + " are " + marks[key]);
}

//Q3 take input until user enters correct number
/* let cn = 4;
let i;
while (i != cn) {
  prompt("Enter a number");
  console.log("Try again");
}
console.log("You have entered the correct number");
 */
//Q4 find mean of 5 numbers

const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};
console.log(mean(4, 5, 6, 7, 8));
