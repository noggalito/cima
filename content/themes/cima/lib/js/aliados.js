(function($) {
  $(document).on("ready", function() {
    var pathname = window.location.pathname;
    var widthScreen = $(window).width();
    if(pathname === "/aliados/"){
      if(window.matchMedia('(max-width: 320px)').matches){
        $(".informative-section").css("margin-top","-215px");
        $(".main-phrase").css("margin-top","0px")
      }else if(window.matchMedia('(max-width: 480px)').matches){
        $(".main-phrase").css("margin-top","0px")
        $(".informative-section").css("margin-top","-188px");
      }else if(window.matchMedia('(max-width: 992px)').matches){
        $(".informative-section").css("margin-top","-165px");
      }else if(window.matchMedia('(min-width: 992px)').matches){
        $(".informative-section").css("margin-top","-158px");
      }
    }
  });
})(jQuery);
