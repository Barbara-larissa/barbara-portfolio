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
// --- FUNÇÃO PARA MUDAR DE PÁGINA ---
function mostrarPagina(id){
    // 1. Seleciona TODAS as variações de páginas que você criou
    const todasAsSecoes = document.querySelectorAll(".pagina, .pagina-certificado, .pagina-curriculo");
    
    // 2. Remove 'ativa' de absolutamente todas elas
    todasAsSecoes.forEach(function(secao){
        secao.classList.remove("ativa");
    });

    // 3. Ativa a página selecionada pelo ID
    const alvo = document.getElementById(id);
    if (alvo) {
        alvo.classList.add("ativa");
        
        // 4. Garante que a página abra no topo (importante para o currículo)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 5. Atualiza o hash da URL
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