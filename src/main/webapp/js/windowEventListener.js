window.onload = loadProcess();

function loadProcess(){
    const lastResponse = sessionStorage.getItem('responseData');
    const response = JSON.parse(storedResponse);
    insertJSON(response);
}