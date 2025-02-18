document.addEventListener('DOMContentLoaded', () => {
	// Create a div for the flash effect
	const flashElement = document.createElement('div');
flashElement.id = 'camera-flash';
document.body.appendChild(flashElement);

  // Load the camera shutter sound
const flashSound = new Audio('resources/sounds/cam-shutter.mp3');

  // Listen for clicks on anchor tags (<a>)
const links = document.querySelectorAll('a'); // Select all anchor tags
links.forEach(link => {
	link.addEventListener('click', (event) => {
	event.preventDefault(); // Prevent the default link behavior (optional)
flashSound.play(); // Play the sound
flashElement.style.animation = 'flash 0.5s ease-out'; // Trigger the flash effect

      // Remove the flash element after the animation ends
flashElement.addEventListener('animationend', () => {
	flashElement.remove();
});

      // Optional: Navigate to the link's href after the flash effect
setTimeout(() => {
	window.location.href = link.href;
}, 500); // Wait for the flash animation to finish (0.5s)
	});
	});
	});