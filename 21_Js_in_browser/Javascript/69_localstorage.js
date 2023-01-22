let key = prompt("Enter ur key")
let value= prompt("Enter ur value")
localStorage.setItem(key,value)
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if(key == "blue"){
    localStorage.removeItem(key);
}

if(key == 0){
    localStorage.clear();
}

/* 
Notes:
1.both key and value must be storage
2.we can use the two JSON methods to store the objects in localstorage
JSON.stringify(object)
JSON.parse(string) -> must be valid json
*/