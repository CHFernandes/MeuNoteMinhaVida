$(document).ready(function () {
    $.ajax({
        type: "GET",
        datatype: "json",
        url: "../php/emptotal.php", 
        async: false,
        success: function (lista) {
            
            var stringster = JSON.parse(lista);

            $("#lista").html("");
            for (var i = stringster.length - 1; i >= 0; i--) {
                if(stringster[i].status == 2)
                $("#lista").append(
                    '<tr><td data-nome = "'+ stringster[i].academico +'">' + stringster[i].academico + '</td><td data-num = "'+ stringster[i].numeracao +'">' + stringster[i].numeracao + '</td><td data-desc = "'+ stringster[i].descricao +'">'+ stringster[i].descricao + '</td><td data-sala = "'+ stringster[i].sala +'">'+ stringster[i].sala + '</td><td data-bloco = "'+ stringster[i].bloco +'">' + stringster[i].bloco + '</td><td data-inicio = "'+ stringster[i].datainicio +'">' + stringster[i].datainicio + '</td><td data-fim = "'+ stringster[i].datafim +'">' + stringster[i].datafim + '</td><td><button class="enviar">Enviar</button></td><td><button class="Cancelar">Cancelar</button></td></tr>');
            }
        }
    });
});