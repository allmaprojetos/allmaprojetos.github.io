$(document).ready(function(){
    //Quem somos nós
    $.get("https://allmaprojetos.github.io/content/descricao/descricao-col-1.html", function(data, status){
        $('#descricao-col-1').html(data);
    });
    $.get("https://allmaprojetos.github.io/content/descricao/descricao-col-2.html", function(data, status){
        $('#descricao-col-2').html(data);
    });


    //Projetos
    //Descrição
    $.get("https://allmaprojetos.github.io/content/projetos/descricao.html", function(data, status){
        $('#projetos-descricao').html(data);
    });
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
    $.get("https://allmaprojetos.github.io/content/servicos/menus/menu1/titulo.html", function(data, status){
        $('#menu1-titulo').html(data);
    });
    //Descrição
    $.get("https://allmaprojetos.github.io/content/servicos/menus/menu1/descricao.html", function(data, status){
        $('#menu1-descricao').html(data);
    });
    //Menu 2
    //Título
    $.get("https://allmaprojetos.github.io/content/servicos/menus/menu2/titulo.html", function(data, status){
        $('#menu2-titulo').html(data);
    });
    //Descrição
    $.get("https://allmaprojetos.github.io/content/servicos/menus/menu2/descricao.html", function(data, status){
        $('#menu2-descricao').html(data);
    });
    //Menu 3
    //Título
    $.get("https://allmaprojetos.github.io/content/servicos/menus/menu3/titulo.html", function(data, status){
        $('#menu3-titulo').html(data);
    });
    //Descrição
    $.get("https://allmaprojetos.github.io/content/servicos/menus/menu3/descricao.html", function(data, status){
        $('#menu3-descricao').html(data);
    });
    //Menu 4
    //Título
    $.get("https://allmaprojetos.github.io/content/servicos/menus/menu4/titulo.html", function(data, status){
        $('#menu4-titulo').html(data);
    });
    //Descrição
    $.get("https://allmaprojetos.github.io/content/servicos/menus/menu4/descricao.html", function(data, status){
        $('#menu4-descricao').html(data);
    });
    //Menu 5
    //Título
    $.get("https://allmaprojetos.github.io/content/servicos/menus/menu5/titulo.html", function(data, status){
        $('#menu5-titulo').html(data);
    });
    //Descrição
    $.get("https://allmaprojetos.github.io/content/servicos/menus/menu5/descricao.html", function(data, status){
        $('#menu5-descricao').html(data);
    });

    //Endereço
    $.get("https://allmaprojetos.github.io/content/contato/endereco.html", function(data, status){
        $('#endereco').html(data);
    });
    //E-mail
    $.get("https://allmaprojetos.github.io/content/contato/email.html", function(data, status){
        $('#email').html("<a href='mailto:'" + data + ">"+ data +"</a>");
    });
    //Telefone 1
    $.get("https://allmaprojetos.github.io/content/contato/telefone1.html", function(data, status){
        $('#telefone1').html(data);
    });
        //Telefone 2
    $.get("https://allmaprojetos.github.io/content/contato/telefone2.html", function(data, status){
        $('#telefone2').html(data);
    });
        //Telefone 3
    $.get("https://allmaprojetos.github.io/content/contato/telefone3.html", function(data, status){
        $('#telefone3').html(data);
    });
    /*
    //carrega imagens dos carousels
    //carousel1
    $("#img-carousel1").html("<div class='item active'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto1/imagem1.png' alt='Imagem 1 do Projeto'>" +
                            "</div>"+
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto1/imagem2.png' alt='Imagem 2 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto1/imagem3.png' alt='Imagem 3 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto1/imagem4.png' alt='Imagem 4 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto1/imagem5.png' alt='Imagem 5 do Projeto'>" +
                            "</div>");
    $("#img-carousel2").html("<div class='item active'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto2/imagem1.png' alt='Imagem 1 do Projeto'>" +
                            "</div>"+
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto2/imagem2.png' alt='Imagem 2 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto2/imagem3.png' alt='Imagem 3 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto2/imagem4.png' alt='Imagem 4 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto2/imagem5.png' alt='Imagem 5 do Projeto'>" +
                            "</div>");
    $("#img-carousel3").html("<div class='item active'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto3/imagem1.png' alt='Imagem 1 do Projeto'>" +
                            "</div>"+
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto3/imagem2.png' alt='Imagem 2 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto3/imagem3.png' alt='Imagem 3 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto3/imagem4.png' alt='Imagem 4 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto3/imagem5.png' alt='Imagem 5 do Projeto'>" +
                            "</div>");
    $("#img-carousel4").html"<div class='item active'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto4/imagem1.png' alt='Imagem 1 do Projeto'>" +
                            "</div>"+
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto4/imagem2.png' alt='Imagem 2 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto4/imagem3.png' alt='Imagem 3 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto4/imagem4.png' alt='Imagem 4 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto4/imagem5.png' alt='Imagem 5 do Projeto'>" +
                            "</div>");
    $("#img-carousel5").html("<div class='item active'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto5/imagem1.png' alt='Imagem 1 do Projeto'>" +
                            "</div>"+
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto5/imagem2.png' alt='Imagem 2 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto5/imagem3.png' alt='Imagem 3 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto5/imagem4.png' alt='Imagem 4 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto5/imagem5.png' alt='Imagem 5 do Projeto'>" +
                            "</div>");
    $("#img-carousel6").html("<div class='item active'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto6/imagem1.png' alt='Imagem 1 do Projeto'>" +
                            "</div>"+
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto6/imagem2.png' alt='Imagem 2 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto6/imagem3.png' alt='Imagem 3 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto6/imagem4.png' alt='Imagem 4 do Projeto'>" +
                            "</div>" +
                            "<div class='item'>" +
                                "<img src='https://allmaprojetos.github.io/content/projetos/projeto6/imagem5.png' alt='Imagem 5 do Projeto'>" +
                            "</div>");
    */
});
