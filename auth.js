// auth.js - The FINAL, Corrected Gatekeeper Script

// This line tells the browser: "Wait until the entire HTML page is loaded and ready..."
document.addEventListener('DOMContentLoaded', function() {

    // "...then run all the code inside here."
    
    // Check if the 'isLoggedIn' flag is NOT in localStorage
    if (!localStorage.getItem('isLoggedIn')) {
        
        // Now that the page is ready, SweetAlert can find the <body> and will work perfectly.
        Swal.fire({
            title: 'Access Denied',
            text: 'You must be logged in to view this page. Redirecting to login...',
            icon: 'warning',
            
            // Custom styles to match your FutureInbox theme
            background: '#0b1023',
            color: '#e0e0ff',
            confirmButtonText: 'Go to Login',
            confirmButtonColor: '#a66cff',
            
            allowOutsideClick: false,
            allowEscapeKey: false,

        }).then((result) => {
            // This code runs AFTER the user clicks the "Go to Login" button.
            if (result.isConfirmed) {
                window.location.href = 'login.html';
            }
        });

    }

});