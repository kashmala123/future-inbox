 function debounce(func, wait = 10, immediate = true) {
            let timeout;
            return function() {
                const context = this, args = arguments;
                const later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }
        particlesJS('particles-js', {
            particles: {
                number: { value: 150, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00d1ff",
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
        function initTimelineAnimation() {
            const timelineItems = document.querySelectorAll('.timeline-item');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.2 });
            timelineItems.forEach(item => {
                observer.observe(item);
            });
        }
        
        // ===== START: NEW JAVASCRIPT FOR TESTIMONIAL ANIMATION =====
        function initTestimonialAnimation() {
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.2 });
            
            testimonialCards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 150}ms`; // Stagger the animation
                observer.observe(card);
            });
        }
        // ===== END: NEW JAVASCRIPT =====

        function initAppSlideshow() {
            const slides = document.querySelector('.app-slides');
            if (!slides) return;
            let currentSlide = 0;
            setInterval(() => {
                currentSlide = (currentSlide + 1) % 3;
                slides.style.transform = `translateX(-${currentSlide * 100}%)`;
            }, 3000);
        }
        function initBackToTop() {
            const backToTopBtn = document.querySelector('.back-to-top');
            if(!backToTopBtn) return;
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            // ... all your existing initialization code ...
            handleScroll();
            futureinboxNavHamburger.addEventListener('click', toggleMobileMenu);
            futureinboxMobileCloseMenu.addEventListener('click', toggleMobileMenu);
            futureinboxMobileOverlay.addEventListener('click', toggleMobileMenu);
            futureinboxMobileDropdownBtn.addEventListener('click', toggleMobileDropdown);
            document.addEventListener('click', closeDropdownsOnClickOutside);
            document.addEventListener('keydown', handleKeyboardNavigation);
            window.addEventListener('scroll', debounce(handleScroll));
            if (window.matchMedia("(hover: hover)").matches) {
                futureinboxNavDropdowns.forEach(dropdown => {
                    dropdown.addEventListener('mouseenter', handleDesktopDropdown);
                });
            }
             futureinboxNavDropdowns.forEach(dropdown => {
                dropdown.addEventListener('click', handleDesktopDropdown);
            });
            const mobileLinks = futureinboxMobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', toggleMobileMenu);
            });
            
            // About page scripts
            initTimelineAnimation();
            initTestimonialAnimation(); // <-- Added call to the new function
            initAppSlideshow();
            initBackToTop();
        });