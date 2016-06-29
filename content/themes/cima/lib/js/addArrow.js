$( document ).ready(function() {
  if(window.matchMedia('(max-width: 768px)').matches){
    $( ".navbar-list .navbar-menuItem" ).hover(
      function() {
        $( this ).append( $( "<div class='left-arrow'></div>" ) );
      }, function() {
        $( this ).find( "div:last" ).remove();
      }
    );
  }else{
    $( ".navbar-list .navbar-menuItem" ).hover(
      function() {
        $( this ).append( $( "<div class='top-arrow'></div>" ) );
      }, function() {
        $( this ).find( "div:last" ).remove();
      }
    );
  }
});
