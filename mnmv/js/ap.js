$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "../php/ap.php",
        success: function (retorno) {
            if (retorno == 1) {
                $('.esq').append('<tr><td><a href="reservar.html"><button class="botoes">Reservar Equipamentos</button></a></td></tr>');
            }
        }
    });
});