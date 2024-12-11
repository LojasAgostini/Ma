const carrossel = document.querySelector('.carrossel');
const anterior = document.querySelector('.carrossel-anterior');
const proximo = document.querySelector('.carrossel-proximo');

let index = 0;

// Função para atualizar o carrossel
function atualizarCarrossel() {
    const largura = carrossel.clientWidth;
    carrossel.style.transform = `translateX(-${index * largura}px)`;
}

// Evento de clique no botão "anterior"
anterior.addEventListener('click', () => {
    if (index > 0) {
        index--;
        atualizarCarrossel();
    }
});

// Evento de clique no botão "próximo"
proximo.addEventListener('click', () => {
    if (index < carrossel.children.length - 1) {
        index++;
        atualizarCarrossel();
    }
});

// Ajustar o carrossel ao redimensionar a janela
window.addEventListener('resize', atualizarCarrossel);
