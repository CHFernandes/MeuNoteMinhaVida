$(document).ready(function () {
    $("#enviar").click(function () {
        
        var aulas = $('.aulas').val();
        
        var add = parseInt(aulas) * 50;

        var data = new Date($('#inicio').val());
        var year = data.getFullYear();
        var month = ("0" + (data.getMonth() + 1)).slice(-2);
        var date = ("0" + data.getDate()).slice(-2);
        var hours = ("0" + data.getHours()).slice(-2);
        var minutes = ("0" + data.getMinutes()).slice(-2);
        var seconds = ("0" + data.getSeconds()).slice(-2);
        
        var addminutes = add + parseInt(minutes);
        
        var converted_date = "";
        var converted_hour = "";
        converted_date = year + "-" + month + "-" + date;
        converted_hour = hours + ":" + minutes + ":" + seconds;
        var inicio = converted_date + " " + converted_hour;
        
        while(addminutes >= 60){
            addminutes = addminutes - 60;
            hours = parseInt(hours) + 1;
        }
        var converted_addedhour = hours + ":" + addminutes + ":" + seconds;
        var fim = converted_date + " " + converted_addedhour;
        
        var bloco = $('.bloco').val();

        var sala = $('.sala').val();

        var aulas = $('.aulas').val();

        var equip = new Array();

        $('.equip').each(function () {
            equip.push($(this).val());
        });

        var tipos = new Array();

        $('.tipo').each(function () {
            tipos.push($(this).val());
        });

          $.ajax({
              type: "POST",
              url: "../php/reservar.php",
              data: {
                  inicio: inicio,
                  fim: fim,
                  bloco: bloco,
                  sala: sala,
                  equipamento: equip,
                  tipo: tipos
              },
              success: function (retorno) {
                  
                  if (retorno == '1') {
                      alert("Reserva realizada com sucesso");
                      window.location = 'menu.html';
                  } else {
                      alert("Índice de notebook inexistente");
                  }
              }
          });
    });
});