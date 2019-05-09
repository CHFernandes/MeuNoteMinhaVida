$(document).ready(function () {
    $('.tipo').change(function(){
        
        var tipo = $('.tipo').val();
        
        $.ajax({
            type: "GET",
            datatype: "json",
            url: "../php/insert_0.php",
            success: function (lista) {
            
                var stringster = JSON.parse(lista);

                $(".equip").html("");
                for (var i = stringster.length - 1; i >= 0; i--) {
                    if(stringster[i].tipo == tipo){
                       $(".equip").append(
                        "<option value = '"+ stringster[i].numeracao +" '>" + stringster[i].numeracao + "</option>");
                    }
                }
            }
        });  
    });
});