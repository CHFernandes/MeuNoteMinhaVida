$(document).ready(function () {
    $.ajax({
        type: "GET",
        datatype: "json",
        url: "../php/listagem.php",
        success: function (lista) {
            
            var stringster = JSON.parse(lista);

            $("#lista").html("");
            for (var i = stringster.length - 1; i >= 0; i--) {
                $("#lista").append(
                    '<tr><td>' + stringster[i].numeracao + '</td><td>'+ stringster[i].descricao + '</td><td>'+ stringster[i].sala + '</td><td>' + stringster[i].bloco + '</td><td>' + stringster[i].datainicio + '</td><td>' + stringster[i].datafim + '</td><td>' + stringster[i].status + '</td></tr>');
            }
        }
    });
});