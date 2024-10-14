document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('responseButton').addEventListener('click', function() {
        console.log("ama here");
        const form = document.getElementById('userInputForm');
        const formData = new FormData(form);

        const radiusValue = formData.get('radius');

        const xValue = formData.get('xValue');
        const yValue = formData.get('yValue');

        //TODO add validating inserted data

        sendRequest(xValue, yValue, radiusValue);
    });
});