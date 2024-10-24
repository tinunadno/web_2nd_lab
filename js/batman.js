function drawBatmanSign(canvasId, scale) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    // Set the canvas size
    canvas.width = 400 * scale;
    canvas.height = 200 * scale;

    // Batman logo path
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(100 * scale, 150 * scale);
    ctx.bezierCurveTo(50 * scale, 50 * scale, 150 * scale, 50 * scale, 100 * scale, 150 * scale);
    ctx.bezierCurveTo(120 * scale, 130 * scale, 90 * scale, 130 * scale, 100 * scale, 100 * scale);
    ctx.bezierCurveTo(70 * scale, 80 * scale, 130 * scale, 80 * scale, 100 * scale, 50 * scale);
    ctx.bezierCurveTo(200 * scale, 50 * scale, 150 * scale, 80 * scale, 100 * scale, 100 * scale);
    ctx.bezierCurveTo(110 * scale, 130 * scale, 80 * scale, 130 * scale, 100 * scale, 150 * scale);
    ctx.closePath();
    ctx.fill();
}

// Call the function to draw the Batman logo on the canvas
drawBatmanSign('batmanCanvas', 0.5);