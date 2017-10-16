$(document).ready(function(){
    //Quem somos nós
    $.get("https://allmaprojetos.github.io/descricao.html", function(data, status){
        $('#descricao').text(data);
    });
});
});