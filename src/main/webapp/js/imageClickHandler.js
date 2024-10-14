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
        const x = (event.clientX - rect.left-95);  // X position in pixels
        const y = (event.clientY - rect.top-95);   // Y position in pixels



        // Set the point's position considering its dimensions
        point.style.left = `${x+15}px`;
        point.style.top = `${y+15}px`;

        handleInput((x*10)/560-5, (y*10/560-5)*(-1));
    });
});