 // Alternar tela de login, cadastro e esqueceu a senha
 function showForm(formId) {
      document.querySelectorAll('.form').forEach(f => f.classList.remove('active'));
      document.getElementById(formId).classList.add('active');
 }

// Redireciona para a próxima página
document.getElementById("btnEntrar").addEventListener("click", function() {
    window.location.href = "principal.html";
});


// Seleciona os elementos
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Adiciona evento de clique no ícone
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // alterna a classe
});


