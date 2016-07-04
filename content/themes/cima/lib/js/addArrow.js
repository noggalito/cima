$( document ).ready(function() {

  if(window.matchMedia('(max-width: 768px)').matches){
    addActiveArrow('left-arrow');
    $( ".navbar-list .navbar-menuItem" ).hover(
      function() {
        $( this ).append( $( "<div class='left-arrow'></div>" ) );
      }, function() {
        $( this ).find( "div:last" ).remove();
      }
    );
  }else{
    addActiveArrow('top-arrow');
    $( ".navbar-list .navbar-menuItem" ).hover(
      function() {
        $( this ).append( $( "<div class='top-arrow'></div>" ) );
      }, function() {
        $( this ).find( "div:last" ).remove();
      }
    );
  }
  function addActiveArrow(arrowType){
    $( ".navbar-list .nav-current .navbar-menuItem" )
      .append("<div class='"+ arrowType +"'></div>" );
  }
});
