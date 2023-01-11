console.log("hi mom")
let array = [1,2,3,4,56,7]

console.time()
for (let i = 0; i < array.length; i++) {
    console.log(i);
}
console.timeEnd()

console.time()
let i=0
while (i<5) {
    console.log(i);
    i++;
}
console.timeEnd()