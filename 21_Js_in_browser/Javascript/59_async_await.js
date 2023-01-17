async function harsh() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 deg");
    }, 1000);
  });
  let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 deg");
    }, 5000);
  });

  /*  delhiWeather.then(alert);
  bangloreWeather.then(alert); */
  console.log("Fetching delhi weather Please wait.....");
  let delhiW = await delhiWeather;
  console.log("Delhi weather is fetched....." + delhiW);

  console.log("Fetching Banglore weather Please wait.....");
  let bangW = await bangloreWeather;
  console.log("Banglore weather is fetched....." + bangW);

  /* await' expressions are only allowed within async functions
   and at the top levels of modules. */

  //to check how await works remove await and then check the console and check it with await

  return [delhiW, bangW];
}

let cherry = async () => {
    console.log("Hey i am cherry.....");
};

let main1=async ()=>{

    /* .then does not work if function is not async */
    //and await is only valid inside any async function

    let a =await harsh();//and if u are using await then there will be value inside a
    let c = await cherry();
    console.log(a);
}

main1();