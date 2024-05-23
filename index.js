const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
const span = document.querySelector("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "ami") {
    span.textContent = "Les portes s'ouvrent !";
  } else {
    span.textContent = "Rien ne se passe ...";
  }
  input.value = "";
  setTimeout(() => {
    span.textContent = "";
  }, 1000);
});
