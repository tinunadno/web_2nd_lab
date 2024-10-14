document.addEventListener('DOMContentLoaded', function() {
    const interactiveImage = document.getElementById('interactive-image');
    const point = document.getElementById('point');
    const pointWidth = 4; // width of the point
    const pointHeight = 4; // height of the point

    // Add click event listener
    interactiveImage.addEventListener('click', function(event) {
        // Get the bounding rectangle of the image
        const rect = interactiveImage.getBoundingClientRect();

        // Calculate click position relative to the image
        const x = (event.clientX - rect.left);  // X position in pixels
        const y = (event.clientY - rect.top);   // Y position in pixels

        // Log the position
        console.log('Click position:', { x, y });

        // Set the point's position considering its dimensions
        point.style.left = `${x-80}px`;
        point.style.top = `${y-80}px`;

        handleInput((x/rect.width-0.5)*10, (y/rect.height-0.5)*(-10))
    });
});