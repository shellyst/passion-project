function answer() {
  let joke = prompt("How does NASA throw a party?");
  if (joke === "They planet!") {
    joke = joke.toLowerCase();
    alert("You have a GREAT sense of humour!");
  } else {
    alert("They PLANET! Hahahahaha!");
  }
}
joke = document.querySelector(".laugh");
joke.addEventListener("click", answer);
