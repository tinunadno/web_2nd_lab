$(document).ready(function() {
        console.log("asd")
        const lastResponse = sessionStorage.getItem('responseData');
        console.log(lastResponse);
        const response = JSON.parse(lastResponse);
        insertJSON(response);
});