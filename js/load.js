$(document).ready(function(){
    //Quem somos nós
    $.get("https://allmaprojetos.github.io/descricao/descricao.html", function(data, status){
        $('#descricao').text(data);
    });
});