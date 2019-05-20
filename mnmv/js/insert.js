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
    }
});