// global.js - The FINAL and CORRECT Script

// ===================================================================
//  PART 1: THE LOGOUT FUNCTION (The Cleanup Crew)
// ===================================================================

function logout() {
    // Erase all user-specific data from the browser's memory
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('savedMessages');
    localStorage.removeItem('futureInboxFormData');

    // Show a confirmation pop-up and redirect
    Swal.fire({
        title: 'Logged Out!',
        text: 'You have been successfully logged out.',
        icon: 'success',
        background: '#0b1023',
        color: '#e0e0ff',
        confirmButtonColor: '#a66cff',
    }).then(() => {
        window.location.href = 'login.html';
    });
}

// ===================================================================
//  PART 2: THE NAVBAR UPDATE FUNCTION (The Button Changer)
// ===================================================================

function updateNavbar() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const signInButtons = document.querySelectorAll('.futureinbox-nav-sign-in');

    if (isLoggedIn) {
        signInButtons.forEach(button => {
            button.textContent = 'Logout';
            button.href = '#';
            button.setAttribute('aria-label', 'Logout');
            button.onclick = function(event) {
                event.preventDefault();
                logout();
            };
        });
    } else {
        signInButtons.forEach(button => {
            button.textContent = 'Sign In';
            button.href = 'login.html';
            button.setAttribute('aria-label', 'Sign In');
            button.onclick = null;
        });
    }
}

// ===================================================================
//  PART 3: YOUR WORKING NAVBAR SCRIPT
// ===================================================================

function initNavbar() {
    // DOM Elements from your working script
    const futureinboxHeader = document.getElementById('futureinbox-header');
    const futureinboxNavHamburger = document.getElementById('futureinbox-nav-hamburger');
    const futureinboxMobileMenu = document.getElementById('futureinbox-mobile-menu');
    const futureinboxMobileCloseMenu = document.getElementById('futureinbox-mobile-close-menu');
    const futureinboxMobileOverlay = document.getElementById('futureinbox-mobile-overlay');
    const futureinboxScrollBorder = document.getElementById('futureinbox-scroll-border');
    const futureinboxMobileDropdown = document.getElementById('futureinbox-mobile-dropdown');
    const futureinboxMobileDropdownBtn = futureinboxMobileDropdown ? futureinboxMobileDropdown.querySelector('.futureinbox-mobile-dropdown-btn') : null;
    const futureinboxNavDropdowns = document.querySelectorAll('.futureinbox-nav-dropdown');
    
    // State variable
    let futureinboxIsMobileMenuOpen = false;
    
    // Functions from your working script
    function toggleMobileMenu() {
        futureinboxIsMobileMenuOpen = !futureinboxIsMobileMenuOpen;
        if (futureinboxMobileMenu) futureinboxMobileMenu.classList.toggle('active');
        if (futureinboxMobileOverlay) futureinboxMobileOverlay.classList.toggle('active');
        if (futureinboxNavHamburger) futureinboxNavHamburger.setAttribute('aria-expanded', futureinboxIsMobileMenuOpen);
        document.body.style.overflow = futureinboxIsMobileMenuOpen ? 'hidden' : '';

        if (futureinboxIsMobileMenuOpen) {
            if (futureinboxMobileCloseMenu) futureinboxMobileCloseMenu.focus();
        } else {
            if (futureinboxNavHamburger) futureinboxNavHamburger.focus();
        }
    }
    
    function toggleMobileDropdown() {
        const isExpanded = futureinboxMobileDropdownBtn.getAttribute('aria-expanded') === 'true';
        futureinboxMobileDropdownBtn.setAttribute('aria-expanded', !isExpanded);
        futureinboxMobileDropdown.classList.toggle('active');
    }
    
    function handleDesktopDropdown(e) {
        const dropdown = e.currentTarget;
        const isActive = dropdown.classList.contains('active');
        
        futureinboxNavDropdowns.forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('active');
                if(d.querySelector('a')) d.querySelector('a').setAttribute('aria-expanded', 'false');
            }
        });
        
        dropdown.classList.toggle('active');
        if(dropdown.querySelector('a')) dropdown.querySelector('a').setAttribute('aria-expanded', !isActive);
    }
    
    function closeDropdownsOnClickOutside(e) {
        if (!e.target.closest('.futureinbox-nav-dropdown')) {
            futureinboxNavDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                if(dropdown.querySelector('a')) dropdown.querySelector('a').setAttribute('aria-expanded', 'false');
            });
        }
    }
    
    function handleKeyboardNavigation(e) {
        if (e.key === 'Escape') {
            futureinboxNavDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                if(dropdown.querySelector('a')) dropdown.querySelector('a').setAttribute('aria-expanded', 'false');
            });
            if (futureinboxIsMobileMenuOpen) {
                toggleMobileMenu();
            }
        }
    }
    
    function handleScroll() {
        if (futureinboxHeader) {
            if (window.scrollY > 50) {
                futureinboxHeader.classList.add('scrolled');
            } else {
                futureinboxHeader.classList.remove('scrolled');
            }
        }
      
        if (futureinboxScrollBorder) {
            const scrollPercentage = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
            futureinboxScrollBorder.style.transform = `scaleX(${scrollPercentage / 100})`;
            futureinboxScrollBorder.style.opacity = window.scrollY > 30 ? '1' : '0';
        }
    }
    
    function debounce(func, wait = 10) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }

    // Set initial state and add event listeners
    handleScroll();
    if (futureinboxNavHamburger) futureinboxNavHamburger.addEventListener('click', toggleMobileMenu);
    if (futureinboxMobileCloseMenu) futureinboxMobileCloseMenu.addEventListener('click', toggleMobileMenu);
    if (futureinboxMobileOverlay) futureinboxMobileOverlay.addEventListener('click', toggleMobileMenu);
    if (futureinboxMobileDropdownBtn) futureinboxMobileDropdownBtn.addEventListener('click', toggleMobileDropdown);
    
    document.addEventListener('click', closeDropdownsOnClickOutside);
    document.addEventListener('keydown', handleKeyboardNavigation);
    window.addEventListener('scroll', debounce(handleScroll));
      
    // **THIS IS THE CRITICAL PART FOR HOVER**
    futureinboxNavDropdowns.forEach(dropdown => {
        if (window.matchMedia("(hover: hover)").matches) {
            dropdown.addEventListener('mouseenter', handleDesktopDropdown);
        }
        dropdown.addEventListener('click', handleDesktopDropdown);
    });
      
    const mobileLinks = futureinboxMobileMenu ? futureinboxMobileMenu.querySelectorAll('a') : [];
    mobileLinks.forEach(link => {
        if (!link.classList.contains('futureinbox-mobile-dropdown-btn')) {
            link.addEventListener('click', toggleMobileMenu);
        }
    });
}

// ===================================================================
//  PART 4: THE MAIN DRIVER (Runs everything)
// ===================================================================

document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize all the navbar functionality (menus, scroll, etc.)
    initNavbar();
    
    // 2. Check login status and update the Sign In/Logout button.
    updateNavbar();
    
    // 3. This is our "smart" check for page-specific scripts.
    if (typeof initPage === 'function') {
        initPage();
    }
});