// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .step, .doc-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Add scroll progress indicator
const createScrollIndicator = () => {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(135deg, #af6025 0%, #d4923f 100%);
        z-index: 9999;
        transition: width 0.1s ease-out;
    `;
    document.body.appendChild(indicator);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        indicator.style.width = scrolled + '%';
    });
};

createScrollIndicator();

// Add copy functionality for code blocks
document.addEventListener('DOMContentLoaded', () => {
    const codeElements = document.querySelectorAll('code');
    codeElements.forEach(code => {
        code.style.cursor = 'pointer';
        code.title = '點擊複製';
        code.addEventListener('click', () => {
            navigator.clipboard.writeText(code.textContent).then(() => {
                const originalText = code.textContent;
                code.textContent = '✓ 已複製！';
                setTimeout(() => {
                    code.textContent = originalText;
                }, 1000);
            });
        });
    });
});

// Dynamic year in footer
const updateFooterYear = () => {
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = `&copy; ${currentYear} PoE Ninja to Chronicles PoB Sharer. Made with ❤️ for the PoE community.`;
    }
};

updateFooterYear();

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < 800) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 800);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    });
});

// Console Easter Egg
console.log('%c🎮 PoE Ninja to Chronicles PoB Sharer', 'font-size: 24px; color: #af6025; font-weight: bold;');
console.log('%c⚡ Built with Clean Architecture', 'font-size: 14px; color: #d4923f;');
console.log('%c📦 GitHub: https://github.com/jakeuj/PoE', 'font-size: 12px; color: #888;');
console.log('%c💡 正在尋找開發者？查看我們的架構設計！', 'font-size: 12px; color: #888;');

