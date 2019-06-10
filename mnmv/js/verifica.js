$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "../php/verifica.php",
        success: function (retorno) {
            echo (retorno);
            if (retorno == 0) {
                window.location = '../index.html';
            }
        }
    });
});