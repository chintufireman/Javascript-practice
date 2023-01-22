let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((contest) => {
    ihtml = "";
    for (let item in contest) {
      console.log(contest[item]);
      ihtml += `<div class="card mx-4 my-2" style="width: 18rem;">
       <img class="card-img-top" src="https://media.geeksforgeeks.org/wp-content/uploads/20220427142321/TopWebsitesForCodingChallengesCompetitions.jpg" alt="Card image cap">
        <div class="card-body">
           <h5 class="card-title">${contest[item].name}</h5>
           <p>Starts at ${contest[item].start_time}</p>
           <p>Starts at ${contest[item].end_time}</p>
           <a href="${contest[item].url} " class="btn btn-primary my-4">Visit here</a>
        </div>
        </div>`;

      let cardContainer = document.getElementById("cardContainer");
      cardContainer.innerHTML = ihtml;
    }
  });
