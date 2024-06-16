const input = document.querySelector("input"),
  p = document.querySelector("p"),
  myst = document.querySelector("#myst"),
  submit = document.querySelector("#submit-btn"),
  replay = document.querySelector("#replay-btn"),
  span = document.querySelector("span");
let randNum = randNumber();

input.focus();
console.log(randNum);
let i = 0;
let maxInput = 6;

submit.addEventListener("click", checkInput);
replay.addEventListener("click", remix);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});
span.textContent = `Il vous reste ${maxInput} essais`;

// Fonctions
function checkInput() {
  guess = parseInt(input.value);
  input.value = "";
  input.focus();
  console.log(guess);
  // if ((input.value = "NaN")) {
  //   p.textContent = "Veuillez jouer au jeu selon les règles !";
  // } else if (maxInput == 0) {
  // } else {

  // }
  if (guess > randNum) {
    p.textContent = "Trop haut";
  } else if (guess < randNum) {
    p.textContent = "Trop Bas";
  } else {
    p.textContent = `Bravo tu as trouvé au bout de ${i} tentatives, le nombre mystére était ${randNum}`;
    input.disabled = true;
    submit.disabled = true;
  }
  i++;
  maxInput--;
}
function remix() {
  p.textContent = "";
  randNum = randNumber();
  input.disabled = false;
  submit.disabled = false;
  input.focus();
  console.log(randNum);
  i = 0;
}
function randNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
