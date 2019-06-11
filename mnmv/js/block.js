$(document).ready(function () {
    $("#botao").click(function (){
        
                vazio ='';
                if(vazio == $("#nome").val()){
                    $("#nome").addClass("erro");
                }else{
                    $("#nome").removeClass("erro");
                }
                if(vazio == $("#user").val()){
                    $("#user").addClass("erro");
                }else{
                    $("#user").removeClass("erro");
                }
                if ($("#nome").hasClass("erro") == false && $("#user").hasClass("erro") == false) {
                   alert('funciona')


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
                    alert("Usuário não encontrado");
                }
            }
        });

    }else{
        alert("insira nomes e identicador de Usuario");
    }

    });
});