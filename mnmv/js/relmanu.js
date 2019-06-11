$(document).ready(function () {
    $.ajax({
        type: "GET",
        datatype: "json",
        url: "../php/relmanu.php",
        success: function (lista) {
            var stringster = JSON.parse(lista);

            $("#lista").html("");
            for (var i = stringster.length - 1; i >= 0; i--) {
                    $("#lista").append(
                        '<tr><td>' + stringster[i].relator + '</td><td>' + stringster[i].horario + '</td><td>' + stringster[i].descricao + '</td><td>' + stringster[i].numeracao + '</td><td>' + stringster[i].tipo + '</td></tr>');
            }
        }
    });
});