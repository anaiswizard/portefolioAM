let button = document.querySelector(".btn-selection");
console.log(button);
let body = document.querySelector("body");
button.addEventListener("click", (e) => {
  if (body.classList.contains("pink")) {
    body.classList.remove("pink");
    body.classList.add("white");
  } else {
    body.classList.remove("white");
    body.classList.add("pink");
  }
});

let cardsBody = document.querySelectorAll(".card-body");
console.log(cardsBody);

button.addEventListener("click", (e) => {
  for (let cardBody of cardsBody) {
    if (cardBody.classList.contains("bg-black")) {
      cardBody.classList.remove("bg-black");
      cardBody.classList.add("pinkCard");
    } else {
      cardBody.classList.remove("pinkCard");
      cardBody.classList.add("bg-black");
    }
  }
});
