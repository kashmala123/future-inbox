
        // Initialize on DOM load
        document.addEventListener('DOMContentLoaded', function() {
            
            
            // Back to top button
            const backToTop = document.getElementById('backToTop');
            backToTop.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Create stars for the background
            const starsContainer = document.getElementById('stars');
            const starsCount = window.innerWidth < 768 ? 50 : 150;
            
            for (let i = 0; i < starsCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Random position
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                
                // Random size
                const size = Math.random() * 3;
                
                // Random animation duration
                const duration = 1 + Math.random() * 5;
                
                star.style.left = `${posX}%`;
                star.style.top = `${posY}%`;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.setProperty('--duration', `${duration}s`);
                
                // Random delay
                star.style.animationDelay = `${Math.random() * 5}s`;
                
                starsContainer.appendChild(star);
            }
            
            // Create spark particles around the portal
            const portalContainer = document.querySelector('.portal-container');
            const sparkCount = window.innerWidth < 768 ? 15 : 30;
            
            for (let i = 0; i < sparkCount; i++) {
                const spark = document.createElement('div');
                spark.classList.add('spark');
                
                // Random position around the portal
                const angle = Math.random() * Math.PI * 2;
                const distance = 180 + Math.random() * 40;
                const posX = Math.cos(angle) * distance;
                const posY = Math.sin(angle) * distance;
                
                // Random movement parameters
                const targetX = Math.cos(angle) * 20;
                const targetY = Math.sin(angle) * 20;
                const rotation = Math.random() * 360;
                
                spark.style.left = `calc(50% + ${posX}px)`;
                spark.style.top = `calc(50% + ${posY}px)`;
                spark.style.setProperty('--spark-x', `${targetX}px`);
                spark.style.setProperty('--spark-y', `${targetY}px`);
                spark.style.setProperty('--spark-rotate', `${rotation}deg`);
                
                // Random animation duration
                const duration = 3 + Math.random() * 4;
                spark.style.animation = `spark-float ${duration}s infinite`;
                spark.style.animationDelay = `${Math.random() * 2}s`;
                
                // Random size
                const size = 2 + Math.random() * 4;
                spark.style.width = `${size}px`;
                spark.style.height = `${size}px`;
                
                portalContainer.appendChild(spark);
            }
            
            // FAQ accordion
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                
                question.addEventListener('click', () => {
                    const expanded = question.getAttribute('aria-expanded') === 'true';
                    question.setAttribute('aria-expanded', !expanded);
                    item.classList.toggle('active');
                });
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Update URL without adding to history
                        history.replaceState(null, null, targetId);
                    }
                });
            });
            
          // ... (inside the 'DOMContentLoaded' event listener)

// FINAL DYNAMIC-HEIGHT TESTIMONIAL LOGIC
const carousel = document.querySelector('.testimonial-carousel');
const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
const prevBtn = document.getElementById('testimonial-prev');
const nextBtn = document.getElementById('testimonial-next');
const dots = Array.from(document.querySelectorAll('.testimonial-dot'));

let currentIndex = 0;
let slideInterval;

function showSlide(index) {
    const newIndex = (index + slides.length) % slides.length; // Wraps index

    // Get the height of the incoming slide BEFORE animation
    const nextSlide = slides[newIndex];
    const nextSlideHeight = nextSlide.offsetHeight;
    
    // Set the carousel wrapper's height to match
    carousel.style.height = `${nextSlideHeight}px`;

    // Deactivate current slide
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    // Activate new slide
    nextSlide.classList.add('active');
    dots[newIndex].classList.add('active');

    currentIndex = newIndex;
}

function startSlideShow() {
    clearInterval(slideInterval); // Clear any existing interval
    slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 7000); // 7-second interval
}

// Event Listeners
nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
    startSlideShow(); // Reset interval on click
});

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
    startSlideShow(); // Reset interval on click
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        startSlideShow(); // Reset interval on click
    });
});

// Initialize on page load
// Set initial height based on the first slide
window.addEventListener('load', () => {
    if (slides.length > 0) {
        carousel.style.height = `${slides[0].offsetHeight}px`;
    }
});

// Also re-calculate on window resize
window.addEventListener('resize', () => {
    if (slides.length > 0) {
        carousel.style.height = `${slides[currentIndex].offsetHeight}px`;
    }
});

