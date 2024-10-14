function handleInput(xValue, yValue){
    const form = document.getElementById('userInputForm');
    const formData = new FormData(form);

    const radiusValue = formData.get('radius');
    const warningField=document.getElementById("result");

    //TODO add null radioButton validating
    if(isNaN(parseFloat(yValue))){

        warningField.textContent="y must be an Integer";
        warningField.style.color='red';
    }else if(parseFloat(yValue) < -3 || parseFloat(yValue) > 3){
        warningField.textContent="y must be in [-3; 3]";
        warningField.style.color='red';

    }else {
        sendRequest(xValue, yValue, radiusValue);
    }
}