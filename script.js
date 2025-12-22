document.addEventListener('DOMContentLoaded', function() {
    // Form validation for login page
    const loginForm = document.querySelector('form');
    if (loginForm && window.location.pathname.includes('index.html')) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate successful login, needs to be modified if not saved in db
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('userEmail', email);
            window.location.href = '../index_login/home_page.html';
            //commented below after referencing my home page - Nouran :)
    // Add click handlers for job cards (if they don't have inner links)
    // const jobCards = document.querySelectorAll('.bg-white.rounded-xl.shadow-md.cursor-pointer');
    // jobCards.forEach(card => {
    //     if (!card.querySelector('a')) {
    //         card.addEventListener('click', function() {
    //             const title = this.querySelector('h2').textContent;
    //             console.log('Clicked job:', title);
    //             // In production, redirect to specific job page
    //         });
    //     }
    // });
});
}
    
    // Form validation for signup page
    const signupForm = document.querySelector('form');
    if (signupForm && window.location.pathname.includes('signup.html')) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!firstName || !lastName || !email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Save user data to localStorage (simulating database)
            const userData = {
                firstName,
                lastName,
                email,
                password
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            
            alert('Account created successfully! Please sign in.');
            window.location.href = 'index.html';
        });
    }
    
    // Check authentication for protected pages
    const protectedPages = ['home.html', 'job.html', 'profile.html'];
    if (protectedPages.some(page => window.location.pathname.includes(page))) {
        const isLoggedIn = localStorage.getItem('loggedIn');
        if (!isLoggedIn) {
            window.location.href = 'index.html';
        }
    }
    // Simulate job application
    const applyButtons = document.querySelectorAll('button:contains("Apply Now")');
    applyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Application submitted successfully!');
            // In a real app, this would send data to your backend
        });
    });
    
    // Profile form save
const profileForm = document.querySelector('form');
    if (profileForm && window.location.pathname.includes('profile.html')) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Profile updated successfully!');
        });
    }
});