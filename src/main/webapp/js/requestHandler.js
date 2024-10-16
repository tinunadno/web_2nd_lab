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
            // Check if response is well-formed
        if (response && typeof response === 'object' && response!="") {
            if (response.table !== null) {
                $('#tableBody').html(response.table);
            }
            if (response.image !== null) {
                $('#graphicPlot').html(response.image);
            }
            if (response.result !== null) {
                $('#result').html(response.result);
            }
            if (response.points !== null) {
                $('#points').html(response.points);
            }
        }

    },
    error: function(xhr, status, error) {
        console.error('AJAX Error:', error);
        $('#result').html('<p>Error occurred while processing your request.</p>');
    }
});

}