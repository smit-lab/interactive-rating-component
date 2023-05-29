let ratingNumber = document.querySelectorAll(".card-rating-number");
let rating = null;
let submit = document.getElementById("submit-btn");
let selectionCard = document.getElementById("selection-card");
let submittedCard = document.getElementById("submitted-card");
let submittedNumber = document.getElementById("submitted-rating-number");

ratingNumber.forEach((number) => {
  let selectedRating = number.getAttribute("data-rating");
  number.addEventListener("click", (event) => {
    rating = selectedRating;

    ratingNumber.forEach((numbers) => {
      numbers.classList.remove("clicked-state");
    });

    number.classList.add("clicked-state");

    console.log(`Clicked Rating number: ${rating}`);
  });
});

submit.addEventListener("click", () => {
  if (rating !== null) {
    selectionCard.classList.add("selection-card-none");
    submittedCard.classList.add("submitted-card-flex");
    submittedNumber.textContent = rating;
    //console.log(`Submitted Rating: ${rating}`);
  } else {
    console.log("No rating selected");
  }
});
