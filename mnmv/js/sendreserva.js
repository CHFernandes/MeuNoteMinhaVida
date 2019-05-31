$(document).ready(function(){
    alert("foi")
    $("button").click(function(){
        alert($(this).attr('name'));
    });
});