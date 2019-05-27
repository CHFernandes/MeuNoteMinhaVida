$(document).ready(function () {
    $.ajax({
        type: "GET",
        datatype: "json",
        url: "../php/equipamento.php",
        success: function (lista) {

            var stringster = JSON.parse(lista);
            $(".equip").html("");
            for (var i = stringster.length - 1; i >= 0; i--) {
                if (stringster[i].status == '0') {
                    if (stringster[i].tipo == "N") {
                        $(".equip[name = 0]").append(
                            "<option>" + stringster[i].numeracao + "</option>");
                    }
                    if (stringster[i].tipo == "F") {
                        $(".equip[name = 1]").append(
                            "<option>" + stringster[i].numeracao + "</option>");
                    }
                }
            }
        }
    });
});