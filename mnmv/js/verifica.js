$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "../php/verifica.php",
        async: false,
        success: function (retorno) {
            if (retorno == 0) {
                window.location = '../index.html';
            }
        }
    });
});