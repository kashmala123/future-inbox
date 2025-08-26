     // We rename the main function to initPage(), which global.js will find and run.
        function initPage() {
            initAnimations();
            showToast('Explore our amazing features!', 'info');
        }
        
        // This function is only needed by the features page
        function initAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            });
            
            document.querySelectorAll('.feature-card, .stat-card').forEach(card => {
                observer.observe(card);
            });
        }
        
        // This function is only needed by the features page
        function showToast(message, type = 'info') {
            const toast = document.getElementById('toast');
            if(!toast) return;
            const toastMessage = document.getElementById('toast-message');
            if(toastMessage) toastMessage.textContent = message;
            toast.className = `toast ${type} show`;
            setTimeout(() => toast.classList.remove('show'), 4000);
        }