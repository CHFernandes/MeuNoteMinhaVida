$(document).ready(function(){
    $(".cancelar").click(function(e){
        e.preventDefault;
        var nome = $(this).closest('tr').find('td[data-nome]').data('nome');
        var numeracao = $(this).closest('tr').find('td[data-num]').data('num');
        var tipo = $(this).closest('tr').find('td[data-desc]').data('desc');
        var sala = $(this).closest('tr').find('td[data-sala]').data('sala');
        var bloco = $(this).closest('tr').find('td[data-bloco]').data('bloco');
        var inicio = $(this).closest('tr').find('td[data-inicio]').data('inicio');
        var fim = $(this).closest('tr').find('td[data-fim]').data('fim');
        
        $.ajax({
            type:"POST",
            url:"../php/cancelar.php",
            data:{
                nome: nome,
                num: numeracao,
                tipo: tipo,
                sala: sala,
                bloco: bloco,
                inicio: inicio,
                fim: fim
            },
            success: function(retorno){
                if (retorno == '1') {
                    alert("Reserva cancelada com sucesso");
                    window.location = 'niaa.html';
                } else {
                    alert("Erro");
                }
            }
        });
    });
});