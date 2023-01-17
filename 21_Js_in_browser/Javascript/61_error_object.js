try {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);
  if (age > 120) {
    throw new Error("Age is exceding the limit..");
  }
} catch (error) {
  //   console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
console.log("This script is still running...");

/* 
const f = () => {
  try {
    console.log("Prgram successfull...");
    return 10;
  } catch (e) {
    console.log(e);
  }

  finally{
    console.log("i am good boy");
  }
};
console.log(f()); */