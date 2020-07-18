
// FILTRO DE ISOTOPO
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) {

      var $container  = $('.iso-box-wrapper'),
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      // FILTRAR ELEMENTOS AL HACER CLICK EN EL BOTON

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({
        filter: filterValue,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
        }
      });

      // NO PROCEDER SI YA ESTA SELECCIONADO

      if ( $this.hasClass('selected') ) {
        return false;
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      });

  }

});


// PRECARGAR JS
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});


// FUNCION DE JQUERY PARA CONTRAER LA BARRA DE NAVEGACION EN EL DESPLAZAMIENTO //
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


/* DOCUMENTO HTML CARGADO. DOM LISTO!!.
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMADO ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();


  // OCULTAR MENU MOVIL DESPUES DE DAR CLICK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  // NIVO LIGHTBOX
  $('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
    });


  // SLIDESHOW DEL FONDO DE INICIO
  $(function(){
    jQuery(document).ready(function() {
    $('#home').backstretch([
       "images/home-bg-slideshow1.jpg",
       "images/home-bg-slideshow2.jpg",
        ],  {duration: 2000, fade: 750});
    });
  })

});
