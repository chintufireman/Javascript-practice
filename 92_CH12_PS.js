const a = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 2000);
  });
};

(async () => {
    let text1 = await a("Hello");
    console.log(text1);
    let text2 =  await a("world");
    console.log(text2);
})();

function sum(a,b,c){
    return a+b+c;
}

let x = [1,23,4];
console.log(sum(...x));