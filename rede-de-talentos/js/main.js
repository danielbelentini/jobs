$(document).ready(function() {

    // Rede de Talentos

    if ( $(window).width() >= 1280 ) {
        $('.holder-case').on('click', function(e) {
            e.preventDefault();

            var idVideo = $(this).data('video');
            var nomeAluno = $(this).find('p').html();

            if ( $('.holder-case').hasClass('opacity') ) {
                return false;
            } else {
                $('.holder-case').addClass('opacity');

                var quantVideo = $('.holder-video').css('display');

                $(this).parent().siblings('.cont-video').remove();

                $(this).parent('.wrapper').after('<div class="cont-video">'
                +   '<div class="holder-video">'
                +       '<iframe width="621" height="350" src="https://www.youtube.com/embed/'+ idVideo +'" frameborder="0" allowfullscreen></iframe>'
                +   '<p class="nome-aluno">'+ nomeAluno +'</p>'
                +   '<div class="texto">'
                +       '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut ornare elit. Sed volutpat, neque sed hendrerit lobortis, urna sapien rhoncus urna, id luctus ex est a ligula.</p>'
                +       '<p>Donec posuere sem vel massa tempus, nec euismod est tincidunt. Integer arcu risus, tempor in pellentesque vel, accumsan id leo. Nulla efficitur velit sed diam posuere dapibus at vel nibh..</p>'
                +   '</div>'
                +   '<span class="close">Fechar</span>'
                +'</div>');

                $(this).parent().next('.cont-video').find('.holder-video').slideDown(1000);

                $('html, body').animate({ scrollTop: $(this).parent().next('.cont-video').offset().top}, 2000);

                $('.cont-video .close').on('click', function(e) {
                    e.preventDefault();

                    $(this).parents('.cont-video').slideUp(1000);

                    $('.holder-case').removeClass('opacity');
                });
            }

        });
    }


    if ( $(window).width() <= 1024  ) {
        $('.holder-case').on('click', function(e) {
            e.preventDefault();

            var idVideo = $(this).data('video');
            var nomeAluno = $(this).find('p').html();

            $('#overlay').fadeIn();

            $('.pageTalentos').find('.cont-video').remove();

            $('.pageTalentos').append('<div class="cont-video">'
            +   '<div class="holder-video">'
            +       '<iframe width="621" height="350" src="https://www.youtube.com/embed/'+ idVideo +'" frameborder="0" allowfullscreen></iframe>'
            +   '<p class="nome-aluno">'+ nomeAluno +'</p>'
            +   '<div class="texto">'
            +       '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut ornare elit. Sed volutpat, neque sed hendrerit lobortis, urna sapien rhoncus urna, id luctus ex est a ligula.</p>'
            +       '<p>Donec posuere sem vel massa tempus, nec euismod est tincidunt. Integer arcu risus, tempor in pellentesque vel, accumsan id leo. Nulla efficitur velit sed diam posuere dapibus at vel nibh..</p>'
            +   '</div>'
            +   '<span class="close">Fechar</span>'
            +'</div>');

            $('html, body').animate({ scrollTop: $('body').offset().top}, 2000);

            
            $('.cont-video .close').on('click', function(e) {
                e.preventDefault();

                $('.cont-video, #overlay').fadeOut();


            });
        });
    }


    
});