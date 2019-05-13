$(document).ready(function () {
    $(body).on('change', '.tipo', function () {
        alert("Mudou");
        var tipo = new Array();
        var name = new Array();
        
        $('.tipo').each(function () {
            name.push($(this).attr('name'));
        });
            
        $('.tipo').each(function(){
            tipo.push($(this).val());
        });

        $.ajax({
            type: "GET",
            datatype: "json",
            url: "../php/insert_0.php",
            success: function (lista) {
                
                alert("Success");
                var stringster = JSON.parse(lista);

                $(".equip").html("");
                for (var i = stringster.length - 1; i >= 0; i--) {
                    var o = 0;
                    alert("for");
                    while(o < name.length){
                        alert(name[o]);
                        alert(tipo[o]);
                        if (stringster[i].tipo == tipo[o]){
                            $(".equip[name = " + name[o] + "]").append(
                            "<option>" + stringster[i].numeracao + "</option>");
                        }
                        o = o + 1;
                    }    
                }
            }
        });
    });
});