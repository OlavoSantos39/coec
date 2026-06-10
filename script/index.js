 // Alternar tela de login, cadastro e esqueceu a senha
 function showForm(formId) {
      document.querySelectorAll('.form').forEach(f => f.classList.remove('active'));
      document.getElementById(formId).classList.add('active');
 }

// Redireciona para a próxima página
document.getElementById("btnEntrar").addEventListener("click", function() {
    window.location.href = "principal.html";
});





