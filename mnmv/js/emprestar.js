$(document).ready(function () {
    $("#enviar").click(function () {
        
        var bloco = $('.bloco').val();
        
        var sala = $('.sala').val();
        
        var aulas = $('.aulas').val();
        
        var equip = new Array();

        $('.equip').each(function(){
	       equip.push($(this).val());
        });
        
        var tipos = new Array();
        
        $('.tipo').each(function(){
            tipos.push($(this).val());
        });
        
        $.ajax({
            type: "POST",
            url: "../php/emprestar.php",
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