var ratingList = document.querySelector("#divRating");
var ratingButtons = document.querySelectorAll(".ratingButtons");
//var activeButtons = document.querySelectorAll(".buttonActive");
var submitButton = document.getElementById("buttonSubmit");
var ratingCard = document.getElementById("ratingCard");
var submittedCard = document.getElementById("ratingCardSubmitted");
var scoreContainer = document.getElementById("ratingScore");
let ratingScore = 0;
let isRated = false;

ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener("click", (clickEvent) => {
    ratingScore = ratingButton.innerHTML;
    ratingButton.className = "buttonActive";
    isRated = true;
    const currentButton = clickEvent.target;

    ratingButtons.forEach((ratingButton) => {
      if (ratingButton != currentButton) {
        ratingButton.className = "ratingButtons";
      }
    });
  });
});

/*activeButtons.forEach((activeButton) => {
  activeButton.addEventListener("click", (reverseClickEvent) => {
    activeButton.className = "ratingButtons";
  });
});*/

ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener("mouseover", (hoverEvent) => {
    const currentButton = hoverEvent.target;
    if (currentButton.className != "buttonActive") {
      ratingButton.className = "buttonHovered";
    }

    ratingButtons.forEach((ratingButton) => {
      if (
        ratingButton != currentButton &&
        ratingButton.className != "buttonActive"
      ) {
        ratingButton.className = "ratingButtons";
      }
    });
  });
});

submitButton.addEventListener("mousedown", function mousedownEvent() {
  submitButton.style.color = "hsl(25, 97%, 53%)";
  submitButton.style.backgroundColor = "hsl(0, 0%, 100%)";
});

submitButton.addEventListener("mouseup", function mouseupEvent() {
  submitButton.style.color = "hsl(0, 0%, 100%)";
  submitButton.style.backgroundColor = "hsl(25, 97%, 53%)";
});

submitButton.addEventListener("click", function changeState() {
  if (!isRated) {
    alert("Please rate before submitting!");
  } else {
    ratingCard.classList.add("disabled");
    submittedCard.classList.remove("disabled");
    scoreContainer.innerHTML = "&nbsp;" + ratingScore + "&nbsp;";
  }
});
