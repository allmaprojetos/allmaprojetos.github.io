$(document).ready(function(){
    //Quem somos nós
    $.get("https://allmaprojetos.github.io/content/descricao/descricao-col-1.html", function(data, status){
        $('#descricao-col-1').html(data);
    });
    $.get("https://allmaprojetos.github.io/content/descricao/descricao-col-2.html", function(data, status){
        $('#descricao-col-2').html(data);
    });


    //Projetos
    //Projeto 1
    $.get("https://allmaprojetos.github.io/content/projetos/projeto1/descricao.html", function(data, status){
        $('#projeto-1-descricao').html(data);
    });
    $.get("https://allmaprojetos.github.io/content/projetos/projeto1/titulo.html", function(data, status){
        $('#projeto-1-titulo').html(data);
    });
    //Projeto 2
    $.get("https://allmaprojetos.github.io/content/projetos/projeto2/descricao.html", function(data, status){
        $('#projeto-2-descricao').html(data);
    });
    $.get("https://allmaprojetos.github.io/content/projetos/projeto2/titulo.html", function(data, status){
        $('#projeto-2-titulo').html(data);
    });
    //Projeto 3
    $.get("https://allmaprojetos.github.io/content/projetos/projeto3/descricao.html", function(data, status){
        $('#projeto-3-descricao').html(data);
    });
    $.get("https://allmaprojetos.github.io/content/projetos/projeto3/titulo.html", function(data, status){
        $('#projeto-3-titulo').html(data);
    });
    //Projeto 4
    $.get("https://allmaprojetos.github.io/content/projetos/projeto4/descricao.html", function(data, status){
        $('#projeto-4-descricao').html(data);
    });
    $.get("https://allmaprojetos.github.io/content/projetos/projeto4/titulo.html", function(data, status){
        $('#projeto-4-titulo').html(data);
    });
    //Projeto 5
    $.get("https://allmaprojetos.github.io/content/projetos/projeto5/descricao.html", function(data, status){
        $('#projeto-5-descricao').html(data);
    });
    $.get("https://allmaprojetos.github.io/content/projetos/projeto5/titulo.html", function(data, status){
        $('#projeto-5-titulo').html(data);
    });
    //Projeto 6
    $.get("https://allmaprojetos.github.io/content/projetos/projeto6/descricao.html", function(data, status){
        $('#projeto-6-descricao').html(data);
    });
    $.get("https://allmaprojetos.github.io/content/projetos/projeto6/titulo.html", function(data, status){
        $('#projeto-6-titulo').html(data);
    });


    //Frase
    $.get("https://allmaprojetos.github.io/content/frase/frase.html", function(data, status){
        $('#frase-frase').html(data);
    });
    $.get("https://allmaprojetos.github.io/content/frase/autor.html", function(data, status){
        $('#frase-autor').html(data);
    });


    // Serviços
    // Descrição
    $.get("https://allmaprojetos.github.io/content/servicos/descricao.html", function(data, status){
        $('#servicos-descricao').html(data);
    });
    //Menu 1
    //Título
    $.get("https://allmaprojetos.github.io/content/servicos/menu1/titulo.html", function(data, status){
        $('#menu1-titulo').html(data);
    });
    //Descrição
    $.get("https://allmaprojetos.github.io/content/servicos/menu1/descricao.html", function(data, status){
        $('#menu1-descricao').html(data);
    });
    //Menu 2
    //Título
    $.get("https://allmaprojetos.github.io/content/servicos/menu1/titulo.html", function(data, status){
        $('#menu2-titulo').html(data);
    });
    //Descrição
    $.get("https://allmaprojetos.github.io/content/servicos/menu1/descricao.html", function(data, status){
        $('#menu2-descricao').html(data);
    });
    //Menu 3
    //Título
    $.get("https://allmaprojetos.github.io/content/servicos/menu1/titulo.html", function(data, status){
        $('#menu3-titulo').html(data);
    });
    //Descrição
    $.get("https://allmaprojetos.github.io/content/servicos/menu1/descricao.html", function(data, status){
        $('#menu3-descricao').html(data);
    });
    //Menu 4
    //Título
    $.get("https://allmaprojetos.github.io/content/servicos/menu1/titulo.html", function(data, status){
        $('#menu4-titulo').html(data);
    });
    //Descrição
    $.get("https://allmaprojetos.github.io/content/servicos/menu1/descricao.html", function(data, status){
        $('#menu4-descricao').html(data);
    });
    //Menu 5
    //Título
    $.get("https://allmaprojetos.github.io/content/servicos/menu1/titulo.html", function(data, status){
        $('#menu5-titulo').html(data);
    });
    //Descrição
    $.get("https://allmaprojetos.github.io/content/servicos/menu1/descricao.html", function(data, status){
        $('#menu5-descricao').html(data);
    });

});