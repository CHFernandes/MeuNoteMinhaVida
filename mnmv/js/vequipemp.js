$(document).ready(function () {
    $.ajax({
        type: "GET",
        datatype: "json",
        url: "../php/vequip.php",
        success: function (lista) {

            var stringster = JSON.parse(lista);

            $("#lista").html("");
            for (var i = stringster.length - 1; i >= 0; i--) {
                if (stringster[i].status == 1) {
                    $("#lista").append(
                        '<tr><td>' + stringster[i].numeracao + '</td><td>' + stringster[i].tipo + '</td></tr>');
                }
            }
        }
    });
});