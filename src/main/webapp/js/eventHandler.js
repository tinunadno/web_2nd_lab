//TODO insert id and event name

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('responseButton').addEventListener('click', function() {
        const form = document.getElementById('userInputForm');
        const formData = new FormData(form);

        const xValue = formData.get('xValue');
        const yValue = formData.get('yValue');

        handleInput(xValue, yValue);
    });

    // Добавляем обработчик события 'change' для каждой радиокнопки
    const radios = document.querySelectorAll('input[name="radius"]');
    const graphicPlotContainer = document.getElementById('graphicPlot');
    const canvas = document.getElementById('batmanCanvas');
    radios.forEach(radio => {
    console.log("asd")
        radio.addEventListener('change', () => {
        console.log("asd1")
            // Проверяем, если радиокнопка выбрана
            if (radio.checked) {
                canvas.setAttribute("data-custom", radio.value);
                drawBatman();
            }
        });
    });
});

