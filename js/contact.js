   function initPage() {
        // Contact form functionality
       
            const particlesContainer = document.getElementById('particles');
            if (particlesContainer) {
                let particleCount = 40;
                if (window.innerWidth < 768) {
                    particleCount = 15;
                }
                
                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    particle.style.left = `${Math.random() * 100}%`;
                    particle.style.top = `${Math.random() * 100}%`;
                    const size = Math.random() * 2 + 1;
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    const duration = Math.random() * 25 + 15;
                    particle.style.animation = `float ${duration}s infinite linear`;
                    particle.style.animationDelay = `${Math.random() * 5}s`;
                    particlesContainer.appendChild(particle);
                }
            }
            
            const form = document.getElementById('contactForm');
            if(form) {
                const resetBtn = document.getElementById('resetForm');
                const nameInput = document.getElementById('fullName');
                const emailInput = document.getElementById('emailAddress');
                const subjectInput = document.getElementById('subject');
                const messageInput = document.getElementById('message');
                const botCheckInput = document.getElementById('botCheck');
                const formSpinner = document.getElementById('formSpinner');
                const submitFeedback = document.getElementById('submitFeedback');
                const modal = document.getElementById('confirmationModal');
                const modalConfirm = document.getElementById('modalConfirm');
                const modalCancel = document.getElementById('modalCancel');
                
                const nameError = document.getElementById('nameError');
                const emailError = document.getElementById('emailError');
                const subjectError = document.getElementById('subjectError');
                const messageError = document.getElementById('messageError');
                const messageCounter = document.getElementById('messageCounter');
                
                function loadFormData() {
                    const savedData = JSON.parse(localStorage.getItem('futureInboxFormData')) || {};
                    nameInput.value = savedData.fullName || '';
                    emailInput.value = savedData.emailAddress || '';
                    subjectInput.value = savedData.subject || '';
                    messageInput.value = savedData.message || '';
                    updateCharCounter();
                }
                
                function saveFormData() {
                    const formData = {
                        fullName: nameInput.value,
                        emailAddress: emailInput.value,
                        subject: subjectInput.value,
                        message: messageInput.value,
                    };
                    localStorage.setItem('futureInboxFormData', JSON.stringify(formData));
                }
                
                function updateCharCounter() {
                    const currentLength = messageInput.value.length;
                    messageCounter.textContent = `${currentLength}/500 (min 20)`;
                    messageCounter.classList.remove('limit-reached', 'min-warning');
                    if (currentLength >= 500) {
                        messageCounter.classList.add('limit-reached');
                    } else if (currentLength < 20 && currentLength > 0) {
                        messageCounter.classList.add('min-warning');
                    }
                }
                
                function clearForm() {
                    form.reset();
                    nameError.style.display = 'none';
                    emailError.style.display = 'none';
                    subjectError.style.display = 'none';
                    messageError.style.display = 'none';
                    submitFeedback.classList.remove('show');
                    localStorage.removeItem('futureInboxFormData');
                    updateCharCounter();
                    modal.classList.remove('show');
                }
                
                function validateName() {
                    if (nameInput.value.trim() === '') {
                        nameError.style.display = 'block';
                        nameInput.style.borderColor = '#ff6b6b';
                        nameInput.setAttribute('aria-invalid', 'true');
                        return false;
                    }
                    nameError.style.display = 'none';
                    nameInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    nameInput.setAttribute('aria-invalid', 'false');
                    return true;
                }
                
                function validateEmail() {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    const email = emailInput.value.trim();
                    if (email === '') {
                        emailError.textContent = 'Please enter your email address';
                        emailError.style.display = 'block';
                        emailInput.style.borderColor = '#ff6b6b';
                        emailInput.setAttribute('aria-invalid', 'true');
                        return false;
                    }
                    if (!emailRegex.test(email)) {
                        emailError.textContent = 'Please enter a valid email address';
                        emailError.style.display = 'block';
                        emailInput.style.borderColor = '#ff6b6b';
                        emailInput.setAttribute('aria-invalid', 'true');
                        return false;
                    }
                    emailError.style.display = 'none';
                    emailInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    emailInput.setAttribute('aria-invalid', 'false');
                    return true;
                }
                
                function validateSubject() {
                    if (subjectInput.value.trim() === '') {
                        subjectError.style.display = 'block';
                        subjectInput.style.borderColor = '#ff6b6b';
                        subjectInput.setAttribute('aria-invalid', 'true');
                        return false;
                    }
                    subjectError.style.display = 'none';
                    subjectInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    subjectInput.setAttribute('aria-invalid', 'false');
                    return true;
                }
                
                function validateMessage() {
                    const message = messageInput.value.trim();
                    if (message === '') {
                        messageError.textContent = 'Please enter your message (minimum 20 characters)';
                        messageError.style.display = 'block';
                        messageInput.style.borderColor = '#ff6b6b';
                        messageInput.setAttribute('aria-invalid', 'true');
                        return false;
                    }
                    if (message.length < 20) {
                        messageError.textContent = `Message is too short (${message.length}/20 characters)`;
                        messageError.style.display = 'block';
                        messageInput.style.borderColor = '#ff6b6b';
                        messageInput.setAttribute('aria-invalid', 'true');
                        return false;
                    }
                    messageError.style.display = 'none';
                    messageInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    messageInput.setAttribute('aria-invalid', 'false');
                    return true;
                }
                
                nameInput.addEventListener('input', function() {
                    saveFormData();
                    if (nameInput.value.trim() !== '') validateName();
                    else {
                        nameError.style.display = 'none';
                        nameInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        nameInput.setAttribute('aria-invalid', 'false');
                    }
                });
                
                emailInput.addEventListener('input', function() {
                    saveFormData();
                    if (emailInput.value.trim() !== '') validateEmail();
                    else {
                        emailError.style.display = 'none';
                        emailInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        emailInput.setAttribute('aria-invalid', 'false');
                    }
                });

                subjectInput.addEventListener('input', function() {
                    saveFormData();
                    if (subjectInput.value.trim() !== '') validateSubject();
                    else {
                        subjectError.style.display = 'none';
                        subjectInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        subjectInput.setAttribute('aria-invalid', 'false');
                    }
                });
                
                nameInput.addEventListener('blur', validateName);
                emailInput.addEventListener('blur', validateEmail);
                subjectInput.addEventListener('blur', validateSubject);
                messageInput.addEventListener('blur', validateMessage);
                
                messageInput.addEventListener('input', function() {
                    saveFormData();
                    updateCharCounter();
                    if (messageInput.value.trim() !== '') validateMessage();
                    else {
                        messageError.style.display = 'none';
                        messageInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        messageInput.setAttribute('aria-invalid', 'false');
                    }
                });
                
                form.addEventListener('submit', async function(event) {
                    event.preventDefault();
                    if (botCheckInput.value.trim() !== '') {
                        clearForm();
                        return;
                    }
                    
                    const isNameValid = validateName();
                    const isEmailValid = validateEmail();
                    const isSubjectValid = validateSubject();
                    const isMessageValid = validateMessage();
                    
                    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
                        submitFeedback.classList.add('show');
                        try {
                            const formData = new FormData(form);
                            formData.delete('botCheck');
                            
                            const response = await fetch(form.action, {
                                method: 'POST',
                                body: formData,
                                headers: { 'Accept': 'application/json' }
                            });
                            
                            submitFeedback.classList.remove('show');
                            
                            if (response.ok) {
                                Swal.fire({
                                    title: 'Message Sent!',
                                    text: 'Thank you for contacting us. We\'ll get back to you within 24-48 hours.',
                                    icon: 'success',
                                    confirmButtonText: 'OK',
                                    confirmButtonColor: '#00bfff',
                                    background: '#0a0d1f',
                                    color: '#ffffff',
                                    backdrop: `rgba(10, 13, 31, 0.8)`,
                                }).then(() => clearForm());
                            } else {
                                const data = await response.json();
                                throw new Error(data.errors ? data.errors.map(e => e.message).join(', ') : 'Failed to send message.');
                            }
                        } catch (error) {
                            Swal.fire({
                                title: 'Error!',
                                text: error.message || 'An error occurred. Please try again.',
                                icon: 'error',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#ff6b6b',
                                background: '#0a0d1f',
                                color: '#ffffff'
                            });
                        }
                    } else {
                        const firstError = form.querySelector('.error[style*="display: block"]');
                        if (firstError) {
                            const inputId = firstError.id.replace('Error', '');
                            document.getElementById(inputId)?.focus();
                        }
                    }
                });
            
                resetBtn.addEventListener('click', () => modal.classList.add('show'));
                modalConfirm.addEventListener('click', clearForm);
                modalCancel.addEventListener('click', () => modal.classList.remove('show'));
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) modal.classList.remove('show');
                });
                
                loadFormData();
            }
        
        };