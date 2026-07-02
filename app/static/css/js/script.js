// Select all <section> elements on the page
const sections = document.querySelectorAll("section");

// Create an IntersectionObserver to watch when sections enter the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Check if the section is currently visible in the viewport
        if (entry.isIntersecting) {
            // Fade the section in
            entry.target.style.opacity = 1;
            // Slide the section up into its original position
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 }); // Trigger when 20% of the section is visible

// Apply initial hidden state to each section and start observing it
sections.forEach((section) => {
    section.style.opacity = 0;                    // Start invisible
    section.style.transform = "translateY(30px)"; // Start slightly below final position
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"; // Smooth animation
    observer.observe(section); // Watch this section for visibility changes
});