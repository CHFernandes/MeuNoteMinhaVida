$(document).ready(function () {
    if ($("body").is("#i_1")) {
        $("body").on('change', '.tipo', function () {
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
        $.ajax({
            type: "GET",
            datatype: "json",
            async: false,
            url: "../php/bloco.php",
            success: function (result) {
                var convertido = JSON.parse(result);
                $(".bloco").html("");
                $(".bloco").append("<option></option>");
                for (var i = 0; i < convertido.length; i++) {
                    $(".bloco").append("<option>" + convertido[i].numero + "</option>");
                }
            }
        });
        
        $("body").on('change', '.bloco', function () {
            var bloco = $(".bloco").val();
            $.ajax({
                type: "GET",
                datatype: "json",
                url: "../php/sala.php",
                success: function (lista) {
                    var listac = JSON.parse(lista);
                    $(".sala").html("");
                    $(".sala").append("<option></option>");
                    for (var i = 0; i < listac.length; i++) {
                        if (listac[i].bloco == bloco) {
                            $(".sala").append("<option>" + listac[i].sala + "</option>");
                        }
                    }
                }
            });
        });
        
        $("body").on('change', '.tipo', function () {
            var bloco = $('.bloco').val();
            var tipo = $(this).val();
            var name = $(this).attr('name');

            $.ajax({
                type: "GET",
                datatype: "json",
                url: "../php/equipamento.php",
                success: function (lista) {

                    var stringster = JSON.parse(lista);

                    $(".equip[name = " + name + "]").html("");
                    for (var i = stringster.length - 1; i >= 0; i--) {
                        if (stringster[i].status == '0') {
                            if (stringster[i].bloco == bloco) {
                                var o = 0;
                                while (o < name.length) {
                                    if (stringster[i].tipo == tipo) {
                                        $(".equip[name = " + name + "]").append(
                                            "<option>" + stringster[i].numeracao + "</option>");
                                    }
                                    o = o + 1;
                                }
                            }
                        }
                    }
                }
            });
        });
    }
});