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
                if (retorno == '2') {
                    window.location = 'html/niaa.html';
                } else {
                    if (retorno == '1'){
                        window.location = 'html/menu.html';
                    }else if(retorno == '3'){
                        alert("Usuário bloqueado por tempo indeterminado, favor entrar em contato com o NIAA");
                    }else{
                        alert("Usuário ou senha incorretos");
                    }
                }
            }
        });
    });
});