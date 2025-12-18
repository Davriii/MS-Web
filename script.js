// ========================================
// MENU MOBILE TOGGLE
// ========================================
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const hamburger = document.getElementById("hamburger");
    
    menu.classList.toggle("open");
    hamburger.classList.toggle("active");
}

// ========================================
// HEADER COM EFEITO DE SCROLL
// ========================================
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');
    
    // Adiciona classe 'scrolled' quando rolar mais de 50px
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        backToTop.classList.add('visible');
    } else {
        header.classList.remove('scrolled');
        backToTop.classList.remove('visible');
    }
});

// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========================================
// SCROLL SUAVE PARA OS LINKS DO MENU
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Fecha o menu mobile se estiver aberto
            const menu = document.getElementById("mobileMenu");
            const hamburger = document.getElementById("hamburger");
            if (menu.classList.contains('open')) {
                menu.classList.remove('open');
                hamburger.classList.remove('active');
            }
            
            // Calcula a posição considerando o header fixo
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Adiciona destaque azul se for a seção de contato
            if (targetId === '#contato') {
                targetElement.classList.add('highlight');
                
                // Remove o destaque após 3 segundos
                setTimeout(() => {
                    targetElement.classList.remove('highlight');
                }, 1500);

            
            }            
        }
    });
});

// ========================================
// ANIMAÇÃO FADE IN AO ROLAR (INTERSECTION OBSERVER)
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Para de observar depois que animar (opcional)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observa todos os elementos com classe 'fade-in'
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});


// CONTADOR ANIMADO 

function animateCounter(element, target, duration = 1500) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

//CONTADOR 20 ANOS DE EXPERIÊNCIA

document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('anos-experiencia');
    if (counterElement) {
        animateCounter(counterElement, 20);
    }
});


// ========================================
// PREVENÇÃO DE MENU MOBILE FICAR ABERTO AO REDIMENSIONAR
// ========================================
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const menu = document.getElementById("mobileMenu");
        const hamburger = document.getElementById("hamburger");
        
        menu.classList.remove('open');
        hamburger.classList.remove('active');
    }
});

// ========================================
// LOG DE CARREGAMENTO (PODE REMOVER)
// ========================================
console.log('🚀 Site MEC Sistemas carregado com sucesso!');
console.log('✨ Animações ativadas!');