// Exemplo de animação para o botão 'Comprar Agora'
const buyButton = document.querySelector('.cta button');

buyButton.addEventListener('mouseover', () => {
    buyButton.style.transform = 'scale(1.1)';
});

buyButton.addEventListener('mouseout', () => {
    buyButton.style.transform = 'scale(1)';
});
