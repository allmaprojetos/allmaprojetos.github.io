$(document).ready(function(){
    //Quem somos nós
    $.get("https://allmaprojetos.github.io/content/descricao/descricao-col-1.html", function(data, status){
        $('#descricao-col-1').html(data);
    });
    $.get("https://allmaprojetos.github.io/content/descricao/descricao-col-2.html", function(data, status){
        $('#descricao-col-2').html(data);
    });
    
});