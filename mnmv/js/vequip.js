$(document).ready(function () {
    $.ajax({
        type: "GET",
        datatype: "json",
        url: "../php/equipamento.php",
        success: function (lista) {
            
            var stringster = JSON.parse(lista);

            $("#lista").html("");
            for (var i = stringster.length - 1; i >= 0; i--) {
                $("#lista").append(
                    '<tr><td>' + stringster[i].numeracao + '</td><td>'+ stringster[i].tipo + '</td><td>'+ stringster[i].status + '</td></tr>');
            }
        }
    });
});