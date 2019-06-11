$(document).ready(function(){
    $("body").on('change', '.tipo', function () {
        
        var tipo = $(this).val();
        $.ajax({
                type: "GET",
                datatype: "json",
                async: false,
                url: "../php/equipamento.php",
                success: function (lista) {
                    var stringster = JSON.parse(lista);

                    $(".equip").html("");
                    for (var i = stringster.length - 1; i >= 0; i--) {

                        if (stringster[i].status == '3') {
                                if (stringster[i].tipo == tipo) {
                                    $(".equip").append(
                                        "<option>" + stringster[i].numeracao + "</option>");
                                }
                        }

                    }
                }
            });
        });
   $("#enviar").click(function () {
        $.ajax({
            type: "POST",
            url: "../php/recieve.php",
           data: {
                nome: $("#nome").val(),
                equip: $(".equip").val(),
                tipo: $(".tipo").val(),
                rel: $("#rel").val()
            },
            success: function (retorno) {
                
                alert(retorno);
                
                if (retorno == '1') {
                    alert("Equipamento retirado da manutenção");
                    window.location = 'niaa.html';
                } else {
                    alert("Erro");
                }
            }
        });
    }); 
});