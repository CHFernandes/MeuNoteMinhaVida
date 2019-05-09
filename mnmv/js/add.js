$(document).ready(function(){
    $('#add').click(function(){
        $('#body').append(
        '<tr><td>Tipo</td><td><select class="tipo"><option></option><option value="N">Notebook</option><option value="F">Fonte</option><option value="T">Torre</option><option value="C">Carrinho</option></select></td></tr><tr><td>Equipamento</td><td><input type="text" class="equip"></td></tr>'
        );
    });
});