startSlideShow();
            
            // ===== MODIFIED: Newsletter validation and modal logic =====
            const emailInput = document.getElementById('newsletter-email');
            const subscribeBtn = document.getElementById('subscribe-btn');
            const emailError = document.getElementById('email-error');
            const subscriptionModal = document.getElementById('subscription-modal');
            const subscriptionModalCloseBtn = document.getElementById('subscription-modal-close-btn');
            const subscriptionModalOkBtn = document.getElementById('subscription-modal-ok-btn');

            function openSubscriptionModal() {
                subscriptionModal.classList.add('visible');
                subscriptionModal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                subscriptionModalOkBtn.focus();
            }

            function closeSubscriptionModal() {
                subscriptionModal.classList.remove('visible');
                subscriptionModal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
            
            subscribeBtn.addEventListener('click', () => {
                const email = emailInput.value.trim();
                
                if (email === '') {
                    emailError.textContent = 'Please enter your email address';
                    emailError.style.display = 'block';
                    return;
                }
                
                if (!validateEmail(email)) {
                    emailError.textContent = 'Please enter a valid email address';
                    emailError.style.display = 'block';
                    return;
                }
                
                // On success, show the modal instead of an alert
                emailError.style.display = 'none';
                emailInput.value = '';
                openSubscriptionModal(); 
            });

            // Add event listeners for the new subscription modal
            subscriptionModalCloseBtn.addEventListener('click', closeSubscriptionModal);
            subscriptionModalOkBtn.addEventListener('click', closeSubscriptionModal);
            subscriptionModal.addEventListener('click', (e) => {
                if (e.target === subscriptionModal) {
                    closeSubscriptionModal();
                }
            });
             document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && subscriptionModal.classList.contains('visible')) {
                    closeSubscriptionModal();
                }
            });
            
            // Press Enter to submit in newsletter form
            emailInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    subscribeBtn.click();
                }
            });
            
            function validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }
        });
                // ... (inside the 'DOMContentLoaded' event listener)

        // ENHANCED MODAL LOGIC
        const modal = document.getElementById('use-case-modal');
        const modalBody = document.getElementById('modal-body');
        const closeModalBtn = document.getElementById('modal-close-btn');
        const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

        // Content for each use case, now with an icon property
        const modalContent = {
            graduation: {
                icon: "fas fa-graduation-cap",
                title: "A Letter for Their Big Day",
                html: `
                    <p>Imagine your child, years from now, on their graduation day. Amidst the celebration, they receive an email from you—a message you wrote when they were just starting their journey.</p>
                    <p>With FutureInbox, you can capture your hopes and dreams for them, offering timeless wisdom and love that arrives at the perfect moment, creating a memory they will cherish forever.</p>
                    <a href="compose.html" class="btn btn-primary">Compose a Graduation Message</a>
                `
            },
            anniversary: {
                icon: "fas fa-heart",
                title: "A Love That Transcends Time",
                html: `
                    <p>Keep the romance alive across the decades. Schedule messages for your 5th, 10th, or even 50th anniversary. Remind your partner of the little moments that built your beautiful life together.</p>
                    <p>It’s more than a message; it’s a testament to your enduring love, a beautiful surprise that says "I'm always thinking of you," even years in advance.</p>
                    <a href="compose.html" class="btn btn-primary">Create an Anniversary Wish</a>
                `
            },
            parental: {
                icon: "fas fa-baby",
                title: "Guidance for Life's Milestones",
                html: `
                    <p>As a parent, you have a lifetime of wisdom to share. But you can't be there for every single moment. With FutureInbox, your guidance can be.</p>
                    <p>Leave advice for your children to receive when they get their first job, buy their first home, or become parents themselves. Your voice can offer comfort and perspective right when they need it most.</p>
                    <a href="compose.html" class="btn btn-primary">Share Parental Wisdom</a>
                `
            }
        };

        function openModal(caseKey) {
            const content = modalContent[caseKey];
            if (!content) return;

            modalBody.innerHTML = `
                <div class="modal-icon"><i class="${content.icon}"></i></div>
                <h3 id="modal-title">${content.title}</h3>
                ${content.html}
            `;
            modal.classList.add('visible');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            closeModalBtn.focus(); // Set focus to the close button for accessibility
        }

        function closeModal() {
            modal.classList.remove('visible');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = ''; // Restore scrolling
        }

        learnMoreBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const caseKey = btn.dataset.case;
                openModal(caseKey);
            });
        });

        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            // Close modal if the overlay (background) is clicked
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close modal with the Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('visible')) {
                closeModal();
            }
        });