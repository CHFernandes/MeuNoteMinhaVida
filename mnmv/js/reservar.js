$(document).ready(function () {
    $("#enviar").click(function () {
        
        var data = new Date($('.inicio').val());
        
        var format = "YYYY-MM-DD HH:II:SS";
        
        document.write(dateConvert(data,format));
        
        function dateConvert(dateobj,format){
            var year = dateobj.getFullYear();
            var month= ("0" + (dateobj.getMonth()+1)).slice(-2);
            var date = ("0" + dateobj.getDate()).slice(-2);
            var hours = ("0" + dateobj.getHours()).slice(-2);
            var minutes = ("0" + dateobj.getMinutes()).slice(-2);
            var seconds = ("0" + dateobj.getSeconds()).slice(-2);
            var day = dateobj.getDay();
            var months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
            var dates = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
            var converted_date = "";

            switch(format){
            case "YYYY-MM-DD":
            converted_date = year + "-" + month + "-" + date;
            break;
            case "YYYY-MMM-DD DDD":
            converted_date = year + "-" + months[parseInt(month)-1] + "-" + date + " " + dates[parseInt(day)];
            break;
            }

            return converted_date;
        }
        
        var bloco = $('.bloco').val();
        
        var sala = $('.sala').val();
        
        var aulas = $('.aulas').val();
        
        var equip = new Array();

        $('.equip').each(function(){
	       equip.push($(this).val());
        });
        
        var tipos = new Array();
        
        $('.tipo').each(function(){
            tipos.push($(this).val());
        });
        
        $.ajax({
            type: "POST",
            url: "../php/reservar.php",
            data: {
                inicio: inicio,
                aulas: aulas,
                bloco: bloco,
                sala: sala,
                equipamento: equip,
                tipo: tipos
            },
            success: function (retorno) {
                
                alert(retorno);
                
                if (retorno == '1') {
                    alert("Empréstimo realizado com sucesso");
                    window.location = 'menu.html';
                } else {
                    alert("Índice de notebook inexistente");
                }
            }
        });
    }); 
});