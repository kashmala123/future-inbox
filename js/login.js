    // DOM Elements
    const signInToggle = document.getElementById('signInToggle');
    const signUpToggle = document.getElementById('signUpToggle');
    const toggleIndicator = document.getElementById('toggleIndicator');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const signInMessage = document.getElementById('signInMessage');
    const signUpMessage = document.getElementById('signUpMessage');
    const switchToSignUp = document.getElementById('switchToSignUp');
    const switchToSignIn = document.getElementById('switchToSignIn');
    const passwordStrength = document.getElementById('passwordStrength');
    const passwordStrengthText = document.getElementById('passwordStrengthText');
    const passwordMatch = document.getElementById('passwordMatch');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeModal = document.getElementById('closeModal');
    const sendResetLink = document.getElementById('sendResetLink');
    
    // Buttons and loaders
    const signInSubmit = document.getElementById('signInSubmit');
    const signUpSubmit = document.getElementById('signUpSubmit');
    const signInLoader = document.getElementById('signInLoader');
    const signUpLoader = document.getElementById('signUpLoader');
    const resetLoader = document.getElementById('resetLoader');

    // Password requirement elements
    const reqLength = document.getElementById('reqLength');
    const reqUppercase = document.getElementById('reqUppercase');
    const reqLowercase = document.getElementById('reqLowercase');
    const reqNumber = document.getElementById('reqNumber');
    const reqSpecial = document.getElementById('reqSpecial');

    // New elements
    const sessionWarning = document.getElementById('sessionWarning');
    const sessionTimer = document.getElementById('sessionTimer');
    
    // Social auth elements
    const socialModal = document.getElementById('socialModal');
    const socialModalIcon = document.getElementById('socialModalIcon');
    const socialModalTitle = document.getElementById('socialModalTitle');
    const socialModalText = document.getElementById('socialModalText');
    const socialProgressBar = document.getElementById('socialProgressBar');
    const socialModalMessage = document.getElementById('socialModalMessage');
    
    // State variables
    let currentForm = 'signIn';
    let failedAttempts = 0;
    let lastFailedAttempt = 0;
    let sessionTimeout;
    let sessionCountdown;
    let lockoutTimer;
    
    // Create cosmic background
    function createCosmicBackground() {
      const cosmicBg = document.getElementById('cosmicBg');
      
      // Create nebulas
      for (let i = 0; i < 5; i++) {
        const nebula = document.createElement('div');
        nebula.classList.add('nebula');
        
        const size = Math.random() * 200 + 100;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        nebula.style.width = `${size}px`;
        nebula.style.height = `${size}px`;
        nebula.style.top = `${posY}%`;
        nebula.style.left = `${posX}%`;
        nebula.style.animationDuration = `${Math.random() * 20 + 15}s`;
        
        // Random nebula color
        const colors = [
          'rgba(166, 108, 255, 0.1)',
          'rgba(0, 212, 255, 0.1)',
          'rgba(255, 64, 129, 0.1)'
        ];
        nebula.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]} 0%, transparent 70%)`;
        
        cosmicBg.appendChild(nebula);
      }
      
      // Create stars
      for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.8 + 0.2;
        const duration = Math.random() * 5 + 2;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${posY}%`;
        star.style.left = `${posX}%`;
        star.style.opacity = opacity;
        star.style.setProperty('--opacity', opacity);
        star.style.setProperty('--duration', `${duration}s`);
        
        cosmicBg.appendChild(star);
      }
    }
    
    // Simple SHA-256 hashing for better security
    async function sha256(str) {
      const buffer = new TextEncoder().encode(str);
      const digest = await crypto.subtle.digest('SHA-256', buffer);
      const hashArray = Array.from(new Uint8Array(digest));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
    
    // Initialize localStorage users if not exists
    function initUsers() {
      if (!localStorage.getItem('users')) {
        // Add a demo user for testing
        localStorage.setItem('users', JSON.stringify([
          {
            name: "Future Explorer",
            email: "demo@futureinbox.com",
            password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8" // "password" hashed with SHA-256
          }
        ]));
      }
    }
    
    // Toggle between Sign In and Sign Up forms
    function toggleForm(formType) {
      currentForm = formType;
      
      if (formType === 'signIn') {
        signInToggle.classList.add('active');
        signUpToggle.classList.remove('active');
        signInForm.classList.add('active');
        signUpForm.classList.remove('active');
        toggleIndicator.style.transform = 'translateX(0)';
      } else {
        signInToggle.classList.remove('active');
        signUpToggle.classList.add('active');
        signInForm.classList.remove('active');
        signUpForm.classList.add('active');
        toggleIndicator.style.transform = 'translateX(100%)';
      }
      
      // Clear messages and errors when switching forms
      clearErrorMessages();
      signInMessage.className = 'form-message';
      signUpMessage.className = 'form-message';
    }
    
    // Toggle password visibility
    function togglePasswordVisibility(inputId, toggleBtn) {
      const passwordInput = document.getElementById(inputId);
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      
      // Toggle eye icon
      if (type === 'text') {
        toggleBtn.innerHTML = '<i class="far fa-eye-slash"></i>';
        toggleBtn.setAttribute('aria-label', 'Hide password');
      } else {
        toggleBtn.innerHTML = '<i class="far fa-eye"></i>';
        toggleBtn.setAttribute('aria-label', 'Show password');
      }
    }
    
    // Validate password strength
    function checkPasswordStrength(password) {
      let strength = 0;
      
      if (password.length >= 8) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[a-z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^A-Za-z0-9]/.test(password)) strength++;
      
      return strength;
    }
    
    // Update password strength meter
    function updatePasswordStrength() {
      const password = document.getElementById('signUpPassword').value;
      const strength = checkPasswordStrength(password);
      
      passwordStrength.className = 'password-strength-meter';
      passwordStrengthText.textContent = '';
      
      if (password.length === 0) {
        passwordStrength.style.width = '0';
        passwordStrengthText.textContent = '';
        passwordRequirements.classList.remove('visible');
      } else {
        passwordRequirements.classList.add('visible');
        
        // Update requirements
        reqLength.classList.toggle('valid', password.length >= 8);
        reqLength.classList.toggle('invalid', password.length < 8);
        reqLength.querySelector('i').className = password.length >= 8 ? 'fas fa-check-circle' : 'fas fa-circle';
        
        reqUppercase.classList.toggle('valid', /[A-Z]/.test(password));
        reqUppercase.classList.toggle('invalid', !/[A-Z]/.test(password));
        reqUppercase.querySelector('i').className = /[A-Z]/.test(password) ? 'fas fa-check-circle' : 'fas fa-circle';
        
        reqLowercase.classList.toggle('valid', /[a-z]/.test(password));
        reqLowercase.classList.toggle('invalid', !/[a-z]/.test(password));
        reqLowercase.querySelector('i').className = /[a-z]/.test(password) ? 'fas fa-check-circle' : 'fas fa-circle';
        
        reqNumber.classList.toggle('valid', /[0-9]/.test(password));
        reqNumber.classList.toggle('invalid', !/[0-9]/.test(password));
        reqNumber.querySelector('i').className = /[0-9]/.test(password) ? 'fas fa-check-circle' : 'fas fa-circle';
        
        reqSpecial.classList.toggle('valid', /[^A-Za-z0-9]/.test(password));
        reqSpecial.classList.toggle('invalid', !/[^A-Za-z0-9]/.test(password));
        reqSpecial.querySelector('i').className = /[^A-Za-z0-9]/.test(password) ? 'fas fa-check-circle' : 'fas fa-circle';
        
        if (password.length === 0) {
          passwordStrength.style.width = '0';
          passwordStrengthText.textContent = '';
        } else if (strength <= 2) {
          passwordStrength.classList.add('strength-weak');
          passwordStrength.style.width = '33%';
          passwordStrengthText.textContent = 'Weak password';
          passwordStrengthText.style.color = 'var(--error)';
        } else if (strength <= 4) {
          passwordStrength.classList.add('strength-medium');
          passwordStrength.style.width = '66%';
          passwordStrengthText.textContent = 'Medium password';
          passwordStrengthText.style.color = 'var(--warning)';
        } else {
          passwordStrength.classList.add('strength-strong');
          passwordStrength.style.width = '100%';
          passwordStrengthText.textContent = 'Strong password';
          passwordStrengthText.style.color = 'var(--success)';
        }
      }
    }
    
    // Check password match
    function checkPasswordMatch() {
      const password = document.getElementById('signUpPassword').value;
      const confirmPassword = document.getElementById('signUpConfirmPassword').value;
      
      if (password.length === 0 || confirmPassword.length === 0) {
        passwordMatch.classList.remove('visible');
        return;
      }
      
      passwordMatch.classList.add('visible');
      
      if (password === confirmPassword) {
        passwordMatch.innerHTML = '<i class="fas fa-check-circle match-success"></i> Passwords match';
      } else {
        passwordMatch.innerHTML = '<i class="fas fa-times-circle match-error"></i> Passwords do not match';
      }
    }
    
    // Clear error messages
    function clearErrorMessages() {
      // Clear all error messages and remove error styling
      document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
      });
      document.querySelectorAll('.form-input').forEach(el => {
        el.classList.remove('input-error');
        el.removeAttribute('aria-invalid');
      });
    }
    
    // Display error message for a specific field
    function showError(inputId, message) {
      const inputElement = document.getElementById(inputId);
      const errorElement = document.getElementById(`${inputId}Error`);
      
      if (inputElement && errorElement) {
        inputElement.classList.add('input-error');
        inputElement.setAttribute('aria-invalid', 'true');
        errorElement.textContent = message;
      }
    }
    
    // Validate sign up form
    function validateSignUp() {
      clearErrorMessages();
      
      const name = document.getElementById('signUpName').value;
      const email = document.getElementById('signUpEmail').value;
      const password = document.getElementById('signUpPassword').value;
      const confirmPassword = document.getElementById('signUpConfirmPassword').value;
      const terms = document.getElementById('terms').checked;
      
      let isValid = true;
      
      if (!name.trim()) {
        showError('signUpName', 'Full name is required');
        isValid = false;
      }
      
      if (!email) {
        showError('signUpEmail', 'Email is required');
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        showError('signUpEmail', 'Please enter a valid email address');
        isValid = false;
      }
      
      if (!password) {
        showError('signUpPassword', 'Password is required');
        isValid = false;
      } else if (password.length < 8) {
        showError('signUpPassword', 'Password must be at least 8 characters');
        isValid = false;
      } else if (checkPasswordStrength(password) < 3) {
        showError('signUpPassword', 'Password is too weak (include uppercase, lowercase, number, or symbol)');
        isValid = false;
      }
      
      if (!confirmPassword) {
        showError('signUpConfirmPassword', 'Please confirm your password');
        isValid = false;
      } else if (password !== confirmPassword) {
        showError('signUpConfirmPassword', 'Passwords do not match');
        isValid = false;
      }
      
      if (!terms) {
        showError('terms', 'You must agree to the terms and conditions');
        isValid = false;
      }
      
      return isValid;
    }
    
    // Validate sign in form
    function validateSignIn() {
      clearErrorMessages();
      
      const email = document.getElementById('signInEmail').value;
      const password = document.getElementById('signInPassword').value;
      
      let isValid = true;
      
      if (!email) {
        showError('signInEmail', 'Email is required');
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        showError('signInEmail', 'Please enter a valid email address');
        isValid = false;
      }
      
      if (!password) {
        showError('signInPassword', 'Password is required');
        isValid = false;
      }
      
      return isValid;
    }
    
    // Handle sign up
    async function handleSignUp() {
      const name = document.getElementById('signUpName').value;
      const email = document.getElementById('signUpEmail').value;
      const password = document.getElementById('signUpPassword').value;
      const rememberMe = document.getElementById('rememberMe').checked;
      
      // Disable submit button and show loader
      signUpSubmit.disabled = true;
      signUpLoader.classList.add('visible');
      
      // Get existing users
      const users = JSON.parse(localStorage.getItem('users'));
      
      // Check if email already exists
      if (users.some(user => user.email === email)) {
        signUpMessage.textContent = 'This email is already registered.';
        signUpMessage.className = 'form-message error';
        signUpSubmit.disabled = false;
        signUpLoader.classList.remove('visible');
        return false;
      }
      
      // Hash password for security
      const hashedPassword = await sha256(password);
      
      // Add new user
      users.push({
        name,
        email,
        password: hashedPassword // Store hashed password
      });
      
      localStorage.setItem('users', JSON.stringify(users));
      
      // Set current user in localStorage
      localStorage.setItem('currentUser', JSON.stringify({ name, email }));
      
      // Set remember me preference
      localStorage.setItem('rememberUser', rememberMe.toString());
      
      signUpMessage.textContent = 'Account created successfully! Redirecting...';
      signUpMessage.className = 'form-message success';
      
      // Redirect to dashboard
      setTimeout(() => {
        window.location.href = 'compose.html';
      }, 1500);
      
      return true;
    }
    
    // Handle sign in
    async function handleSignIn() {
      const email = document.getElementById('signInEmail').value;
      const password = document.getElementById('signInPassword').value;
      const rememberMe = document.getElementById('rememberMe').checked;
      
      // Disable submit button and show loader
      signInSubmit.disabled = true;
      signInLoader.classList.add('visible');
      
      // Rate limiting check
      const now = Date.now();
      if (now - lastFailedAttempt < 30000 && failedAttempts >= 3) {
        signInMessage.textContent = 'Too many failed attempts. Please wait 30 seconds.';
        signInMessage.className = 'form-message error';
        
        // Start lockout countdown
        startLockoutCountdown(30);
        
        signInSubmit.disabled = false;
        signInLoader.classList.remove('visible');
        return;
      }
      
      // Get existing users
      const users = JSON.parse(localStorage.getItem('users'));
      
      // Hash password for comparison
      const hashedPassword = await sha256(password);
      
      // Find user with matching credentials
      const user = users.find(user => user.email === email && user.password === hashedPassword);
      
      if (user) {
        // Reset failed attempts
        failedAttempts = 0;
        
        // Set current user in localStorage
        localStorage.setItem('currentUser', JSON.stringify({ 
          name: user.name, 
          email: user.email 
        }));
        
        // Set remember me preference
        localStorage.setItem('rememberUser', rememberMe.toString());
        localStorage.setItem('isLoggedIn', 'true'); 
          // 2. (Optional but recommended) Save the user's info for personalization.
        localStorage.setItem('currentUser', JSON.stringify({ name: user.name, email: user.email }));
        
        signInMessage.textContent = 'Success! Redirecting...';
        signInMessage.className = 'form-message success';
         
        // Start session timeout
        startSessionTimeout();
        
        // Redirect to dashboard
        setTimeout(() => {
          window.location.href = 'compose.html';
        }, 1500);
      } else {
        // Track failed attempts
        failedAttempts++;
        lastFailedAttempt = Date.now();
        
        signInMessage.textContent = 'Incorrect email or password.';
        signInMessage.className = 'form-message error';
        signInSubmit.disabled = false;
        signInLoader.classList.remove('visible');
      }
    }
    
    // Start session timeout
    function startSessionTimeout() {
      // Clear any existing timeout
      if (sessionTimeout) clearTimeout(sessionTimeout);
      if (sessionCountdown) clearInterval(sessionCountdown);
      
      // Set new timeout (5 minutes)
      sessionTimeout = setTimeout(() => {
        // Log user out
        localStorage.removeItem('currentUser');
        // Show timeout message
        signInMessage.textContent = 'Your session has expired. Please sign in again.';
        signInMessage.className = 'form-message error';
      }, 5 * 60 * 1000); // 5 minutes
      
      // Show warning 1 minute before timeout
      setTimeout(() => {
        sessionWarning.style.display = 'flex';
        let seconds = 60;
        sessionTimer.textContent = seconds;
        
        // Start countdown
        sessionCountdown = setInterval(() => {
          seconds--;
          sessionTimer.textContent = seconds;
          
          if (seconds <= 0) {
            clearInterval(sessionCountdown);
            sessionWarning.style.display = 'none';
          }
        }, 1000);
        
        // Allow user to extend session
        sessionWarning.addEventListener('click', extendSession);
      }, 4 * 60 * 1000); // 4 minutes
    }
    
    // Extend session
    function extendSession() {
      // Reset the timeout
      startSessionTimeout();
      // Hide the warning
      sessionWarning.style.display = 'none';
      clearInterval(sessionCountdown);
    }
    
    // Start lockout countdown
    function startLockoutCountdown(seconds) {
      if (lockoutTimer) clearInterval(lockoutTimer);
      
      let remaining = seconds;
      const originalMessage = signInMessage.textContent;
      
      lockoutTimer = setInterval(() => {
        remaining--;
        signInMessage.textContent = `Too many failed attempts. Please wait ${remaining} seconds.`;
        
        if (remaining <= 0) {
          clearInterval(lockoutTimer);
          signInMessage.textContent = originalMessage;
        }
      }, 1000);
    }
    
    // Handle form submissions
    async function handleFormSubmit(e) {
      e.preventDefault();
      
      if (e.target.id === 'signInForm') {
        if (validateSignIn()) {
          await handleSignIn();
        } else {
          signInSubmit.disabled = false;
          signInLoader.classList.remove('visible');
        }
      } else if (e.target.id === 'signUpForm') {
        if (validateSignUp()) {
          await handleSignUp();
        } else {
          signUpSubmit.disabled = false;
          signUpLoader.classList.remove('visible');
        }
      }
    }
    
    // Handle social authentication
    function handleSocialAuth(provider) {
      // Show social auth modal
      socialModal.style.display = 'flex';
      
      // Set modal content based on provider
      socialModalIcon.className = `social-modal-icon ${provider.toLowerCase()}`;
      socialModalIcon.innerHTML = `<i class="fab fa-${provider.toLowerCase()}"></i>`;
      socialModalTitle.textContent = `Connecting to ${provider}`;
      socialModalText.textContent = `Please wait while we securely connect to your ${provider} account...`;
      socialModalMessage.textContent = '';
      socialModalMessage.className = 'form-message';
      
      // Reset progress bar
      socialProgressBar.style.width = '0%';
      
      // Simulate authentication process
      let progress = 0;
      const progressInterval = setInterval(() => {
        progress += 5;
        socialProgressBar.style.width = `${progress}%`;
        
        if (progress >= 100) {
          clearInterval(progressInterval);
          completeSocialAuth(provider);
        }
      }, 150);
    }
    
    // Complete social authentication
    function completeSocialAuth(provider) {
      // Generate random user details
      const firstName = ["Alex", "Jordan", "Taylor", "Morgan", "Casey", "Riley", "Quinn"];
      const lastName = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller"];
      const domains = {
        'google': 'gmail.com',
        'facebook': 'facebook.com',
        'apple': 'icloud.com'
      };
      
      const randomName = firstName[Math.floor(Math.random() * firstName.length)] + " " + 
                         lastName[Math.floor(Math.random() * lastName.length)];
      const randomEmail = firstName[Math.floor(Math.random() * firstName.length)].toLowerCase() +
                          lastName[Math.floor(Math.random() * lastName.length)].toLowerCase() +
                          Math.floor(Math.random() * 100) + "@" + domains[provider];
      
      // Get existing users
      const users = JSON.parse(localStorage.getItem('users') || []);
      
      // Check if user already exists, if not add them
      let user = users.find(u => u.email === randomEmail);
      if (!user) {
        user = {
          name: randomName,
          email: randomEmail,
          provider: provider
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
      }
      
      // Set current user
      localStorage.setItem('currentUser', JSON.stringify({
        name: user.name,
        email: user.email,
        provider: provider
      }));
      
      // Set rememberUser to true
      localStorage.setItem('rememberUser', 'true');
      
      // Update message
      socialModalText.textContent = `Success! Signed in with ${provider}.`;
      socialModalMessage.textContent = 'Redirecting to your dashboard...';
      socialModalMessage.className = 'form-message success';
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        window.location.href = 'compose.html';
      }, 1500);
    }
    
    // Handle forgot password
    function handleForgotPassword() {
      forgotPasswordModal.style.display = 'flex';
      document.getElementById('resetEmail').focus();
    }
    
    // Close modal
    function closeForgotPasswordModal() {
      forgotPasswordModal.style.display = 'none';
      document.getElementById('resetEmail').value = '';
      document.getElementById('resetEmailError').textContent = '';
      resetLoader.classList.remove('visible');
    }
    
    // Handle reset password link
    function sendPasswordReset() {
      const email = document.getElementById('resetEmail').value;
      const errorElement = document.getElementById('resetEmailError');
      
      resetLoader.classList.add('visible');
      
      if (!email) {
        errorElement.textContent = 'Email is required';
        resetLoader.classList.remove('visible');
        return;
      }
      
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorElement.textContent = 'Please enter a valid email address';
        resetLoader.classList.remove('visible');
        return;
      }
      
      // Simulate API call
      setTimeout(() => {
        resetLoader.classList.remove('visible');
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-message success';
        successMessage.textContent = `Password reset link sent to ${email}`;
        document.querySelector('.modal-content').appendChild(successMessage);
        
        // Remove the message after 3 seconds
        setTimeout(() => {
          successMessage.remove();
          forgotPasswordModal.style.display = 'none';
        }, 3000);
      }, 1500);
    }
    
    // Debounce function for scroll events
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
    
    // Initialize
    function init() {
      // Create cosmic background
      createCosmicBackground();
      
      // Initialize users
      initUsers();
      
      // Form event listeners
      signInToggle.addEventListener('click', () => toggleForm('signIn'));
      signUpToggle.addEventListener('click', () => toggleForm('signUp'));
      signInForm.addEventListener('submit', handleFormSubmit);
      signUpForm.addEventListener('submit', handleFormSubmit);
      switchToSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForm('signUp');
      });
      switchToSignIn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForm('signIn');
      });
      
      // Password visibility toggles
      document.getElementById('signInPasswordToggle').addEventListener('click', () => {
        togglePasswordVisibility('signInPassword', signInPasswordToggle);
      });
      document.getElementById('signUpPasswordToggle').addEventListener('click', () => {
        togglePasswordVisibility('signUpPassword', signUpPasswordToggle);
      });
      document.getElementById('signUpConfirmPasswordToggle').addEventListener('click', () => {
        togglePasswordVisibility('signUpConfirmPassword', signUpConfirmPasswordToggle);
      });
      
      // Password strength and match
      document.getElementById('signUpPassword').addEventListener('input', () => {
        updatePasswordStrength();
        checkPasswordMatch();
      });
      document.getElementById('signUpConfirmPassword').addEventListener('input', checkPasswordMatch);
      
      // Real-time validation
      document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('input', function() {
          if (this.classList.contains('input-error')) {
            this.classList.remove('input-error');
            this.removeAttribute('aria-invalid');
            const errorId = this.id + 'Error';
            document.getElementById(errorId).textContent = '';
          }
        });
      });
      
      // Social login buttons
      document.querySelectorAll('.social-btn.google').forEach(btn => {
        btn.addEventListener('click', () => handleSocialAuth('google'));
      });
      document.querySelectorAll('.social-btn.facebook').forEach(btn => {
        btn.addEventListener('click', () => handleSocialAuth('facebook'));
      });
      document.querySelectorAll('.social-btn.apple').forEach(btn => {
        btn.addEventListener('click', () => handleSocialAuth('apple'));
      });
      
      // Forgot password
      forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        handleForgotPassword();
      });
      
      // Modal controls
      closeModal.addEventListener('click', closeForgotPasswordModal);
      sendResetLink.addEventListener('click', sendPasswordReset);
      
      // Close modal when clicking outside
      window.addEventListener('click', (e) => {
        if (e.target === forgotPasswordModal) {
          closeForgotPasswordModal();
        }
        if (e.target === socialModal) {
          socialModal.style.display = 'none';
        }
      });
      
      // Close modal with Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (forgotPasswordModal.style.display === 'flex') {
            closeForgotPasswordModal();
          }
          if (socialModal.style.display === 'flex') {
            socialModal.style.display = 'none';
          }
        }
      });
      
      // Check for remembered user
      const rememberUser = localStorage.getItem('rememberUser');
      if (rememberUser === 'true') {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (currentUser.email) {
          document.getElementById('signInEmail').value = currentUser.email;
          document.getElementById('rememberMe').checked = true;
        }
      }
    }
    
    // Initialize on DOM load
    document.addEventListener('DOMContentLoaded', init);