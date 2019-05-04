$(document).ready(function () {
    $("#enviarn").click(function () {
        $.ajax({
            type: "POST",
            url: "../php/emprestar.php",
            data: {
                equipamento: $("#note").val(),
                tipo: "N"
            },
            success: function (retorno) {
                if (retorno == '1') {
                    alert("Empréstimo realizado com sucesso");
                    window.location = 'menu.html';
                } else {
                    alert("Índice de notebook inexistente");
                }
            }
        });
    });
    $("#enviarf").click(function () {
        $.ajax({
            type: "POST",
            url: "../php/emprestar.php",
            data: {
                equipamento: $("#fonte").val(),
                tipo: "F"
            },
            success: function (retorno) {
                if (retorno == '1') {
                    alert("Empréstimo realizado com sucesso");
                    window.location = 'menu.html';
                } else {
                    alert("Índice de notebook inexistente");
                }
            }
        });
    });
    $("#enviart").click(function () {
        $.ajax({
            type: "POST",
            url: "../php/emprestar.php",
            data: {
                equipamento: $("#torre").val(),
                tipo: "T"
            },
            success: function (retorno) {
                if (retorno == '1') {
                    alert("Empréstimo realizado com sucesso");
                    window.location = 'menu.html';
                } else {
                    alert("Índice de notebook inexistente");
                }
            }
        });
    });
    $("#enviarc").click(function () {
        $.ajax({
            type: "POST",
            url: "../php/emprestar.php",
            data: {
                equipamento: $("#carrinho").val(),
                tipo: "C"
            },
            success: function (retorno) {
                if (retorno == '1') {
                    alert("Empréstimo realizado com sucesso");
                    window.location = 'menu.html';
                } else {
                    alert("Índice de notebook inexistente");
                }
            }
        });
    });
});