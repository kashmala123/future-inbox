     // We rename the main function for this page to initPage(), which global.js will find and run.
        function initPage() {
            // Set current date
            const currentDateEl = document.getElementById('current-date');
            if (currentDateEl) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                currentDateEl.textContent = new Date().toLocaleDateString('en-US', options);
            }

            // Print functionality
            const printBtn = document.getElementById('print-btn');
            if (printBtn) {
                printBtn.addEventListener('click', () => window.print());
            }

            // Terms acceptance functionality
            const acceptBtn = document.getElementById('accept-btn');
            const bannerAcceptBtn = document.getElementById('banner-accept-btn');
            const viewTermsBtn = document.getElementById('view-terms-btn');
            const termsBanner = document.getElementById('terms-banner');
            const beautifulAlert = document.getElementById('beautiful-alert');
            const alertCloseBtn = document.getElementById('alert-close-btn');
            const alertLearnBtn = document.getElementById('alert-learn-btn');
            
            function showBeautifulAlert() {
                if (beautifulAlert) beautifulAlert.classList.add('visible');
            }
            
            if (acceptBtn) {
                acceptBtn.addEventListener('click', () => {
                    localStorage.setItem('tos-accepted', 'true');
                    showBeautifulAlert();
                });
            }
            
            if (bannerAcceptBtn) {
                bannerAcceptBtn.addEventListener('click', () => {
                    localStorage.setItem('tos-accepted', 'true');
                    if (termsBanner) termsBanner.classList.remove('visible');
                    showBeautifulAlert();
                });
            }
            
            if (viewTermsBtn) {
                viewTermsBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
            }
            
            if (alertCloseBtn) {
                alertCloseBtn.addEventListener('click', () => beautifulAlert.classList.remove('visible'));
            }
            
            if (alertLearnBtn) {
                alertLearnBtn.addEventListener('click', () => {
                    beautifulAlert.classList.remove('visible');
                    const targetElement = document.getElementById('service-description');
                    if(targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
                });
            }

            // Show terms banner if not accepted
            if (!localStorage.getItem('tos-accepted') && termsBanner) {
                setTimeout(() => {
                    termsBanner.classList.add('visible');
                }, 3000);
            }

            // Back to top button functionality
            const backToTopButton = document.getElementById('back-to-top');
            if (backToTopButton) {
                window.addEventListener('scroll', () => {
                    if (window.pageYOffset > 300) {
                        backToTopButton.classList.add('visible');
                    } else {
                        backToTopButton.classList.remove('visible');
                    }
                });
                backToTopButton.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
            
            // Policy history toggle
            const showHistory = document.getElementById('show-history');
            if (showHistory) {
                showHistory.addEventListener('click', (e) => {
                    e.preventDefault();
                    const content = document.getElementById('history-content');
                    if (content) content.style.display = content.style.display === 'none' ? 'block' : 'none';
                });
            }
            
            // Add animation classes on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.terms-section, .highlight-box, .responsibility-card, .nav-card').forEach(el => {
                observer.observe(el);
            });
        }