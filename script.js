// Cart toggle
function toggleCart() {
document.getElementById('cartOverlay').classList.toggle('open');
document.getElementById('cartDrawer').classList.toggle('open');
}

// Add to cart feedback
function addToCart(btn) {
const original = btn.textContent;
btn.textContent = 'Added ✓';
btn.style.background = 'var(--gold)';
btn.style.color = 'var(--white)';
setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.style.color = '';
}, 1500);
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));