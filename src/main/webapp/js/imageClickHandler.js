document.addEventListener('DOMContentLoaded', function() {
    const interactiveImage = document.getElementById('interactive-image');
//    const point = document.getElementById('point');

    // Add click event listener
    interactiveImage.addEventListener('click', function(event) {
        // Get the bounding rectangle of the image
        const rect = interactiveImage.getBoundingClientRect();

        // Calculate click position relative to the image
        const x = (event.clientX - rect.left-95);  // X position in pixels
        const y = (event.clientY - rect.top-95);   // Y position in pixels

        handleInput((x*10)/560-5, (y*10/560-5)*(-1));
    });
});