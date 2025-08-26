  // We rename the main function for this page to initPage(), which global.js will find and run.
        function initPage() {
            const particlesContainer = document.querySelector('.particles');
            if (particlesContainer) {
                for (let i = 0; i < 20; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    particle.style.width = Math.random() * 8 + 2 + 'px';
                    particle.style.height = particle.style.width;
                    particle.style.top = Math.random() * 100 + '%';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.animationDelay = Math.random() * 5 + 's';
                    particle.style.animationDuration = Math.random() * 10 + 5 + 's';
                    particlesContainer.appendChild(particle);
                }
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        
                        if (entry.target.classList.contains('pillars-section')) {
                            entry.target.classList.add('visible');
                            const pillars = document.querySelectorAll('.pillar');
                            pillars.forEach((pillar, index) => {
                                setTimeout(() => {
                                    pillar.classList.add('visible');
                                }, index * 300);
                            });
                        }
                    }
                });
            }, {
                threshold: 0.2
            });

            document.querySelectorAll('.step-chapter, .pillar, .final-cta, .pillars-section').forEach(el => {
                observer.observe(el);
            });
            
            const journeyIcons = document.querySelectorAll('.journey-icon');
            journeyIcons.forEach(icon => {
                icon.addEventListener('mouseenter', () => {
                    icon.style.animation = 'pulse 1.5s infinite';
                });
                icon.addEventListener('mouseleave', () => {
                    icon.style.animation = 'float 6s ease-in-out infinite';
                });
            });
        }