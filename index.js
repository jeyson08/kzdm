const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
const span = document.querySelector("span");
let timer;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "ami") {
    span.textContent = "Les portes s'ouvrent !";
    timer = 5000;
  } else {
    span.textContent = "Rien ne se passe ...";
    timer = 1000;
  }
  input.value = "";
  setTimeout(() => {
    span.textContent = "";
  }, timer);
});
