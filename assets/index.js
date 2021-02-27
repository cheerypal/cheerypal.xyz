document.addEventListener("DOMContentLoaded", () => {
  var cards = document.getElementsByClassName("card");

  cards[0].addEventListener("onmouseover", () => {
    let overlay = document.getElementById("card-overlay");
    overlay.style.display = "block";
  });
});
