
//Normal loop

/* const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter num ", num => {
    let n = Number.parseInt(num);
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
  rl.close();
});
 */


//for in loop

let students = {
    harsh:30,
    shiv: 90,
    rajat:100,
    swarnim:100,
    dokh :90
}

for (let key in students) {
    console.log("Marks of "+ key + " are "+ students[key]);

   /*  loops throught the key of an object and gives the key in return and then 
    you can use those keys in statements */
}

//for of loop

for (const a of "Harsh") {
    console.log(a);

   /*  for of loop will print value from object and it should be iterable like
    above string, and above loop wont work for object students as it is 
    not an iterable object */
}
