function sendRequest(xValue, yValue, radius) {
    // Log the data being sent
    console.log('Data:', { xValue, yValue, radius });

    // Send AJAX request
    $.ajax({
        type: 'POST',
        url: 'ControllerServlet',
        data: {
            xValue: xValue,
            yValue: yValue,
            radius: radius
        },
        success: function(response) {
            console.log('Response:', response);
            //$('#result').html(response); // Insert response into the element with id="result"
            $('#tableBody').html(response);
        },
        error: function(xhr, status, error) {
            console.error(error);
            $('#result').html('<p>Error occurred while processing your request.</p>');
        }
    });
}