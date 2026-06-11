 // Alternar tela de login, cadastro e esqueceu a senha
 function showForm(formId) {
      document.querySelectorAll('.form').forEach(f => f.classList.remove('active'));
      document.getElementById(formId).classList.add('active');
 }

// Redireciona para a próxima página
document.getElementById("btnEntrar").addEventListener("click", function() {
    window.location.href = "principal.html";
});

const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute
            ('href'));
            if (target) {
                const headerHeight = document.querySelector('header').
                offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 
                20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
    });
});



