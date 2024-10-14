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
        dataType: 'json', // Expect a JSON response
        success: function(response) {
            console.log('Response:', response);

            $('#tableBody').html(response.table);

            $('#graphicPlot').html(response.image);

            $('#result').html(response.result);
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', error);
            $('#result').html('<p>Error occurred while processing your request.</p>');
        }
    });
}
