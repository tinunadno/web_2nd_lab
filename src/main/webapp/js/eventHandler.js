document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('responseButton').addEventListener('click', function() {
        console.log("ama here");
        const form = document.getElementById('userInputForm');
        const formData = new FormData(form);

        const radiusValue = formData.get('radius');

        const xValue = formData.get('xValue');
        const yValue = formData.get('yValue');

        const warningField=document.getElementById("result");

        //TODO add null radioButton validating
        if(isNaN(parseInt(yValue))){

            warningField.textContent="y must be an Integer";
            warningField.style.color='red';
        }else if(parseInt(yValue) < -3 || parseInt(yValue) > 3){
            warningField.textContent="y must be in [-3; 3]";
            warningField.style.color='red';
        }else {
            sendRequest(xValue, yValue, radiusValue);
        }
    });
});