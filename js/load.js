$(document).ready(function(){
    //Quem somos nós
    $.get("https://allmaprojetos.github.io/content/descricao/descricao.html", function(data, status){
        $('#descricao').text(data);
    });
});