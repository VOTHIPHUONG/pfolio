// JavaScript code to add interactivity or dynamic features
document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Additional JavaScript functionality can be added here
    console.log("Portfolio page loaded.");
});
