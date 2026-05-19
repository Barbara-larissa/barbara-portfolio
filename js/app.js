// --- MOSTRA A PÁGINA CORRETA AO CARREGAR ---
document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.replace("#", ""); // pega #projetos -> projetos
    if (hash && document.getElementById(hash)) {
        mostrarPagina(hash); // abre a página do hash
    } else {
        mostrarPagina("inicio"); // padrão
    }
});

// --- FUNÇÃO PARA MUDAR DE PÁGINA ---
function mostrarPagina(id){
    // Remove 'ativa' de todas as páginas
    document.querySelectorAll(".pagina").forEach(function(pagina){
        pagina.classList.remove("ativa");
    });

    // Ativa a página selecionada
    document.getElementById(id).classList.add("ativa");

    // Atualiza o hash da URL sem recarregar a página
    window.location.hash = id;
}

/*================
BALÃO
==================*/
const areaPerfil = document.querySelector('.perfil');
const oBalao = document.querySelector('.balao-fala');
const botoes = document.querySelectorAll('.btn');

// --- Lógica do Balão no Mobile ---
areaPerfil.addEventListener('touchstart', function() {
    oBalao.classList.add('visivel');
    setTimeout(() => {
        oBalao.classList.remove('visivel');
    }, 2000); 
}, {passive: true});

// --- Lógica de Animação dos Botões no Mobile ---
botoes.forEach(btn => {
    btn.addEventListener('touchstart', function() {
        this.style.transform = "scale(0.95)";
        this.style.filter = "brightness(1.2)";
    });
    
    btn.addEventListener('touchend', function() {
        this.style.transform = "scale(1)";
        this.style.filter = "brightness(1)";
    });
});