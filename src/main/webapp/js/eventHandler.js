document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('responseButton').addEventListener('click', function() {
        const form = document.getElementById('userInputForm');
        const formData = new FormData(form);

        const xValue = formData.get('xValue');
        const yValue = formData.get('yValue');



        handleInput(xValue, yValue);
    });
});