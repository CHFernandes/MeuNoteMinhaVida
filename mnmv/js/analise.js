$(document).ready(function () {
    $("#manu").click(function () {
        $.ajax({
            type: "POST",
            url: "../php/manutencao.php",
           data: {
                nome: $("#nome").val(),
                rel: $("#rel").val()
            },
            success: function (retorno) {
                
                if (retorno == '1') {
                    alert("Equipamento enviado para manutenção");
                    window.location = 'niaa.html';
                } else {
                    alert("Erro");
                }
            }
        });
    });
    $("#send").click(function () {
        $.ajax({
            type: "POST",
            url: "../php/relatorio.php",
            data: {
                nome: $("#nome").val(),
                rel: $("#rel").val()
            },
            success: function (retorno) {
                
                if (retorno == '1') {
                    alert("Realtório enviado");
                    window.location = 'niaa.html';
                } else {
                    alert("Erro");
                }
            }
        });
    });
});