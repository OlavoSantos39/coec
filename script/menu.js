// Seleciona os elementos
const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("nav-links");

// Adiciona evento de clique no ícone
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // alterna a classe
});
