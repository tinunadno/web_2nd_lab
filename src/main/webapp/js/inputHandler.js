function handleInput(xValue, yValue){
//    const point = document.getElementById('point');
    const form = document.getElementById('userInputForm');
    const formData = new FormData(form);

    const radiusValue = formData.get('radius');
    const warningField=document.getElementById("result");

    x=parseFloat(xValue)
    y=parseFloat(yValue)

    //TODO add null radioButton validating
    if(isNaN(parseFloat(yValue))){
        warningField.textContent="y must be an Integer";
        warningField.style.color='red';
    }else if(y < -3 || y > 3){
        warningField.textContent="y must be in [-3; 3]";
        warningField.style.color='red';
    }else {
//        point.style.left = `${((x+5)*56)+15}px`;
//        point.style.top = `${((y*(-1)+5)*56)+15}px`;
        sendRequest(xValue, yValue, radiusValue);
    }
}