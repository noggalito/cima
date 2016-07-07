(function($) {
  $(document).on("ready", function() {
    var pathname = window.location.pathname;
    if(pathname === "/aliados/"){
      $(".informative-section").css("margin-top","-4px");
    }
  });
})(jQuery);
