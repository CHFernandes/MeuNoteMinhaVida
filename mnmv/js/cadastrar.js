$(document).ready(function () {
    $("#enviar").click(function () {
        $.ajax({
            type: "POST",
            url: "../php/cadastrar.php",
           data: {
                num: $("#num").val(),
                tipo: $("#tipo").val()
            },
            success: function (retorno) {
                if (retorno == '1') {
                    alert("Cadastro realizado com sucesso");
                    window.location = 'niaa.html';
                } else {
                    alert("Índice para esse tipo de equipamento já existente");
                }
            }
        });
    });
});