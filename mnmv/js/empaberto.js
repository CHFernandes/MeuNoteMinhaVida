$(document).ready(function () {
    $.ajax({
        type: "GET",
        datatype: "json",
        url: "../php/emptotal.php",
        success: function (lista) {

            var stringster = JSON.parse(lista);

            $("#lista").html("");
            for (var i = stringster.length - 1; i >= 0; i--) {
                if (stringster[i].status == 1) {
                    $("#lista").append(
                        '<tr><td>' + stringster[i].academico + '</td><td>' + stringster[i].numeracao + '</td><td>' + stringster[i].tipo + '</td><td>' + stringster[i].datainicio + '</td><td>' + stringster[i].datafim + '</td></tr>');
                }
            }
        }
    });
});