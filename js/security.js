    // We rename the main function for this page to initPage(), which global.js will find and run.
        function initPage() {
            // ===== Particle Background Effect =====
            const canvas = document.getElementById('particle-canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                let particles = [];
                const particleCount = Math.floor(canvas.width / 40);

                class Particle { /* ... Particle class definition ... */ }
                function initParticles() { /* ... initParticles function ... */ }
                function animateParticles() { /* ... animateParticles function ... */ }

                if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
                    initParticles();
                    animateParticles();
                }
                window.addEventListener('resize', () => {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    initParticles();
                });
            }

            // ===== Interactive Glow Effect for Pillar Cards =====
            const pillarCards = document.querySelectorAll('.pillar-card');
            pillarCards.forEach(card => {
                const glow = card.querySelector('.glow');
                if(glow) {
                    card.addEventListener('mousemove', (e) => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        glow.style.setProperty('--x', `${x}px`);
                        glow.style.setProperty('--y', `${y}px`);
                    });
                }
            });

            // ===== Scroll-Triggered Animations =====
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.2
            });
            const elementsToReveal = document.querySelectorAll('.reveal');
            elementsToReveal.forEach(el => observer.observe(el));
            
            // ===== Highlight Box Animation =====
            const highlightBoxes = document.querySelectorAll('.highlight-box');
            highlightBoxes.forEach(box => {
                box.addEventListener('mouseenter', () => {
                    box.style.transform = 'translateX(5px)';
                });
                box.addEventListener('mouseleave', () => {
                    box.style.transform = 'translateX(0)';
                });
            });
        }