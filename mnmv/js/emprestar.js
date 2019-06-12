$(document).ready(function () {
    $("#enviar").click(function () {
        
        var bloco = $('.bloco').val();
        
        var sala = $('.sala').val();
        
        var aulas = $('.Aulas').val();
        
        var equip = new Array();

        $('.equip').each(function(){
	       equip.push($(this).val());
        });
        
        var tipos = new Array();
        
        $.ajax({
            type: "GET",
            url: "../php/ap.php",
            async: false,
            success: function (retorno) {
                if (retorno == 1) {
                    $('.tipo').each(function () {
                        tipos.push($(this).val());
                    });
                } else{
                    tipos.push("N");
                    tipos.push("F");
                }
            }
        });
        
        $.ajax({
            type: "POST",
            url: "../php/emprestar.php",
            async: false,
            data: {
                aulas: aulas,
                bloco: bloco,
                sala: sala,
                equipamento: equip,
                tipo: tipos
            },
            success: function (retorno) {
                
                if (retorno == '1') {
                    alert("Empréstimo realizado com sucesso");
                    window.location = 'menu.html';
                } else {
                    alert("Índice de equipamento inexistente");
                }
            }
        });
    }); 
});
