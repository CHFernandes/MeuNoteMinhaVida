$(document).ready(function () {
    $.ajax({
        type: "GET",
        datatype: "json",
        url: "../php/emptotal.php",
        success: function (lista) {
            
            var stringster = JSON.parse(lista);

            $("#lista").html("");
            var o = 0;
            for (var i = stringster.length - 1; i >= 0; i--) {
                if(stringster[i].status == 2)
                $("#lista").append(
                    '<tr name="'+o+'"><td>' + stringster[i].academico + '</td><td>' + stringster[i].numeracao + '</td><td>'+ stringster[i].descricao + '</td><td>'+ stringster[i].sala + '</td><td>' + stringster[i].bloco + '</td><td>' + stringster[i].datainicio + '</td><td>' + stringster[i].datafim + '</td><td><button name="'+o+'" class="enviar">Enviar</button></td><td><button id='+o+' class="Cancelar">Cancelar</button></td></tr>');
                o = o + 1;
            }
            
             $('head').append('<script type="text/javascript" src="../js/sendreserva.js"></script>');
        }
    });
});