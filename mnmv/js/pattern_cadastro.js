$(document).ready(function () {

    $("#enviar").click(function () {
        vazio = '';
        if(($("#bloco").val())=='' || $("#num").val()==''||$("#tipo").val()==''){
            alert("você deve inserir todos os campos");
        }
    })
});