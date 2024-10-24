const TRASH_HOLD = 0.1;

document.addEventListener('DOMContentLoaded', () => {
    drawBatman();
});

function drawBatman() {
    const canvas = document.getElementById('batmanCanvas');
    const ctx = canvas.getContext('2d');

    // Определяем функции
    function f1(x, y) {
        return ((x / 7) ** 2 * Math.sqrt((Math.abs(Math.abs(x) - 3) / (Math.abs(x) - 3))) +
            (y / 3) ** 2 * Math.sqrt(Math.abs(y + 3 * Math.sqrt(33) / 7) / (y + 3 * Math.sqrt(33) / 7)) - 1);
    }

    function f2(x, y) {
        return (Math.abs(x / 2) - (3 * Math.sqrt(33) - 7) / 112 * x ** 2 - 3 +
            Math.sqrt(1 - (Math.abs(Math.abs(x) - 2) - 1) ** 2) - y);
    }

    function f3(x, y) {
        return (9 * Math.sqrt((Math.abs((Math.abs(x) - 1) * (Math.abs(x) - 0.75)) /
            ((1 - Math.abs(x)) * (Math.abs(x) - 0.75))) - 8 * Math.abs(x)) - y);
    }

    function f4(x, y) {
        return (3 * Math.abs(x) + 0.75 * Math.sqrt((Math.abs((Math.abs(x) - 0.75) * (Math.abs(x) - 0.5)) /
            ((0.75 - Math.abs(x)) * (Math.abs(x) - 0.5)))) - y);
    }

    function f5(x, y) {
        return (2.25 * Math.sqrt((Math.abs((x - 0.5) * (x + 0.5)) /
            ((0.5 - x) * (0.5 + x)))) - y);
    }

    function f6(x, y) {
        return (6 * Math.sqrt(10) / 7 + (1.5 - 0.5 * Math.abs(x)) *
            Math.sqrt(Math.abs(Math.abs(x) - 1) / (Math.abs(x) - 1)) -
            6 * Math.sqrt(10) / 14 * Math.sqrt(4 - (Math.abs(x) - 1) ** 2) - y);
    }
    function f7(x, y){
        return 9*Math.sqrt(Math.abs((Math.abs(x)-1)*(Math.abs(x)-0.75))/
        ((1-Math.abs(x))*(Math.abs(x)-0.75)))-8*Math.abs(x)-y;
    }
    function f8(x){
        return 3*Math.abs(x)+0.75*Math.sqrt((Math.abs((Math.abs(x)-0.75)*(Math.abs(x)-0.5))/((0.75 - Math.abs(x))*(Math.abs(x)-0.5))));
    }
    // Генерация точек
    const drawCurve = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        const scale= parseFloat(canvas.getAttribute("data-custom"));

        const step = 0.025;

        let firstPoint = true;
        let startX, startY;

        for (let x = -10; x <= 10; x += step) {
            for (let y = -10; y <= 10; y += step) {
                if (
                    Math.abs(f1(x, y)) <= TRASH_HOLD ||
                    Math.abs(f2(x, y)) <= TRASH_HOLD ||
                    Math.abs(f3(x, y)) <= TRASH_HOLD ||
                    Math.abs(f4(x, y)) <= TRASH_HOLD ||
                    Math.abs(f5(x, y)) <= TRASH_HOLD ||
                    Math.abs(f6(x, y)) <= TRASH_HOLD ||
                    Math.abs(f7(x, y)) <= TRASH_HOLD
                ) {
                    const xPosition = (x*7.6*scale+canvas.width/2);
                    const yPosition = (canvas.height/2 - y*9*scale);
                    if (firstPoint) {
                        ctx.moveTo(xPosition, yPosition);
                        firstPoint = false;
                    } else {
                        ctx.lineTo(xPosition, yPosition);
                    }
                }
            }
        }

        ctx.closePath();
        ctx.strokeStyle = 'rgb(106, 147, 209)';
        ctx.stroke();
    };

    drawCurve();
}