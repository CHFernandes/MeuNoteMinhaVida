$(document).ready(function () {
    $("#enviar").click(function () {
        $.ajax({
            type: "POST",
            url: "../php/baixa.php",
           data: {
                num: $("#num").val(),
                tipo: $(".tipo").val()
            },
            success: function (retorno) {
                
                if (retorno == '1') {
                    alert("Baixa realizada com sucesso");
                    window.location = 'niaa.html';
                } else {
                    alert("Erro");
                }
            }
        });
    });
});