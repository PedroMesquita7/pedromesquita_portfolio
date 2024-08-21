// Mantém os efeitos de hover nos itens do portfólio
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 0 25px rgba(255, 0, 0, 0.7)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
    });
});

// Adiciona efeito de digitação ao título da seção "Sobre mim"
const tituloSobreMim = document.querySelector('.txt-topo-site h1');
const texto = tituloSobreMim.textContent;
tituloSobreMim.textContent = '';
let index = 0;

function digitar() {
    if (index < texto.length) {
        tituloSobreMim.textContent += texto.charAt(index);
        index++;
        setTimeout(digitar, 100);
    } else {
        tituloSobreMim.innerHTML += '<span>.</span>';
    }
}

window.addEventListener('load', digitar);

// Novas funcionalidades para adicionar interatividade ao menu
const menuLinks = document.querySelectorAll('nav.menu-desktop a');

menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)';
        link.style.color = '#df0c0c';  // Altera a cor ao passar o mouse
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
        link.style.color = '#ffffff';  // Restaura a cor original ao tirar o mouse
    });
});

// Adiciona uma animação suave ao rolar a página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
