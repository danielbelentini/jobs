$(document).ready(function() {

    // Features da Interna de Livro
    $('.features .abas li h2').click(function(){
        $(this).parent().siblings().children('h2').removeClass('active');
        $(this).addClass('active');
        $(this).parent().siblings().children('div').fadeOut();
        $(this).next().fadeIn();
    });

    // // Carrossel da galeria de imagens da interna de livros
    // var owl = $('.galeria .lista-fotos ul');

    // owl.owlCarousel({
    //     items : 3,
    //     pagination : false
        
    // });

    $('.lista-fotos .prev').click(function(){owl.trigger('owl.prev');})
    $('.lista-fotos .next').click(function(){owl.trigger('owl.next');})

    $('.adicionar-lista').click(function(){
        $(this).fadeOut();
        $(this).siblings('.adicionado').delay(500).fadeIn();
    });

    $('.comprar').click(function(){
        $(this).hide();
        $(this).siblings('.adicionado-cesta').show();
    });

    // Thumbs da galeria com zoom
    $('.lista-fotos ul li figure').click(function(){
        $(this).parent().siblings().children('figure').removeClass('active');
        $(this).addClass('active');

    });

    // Compartilhe 
    $('.container header .compartilhe a').click(function() {
        if ($(this).siblings('.share-this').hasClass('active')) {
            $(this).siblings('.share-this').removeClass('active');    
        } else {
            $(this).siblings('.share-this').addClass('active');    
        }
        
    });

    // Controle Submenu 
    if($(window).width() >= 768) {

        $('body header nav ul li').hover(function(){
            $(this).children('.submenu').fadeIn('slow');
        }, function(){
            $(this).children('.submenu').stop(true, true).hide();
        });
    
    }

    // Controle Itens Carrinho
    $('header .top .carrinho').hover(function(){
        $(this).children('.box-itens').fadeIn();
    }, function(){
        $(this).children('.box-itens').stop(true, true).fadeOut();
    });

    // Controle Box login
    $('header .top .login').hover(function(){
        $(this).children('.box-opcoes').fadeIn();
    }, function(){
        $(this).children('.box-opcoes').stop(true, true).fadeOut();
    });

    // Controle Box logado
    $('header .top .logado').hover(function(){
        $(this).children('.box-opcoes').fadeIn();
    }, function(){
        $(this).children('.box-opcoes').stop(true, true).fadeOut();
    });    

    // Owl Carousel: carrossel lançamentos home
    var owl = $('#lancamentos .lista-livros ul');

    owl.owlCarousel({
        itemsDesktop : [1140,5],
        itemsTablet : [1139,3],
        itemsMobile : [768,1],
        pagination : false,
        slideSpeed : 400,
        
        
    });

    $('#lancamentos .lista-livros .next').click(function(){owl.trigger('owl.next');})
    $('#lancamentos .lista-livros .prev').click(function(){owl.trigger('owl.prev');})

    // Owl Carousel: carrossel lançamentos home
    var owl2 = $('#mais-vendidos .lista-livros ul');

    owl2.owlCarousel({
        itemsDesktop : [1140,5],
        itemsTablet : [1139,3],
        itemsMobile : [768,1],
        pagination : false,
        slideSpeed : 400,

        
    });

    $('#mais-vendidos .lista-livros .next').click(function(){owl2.trigger('owl.next');})
    $('#mais-vendidos .lista-livros .prev').click(function(){owl2.trigger('owl.prev');})

    // Contador de caracteres
    $('.mensagem-presenteado textarea').keyup(function(event){

        var target = $(this).siblings('span').children('.count');
        var max = target.attr('title');
        var len = $(this).val().length;
        var remain = max - len;

        if (len > max) {
            var val = $(this).val();
            $(this).val(val.substr(0, max));
            remain = 0;
        }

        target.html(remain);
        
    });

    $('#pedidos .bt-detalhes').click(function(){

        if ($(this).hasClass('active')) {
            $(this).closest('table').siblings('.detalhes-pedido').slideUp();
            $(this).removeClass('active');
        } else {
            $(this).closest('table').siblings('.detalhes-pedido').slideDown();
            $(this).addClass('active');
        }
    });

    $('#autores .lista-alfabetica li a').click(function(){
        $(this).parent().siblings().children('a').removeClass('active');
        $(this).addClass('active');
        
    });

    // Owl Carousel: carrossel página autor
    var owlAutores = $('#autores .pag-autor .obras .lista ul');

    owlAutores.owlCarousel({
        itemsDesktop : [1140,3],
        itemsTablet : [1139,4],
        itemsMobile : [767,2],
        pagination : false,
        slideSpeed : 400
        
    });

    $('#autores .pag-autor .obras .lista .next').click(function(){owlAutores.trigger('owl.next');})
    $('#autores .pag-autor .obras .lista .prev').click(function(){owlAutores.trigger('owl.prev');})

    // Controle da galeria de fotos
    $('.lightbox-galeria .fechar, #overlay').click(function(){
        $('#overlay, .lightbox-galeria').fadeOut();
    });

    //Busca mobile
    if ($(window).width() <= 767) {
        $('.search-anchor').on('click touchstart', function(e){
            $('.busca').fadeIn();
            e.preventDefault();
        });

        $('.busca .fechar').on('click touchstart', function(e){
            $('.busca').fadeOut();
            e.preventDefault();
        });
    }

    
    if ($(window).width() <= 767) {
        // Menu mobile
        var nav = $('body > header > nav');
        var menu = $('body > header > nav .container');
        var alturaDoc = $(document).height();

        menu.height(alturaDoc);
        nav.height(alturaDoc);

        $('.menu-anchor').on('click touchstart', function(e){
            $('body > header, body > section, body > footer').addClass('active');
            $('body > header > nav').show();
            e.preventDefault();
        });

        $('body > header > nav .fechar').on('click touchstart', function(e){
            $('body > header > nav').hide();
            $('body > header, body > section, body > footer').removeClass('active');
            e.preventDefault();
        });

        // Address
        $('footer address p').html('Rua França Pinto, 498 – <br> Vila Mariana – São Paulo/SP <br><br> CEP 04016-002  |  (11) 5572–5363');

        //Detalhe do pedido

        $('#pedidos .pedidos-mobile .bt-detalhes').on('click touchstart', function(e){
            if ($(this).hasClass('active')) {
                $(this).next('.detalhes-pedido').slideUp();
                $(this).removeClass('active');

            } else {
                $(this).next('.detalhes-pedido').slideDown();
                $(this).addClass('active');

            }
            e.preventDefault();
        });

    }

});