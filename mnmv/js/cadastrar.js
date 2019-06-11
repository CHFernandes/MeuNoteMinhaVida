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

                $("#enviar").click(function() {
                vazio ='';
                if(vazio == $("#bloco").val()){
                    $("#num").addClass("erro");
                }else{
                    $("#bloco").removeClass("erro");
                }
                if(vazio == $("#num").val()){
                    $("#num").addClass("erro");
                }else{
                    $("#num").removeClass("erro");
                }
                if(vazio == $("#tipo").val()){
                    $("#tipo").addClass("erro");
                }else{
                    $("#tipo").removeClass("erro");
                }

        if ($("#tipo").hasClass("erro") == false && $("#bloco").hasClass("erro") == false && $("#num").hasClass("erro") == false) {
            alert('o bloco é  ' + $("#bloco").val())
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

                }else{
                    alert("preencha todos");
                }
                });
            });