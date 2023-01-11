const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
console.log(sentence.includes(word)) //includes chech if words exist in string
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"


//Q2 convert to lowercase

//Q3 extract the number from string
let a ="Please giver rs 1000"
let amount = a.slice("Please giver rs ".length)
console.log( Number.parseInt(amount))

//Q4 try to change 4th character in string
let frnd = "Deepika"
frnd[4] ='R'
console.log(frnd)