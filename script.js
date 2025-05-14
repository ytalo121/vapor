// Efeitos para os botões de fechar das janelas
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de fechar
    const closeButtons = document.querySelectorAll('.close-btn');
    
    // Adiciona evento de clique para cada botão
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Encontra o card pai do botão
            const card = this.closest('.window');
            
            // Adiciona classe para animar o fechamento
            card.style.transition = 'all 0.5s ease';
            card.style.transform = 'scale(0.8)';
            card.style.opacity = '0';
            
            // Após a animação, esconde o elemento
            setTimeout(() => {
                card.style.display = 'none';
            }, 500);
        });
    });
    
    // Efeito de brilho neon nos botões
    const neonButtons = document.querySelectorAll('.neon-btn');
    
    neonButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 25px #00f0ff';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
        
        button.addEventListener('click', function() {
            // Efeito de flash ao clicar
            this.style.boxShadow = '0 0 50px #00f0ff';
            setTimeout(() => {
                this.style.boxShadow = 'none';
            }, 300);
        });
    });
    
    // Efeito de paralaxe suave no grid de fundo
    window.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.body.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
    });
    
    // Animação para os cards de produtos
    const productCards = document.querySelectorAll('.product-card');
    
    // Função para verificar se um elemento está visível na tela
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Função para animar elementos quando ficam visíveis
    function animateOnScroll() {
        productCards.forEach(card => {
            if (isElementInViewport(card)) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Configura os cards inicialmente
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Executa a animação no carregamento e no scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Efeito de glitch no título principal
    const mainTitle = document.querySelector('.hero h1');
    
    if (mainTitle) {
        setInterval(() => {
            // Aplica efeito de glitch aleatoriamente
            if (Math.random() > 0.9) {
                mainTitle.style.textShadow = '2px 0 #ff2e97, -2px 0 #00f0ff';
                mainTitle.style.transform = 'skewX(2deg)';
                
                setTimeout(() => {
                    mainTitle.style.textShadow = '0 0 10px #00f0ff';
                    mainTitle.style.transform = 'skewX(0)';
                }, 100);
            }
        }, 2000);
    }
});