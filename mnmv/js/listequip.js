$(document).ready(function () {
    if($("body").is("#emp")){
       $.ajax({
        type: "GET",
        datatype: "json",
        url: "../php/equipamento.php",
        success: function (lista) {

            var stringster = JSON.parse(lista);

            $("#lista").html("");
            for (var i = stringster.length - 1; i >= 0; i--) {
                if (stringster[i].status == 1) {
                    $("#lista").append(
                        '<tr><td>' + stringster[i].numeracao + '</td><td>' + stringster[i].descricao + '</td><td>'+ stringster[i].bloco +'</td></tr>');
                }
            }
        }
    });
    }
       
    if($("body").is("#total")){
        $.ajax({
        type: "GET",
        datatype: "json",
        url: "../php/equipamento.php",
        success: function (lista) {
            
            var stringster = JSON.parse(lista);

            $("#lista").html("");
            for (var i = stringster.length - 1; i >= 0; i--) {
                $("#lista").append(
                    '<tr><td>' + stringster[i].numeracao + '</td><td>'+ stringster[i].descricao + '</td><td>'+ stringster[i].bloco + '</td><td>'+ stringster[i].status + '</td></tr>');
            }
        }
    });
    }
});