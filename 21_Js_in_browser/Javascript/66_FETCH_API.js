let p = fetch("https://goweather.herokuapp.com/weather/Ny");
p.then((response) => {
    // console.log(response.text()) =>
    //after using text() method u cannot execute json()
    // method u can anything only once
  return response.json();
}).then((response) => {
  quotes.innerHTML = response.quote;
  console.log(response);
});
