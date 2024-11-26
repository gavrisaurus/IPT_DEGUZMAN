// Select all elements with classes "box2" to "box6"
const boxes = document.querySelectorAll('.box2, .box3, .box4, .box5, .box6, .box7');

// Add click event listeners to each box
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    // If the box is already in the "pop-up" state, revert it
    if (box.style.position === 'fixed') {
      box.style.transform = 'scale(1)'; // Revert to original size
      box.style.position = 'static'; // Revert to original positioning
      box.style.top = '';
      box.style.left = '';
      box.style.transition = 'transform 0.3s ease';
      box.style.zIndex = ''; // Reset z-index to default
    } else {
      // Apply the pop-up effect
      box.style.transform = 'scale(1.2)'; // Enlarge the element
      box.style.position = 'fixed'; // Fix the position to the screen
      box.style.top = '50%'; // Center vertically
      box.style.left = '50%'; // Center horizontally
      box.style.transform += ' translate(-50%, -50%)'; // Adjust for exact center
      box.style.transition = 'transform 0.3s ease'; // Smooth animation
      box.style.zIndex = '9999'; // Bring the clicked box to the front
    }
  });
});
