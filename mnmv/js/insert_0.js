$(document).ready(function () {

    $.ajax({
        type: "GET",
        datatype: "json",
        url: "../php/insert_0.php",
        success: function (lista) {

            var stringster = JSON.parse(lista);

            $(".equip").html("");
            for (var i = stringster.length - 1; i >= 0; i--) {
                
                    $("#inserir").append(
                        "<tr><td>" + stringster[i].numeracao + "</td><td>" + stringster[i].tipo + "</td></tr>");
                
            }
        }
    });

});