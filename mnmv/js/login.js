$(document).ready(function () {
    $("#botao").click(function () {
        $.ajax({
            type: "POST",
            url: "php/login.php",
            data: {
                matricula: $("#matricula").val(),
                senha: $("#senha").val()
            },
            success: function (retorno) {
                if (retorno == '1') {
                    window.location = 'html/menu.html';
                } else {
                    alert("Usuário ou senha incorretos");
                }
            }
        });
    });
});