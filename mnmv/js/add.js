$(document).ready(function(){
    var i = 0;
    $('#add').click(function(){
        i = i +1;
        $('#body').append(
        '<tr><td>Bloco</td><td><input class="bloco" type="number"></td></tr><tr><td>Sala</td><td><input class="sala" type=text></td></tr><tr><td>Tipo</td><td><select class="tipo" name = "'+ i +'"><option></option><option value="N">Notebook</option><option value="F">Fonte</option><option value="T">Torre</option><option value="C">Carrinho</option></select></td></tr><tr><td>Equipamento</td><td><select class="equip" name="'+ i +'"></select></td></tr>'
        );
    });
});