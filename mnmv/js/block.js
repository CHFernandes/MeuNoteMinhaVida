$(document).ready(function () {
    $("#botao").click(function (){
        $.ajax({
            type:"POST",
            url:"../php/block.php",
            data:{
                nome: $("#nome").val(),
                user: $("#user").val()
            },
            success: function(retorno) {
                if(retorno == 1){
                    alert("Usuário bloqueado");
                    window.location = 'niaa.html';
                }else{
                    alert("Usuário inexistente");
                }
            }
        });
    });
});