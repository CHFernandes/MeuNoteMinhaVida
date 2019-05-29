$(document).ready(function () {
    if ($("body").is("#i_1")) {
        $(body).on('change', '.tipo', function () {
            var tipo = new Array();
            var name = new Array();

            $('.tipo').each(function () {
                name.push($(this).attr('name'));
            });

            $('.tipo').each(function () {
                tipo.push($(this).val());
            });
 
            $.ajax({
                type: "GET",
                datatype: "json",
                url: "../php/equipamento.php",
                success: function (lista) {
                    

                    var stringster = JSON.parse(lista);

                    $(".equip").html("");
                    for (var i = stringster.length - 1; i >= 0; i--) {
                        if (stringster[i].status == '1') {
                            var o = 0;
                            while (o < name.length) {
                                if (stringster[i].tipo == tipo[o]) {
                                    $(".equip[name = " + name[o] + "]").append(
                                        "<option>" + stringster[i].numeracao + "</option>");
                                }
                                o = o + 1;
                            }
                        }
                    }
                }
            });
        });
    }

    if ($("body").is("#i_0")) {
        $(body).on('change', '.tipo', function () {
            var tipo = new Array();
            var name = new Array();

            $('.tipo').each(function () {
                name.push($(this).attr('name'));
            });

            $('.tipo').each(function () {
                tipo.push($(this).val());
            });

            $.ajax({
                type: "GET",
                datatype: "json",
                url: "../php/equipamento.php",
                success: function (lista) {

                    var stringster = JSON.parse(lista);

                    $(".equip").html("");
                    for (var i = stringster.length - 1; i >= 0; i--) {
                        if (stringster[i].status == '0') {
                            var o = 0;
                            while (o < name.length) {
                                if (stringster[i].tipo == tipo[o]) {
                                    $(".equip[name = " + name[o] + "]").append(
                                        "<option>" + stringster[i].numeracao + "</option>");
                                }
                                o = o + 1;
                            }
                        }
                    }
                }
            });
        });
        
        $(body).on('change', '.bloco', function () {
            var bloco = new Array();

            $('.bloco').each(function () {
                bloco.push($(this).val());
            });

            $.ajax({
                type: "GET",
                datatype: "json",
                url: "../php/bloco.php",
                success: function (lista) {

                    var stringster = JSON.parse(lista);

                    $(".bloco").html("");
                    for (var i = stringster.length - 1; i >= 0; i--) {
                            var o = 0;
                            while (o < sala.length) {
                                if (stringster[i].idbloco == bloco[o]) {
                                    $(".bloco[name = " + sala[o] + "]").append(
                                        "<option>" + stringster[i].nome + "</option>");
                                }
                                o = o + 1;
                            }
                    }
                }
            });
        });
    }
    
    var bloco = new Array();
            $('.bloco').each(function () {
                bloco.push($(this).val());
            });

            $.ajax({
                type: "GET",
                datatype: "json",
                url: "../php/sala.php",
                success: function (lista) {

                    var stringster = JSON.parse(lista);

                    $(".bloco").html("");
                    for (var i = stringster.length - 1; i >= 0; i--) {
                                    $(".bloco[name = " + sala[o] + "]").append(
                                        "<option>" + stringster[i].nome + "</option>");
                    }
                }
        });
    
});