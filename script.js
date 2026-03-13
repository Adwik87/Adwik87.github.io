// Select all the project cards on the page
const cards = document.querySelectorAll('.card');

// Loop through each card to add the interactive effects
cards.forEach(card => {
    
    // When the mouse moves over the card, calculate the tilt
    card.addEventListener('mousemove', (event) => {
        // Get the size and position of the card
        const rect = card.getBoundingClientRect();
        
        // Find exactly where the mouse is inside the card
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Find the center of the card
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate how much to tilt based on mouse distance from the center
        // The '10' controls how extreme the tilt is. 
        const rotateX = ((y - centerY) / centerY) * -10; 
        const rotateY = ((x - centerX) / centerX) * 10;

        // Apply the 3D tilt and a slight zoom effect
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    // When the mouse leaves the card, snap it gently back to normal
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});