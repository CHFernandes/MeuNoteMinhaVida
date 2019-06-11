$(document).ready(function () {
      $.ajax({
                type: "GET",
                datatype: "json",
                async: false,
                url: "../php/bloco.php",
                success: function (result) {
                    var convertido = JSON.parse(result);
                    $("#bloco").html("");
                    $("#bloco").append("<option></option>");
                    for (var i = 0; i < convertido.length; i++) {
                        $("#bloco").append("<option>" + convertido[i].numero + "</option>");
                    }
                }
            });

                $("#enviar").click(function () {
        if(!($("#bloco").val() =='') $$ !($("#num").val()=='') $$ !($("#tipo").val()=='')){

                        $.ajax({
                        type: "POST",
                        url: "../php/cadastrar.php",
                        data: {
                            num: $("#num").val(),
                            tipo: $("#tipo").val(),
                            bloco: $("#bloco").val()
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
                } else {alert("insira alguma coisa por favor");
            }
                });
            });