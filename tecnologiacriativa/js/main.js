$(document).ready(function() {

    // Cursos
    $('#cursos .analise-desenvolvimento').on('click', function() {
        $('#overlay, #ads').fadeIn();
    });

    $('#cursos .tecnologia-jogos').on('click', function() {
        $('#overlay, #tjd').fadeIn();
    });

    $('#cursos .gestao-tecnologia').on('click', function() {
        $('#overlay, #gti').fadeIn();
    });

    // Fechar Lightbox
    $('#overlay, .lightbox .wrapper .fechar').on('click', function() {
        $('#overlay, .lightbox').fadeOut();
    });

    $(document).on( 'keydown', function (e) {
        if ( e.keyCode === 27 ) { 
            $('#overlay, .lightbox').fadeOut();
        }
    });


    // Desafios

    // Ativar desafio
    $('#desafios .container ul .it-rally').on('click', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $('#desafios .container .rally').siblings('.content').hide();
        $('#desafios .container .rally').fadeIn();
    });

    $('#desafios .container ul .it-robo').on('click', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $('#desafios .container .robo').siblings('.content').hide();
        $('#desafios .container .robo').fadeIn();
    });

    $('#desafios .container ul .it-app').on('click', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $('#desafios .container .app').siblings('.content').hide();
        $('#desafios .container .app').fadeIn();
    });

    $('#desafios .container ul .it-challenge').on('click', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $('#desafios .container .challenge').siblings('.content').hide();
        $('#desafios .container .challenge').fadeIn();
    });

});