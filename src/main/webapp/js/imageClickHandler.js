document.addEventListener('DOMContentLoaded', function() {
    const interactiveImage = document.getElementById('interactive-image');

    // Add click event listener
    interactiveImage.addEventListener('click', function(event) {
        // Get the bounding rectangle of the image
        const rect = interactiveImage.getBoundingClientRect();

        // Calculate click position relative to the image
        const x = (event.clientX - rect.left) / rect.width;  // X position from 0 to 1
        const y = (event.clientY - rect.top) / rect.height;  // Y position from 0 to 1

        // Log the position
        console.log('Click position:', { x, y });

        // Optionally, display the coordinates in the coordinates div
        //const coordinatesDiv = document.getElementById('coordinates');
        //coordinatesDiv.innerHTML = `Coordinates: (${x.toFixed(2)}, ${y.toFixed(2)})`;
    });
});