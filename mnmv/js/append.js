$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "../php/ap.php",
        async: false,
        success: function (retorno) {

            if (retorno == 1) {
                $('#inserir').append('<tbody id="body"><tr><td>Aulas</td><td><select class="Aulas">           <option></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></td></tr><tr><td>Bloco</td><td><select class="bloco"></select></td></tr><tr><td>Sala</td><td><select class="sala"></select></td></tr><tr><td>Tipo</td><td><select class="tipo" name="0"><option></option><option value="N">Notebook</option><option value="F">Fonte</option><option value="T">Torre</option><option value="C">Carrinho</option></select></td></tr><tr><td>Equipamento</td><td><select class="equip" name="0"></select></td></tr></tbody><tfoot><tr><td><button id="enviar">Enviar</button></td><td><button id="add">Adicionar equipamento</button></td></tr></tfoot>');
            } else {
                if (retorno == 2) {
                    $('head').append('<script type="text/javascript" src="../js/insertal.js"></script>');
                    $('#inserir').append('<tbody id="body"><tr><td>Aulas</td><td><select class="Aulas"><option></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></td></tr><tr><td>Bloco</td><td><select class="bloco"></select></td></tr><tr><td>Sala</td><td><select class="sala"></select></td></tr><tr><td>Notebook</td><td><select class="equip" name="0"></select></td></tr><tr><td>Fonte</td><td><select class="equip" name="1"></select></td></tr></tbody><tfoot><tr><td><button id="enviar">Enviar</button></td></tr></tfoot>');
                }
            }
        }
    });
});