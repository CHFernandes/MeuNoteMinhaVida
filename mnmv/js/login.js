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
                alert(retorno);
                if (retorno == '2') {
                    window.location = 'html/niaa.html';
                } else {
                    if (retorno == '1'){
                        window.location = 'html/menu.html';
                    }else{
                        alert("Usuário ou senha incorretos");
                    }
                }
            }
        });
    });
});