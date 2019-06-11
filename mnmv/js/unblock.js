$(document).ready(function () {
    $("#botao").click(function (){
        $.ajax({
            type:"POST",
            url:"../php/unblock.php",
            data:{
                nome: $("#nome").val(),
                user: $("#user").val()
            },
            success: function(retorno) {
                if(retorno == 1){
                    alert("Usuário desbloqueado");
                    window.location = 'niaa.html';
                }else{
                    alert("Usuário não encontrado");
                }
            }
        });
    });
});