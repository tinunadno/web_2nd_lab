sendRequest(){
    $('#userInputForm').submit(function(e) {
        e.preventDefault(); // Отменяем стандартное поведение отправки формы
        console.log('Form submitted');

        // Собираем данные
        var xValue = $('#user-input-selectBox').val();
        var yValue = $('#user-input-textField').val();
        var radius = $('input[name="radius"]:checked').val();
        console.log('Data:', { xValue, yValue, radius });

        // Отправляем AJAX-запрос
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
                $('#result').html(response); // Вставляем ответ в элемент с id="result"
            },
            error: function(xhr, status, error) {
                console.error(error);
                $('#result').html('<p>Error occurred while processing your request.</p>');
            }
        });
    });
});