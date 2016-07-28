$( document ).ready(function() {

  if(window.matchMedia('(max-width: 768px)').matches){
    addActiveArrow('left-arrow');
    $( ".navbar-list .navbar-menuItem" ).hover(
      function() {
        addHoverArrow(this, 'left-arrow');
      }, function() {
        $( this ).find( "div:last" ).remove();
      }
    );
  }else{
    addActiveArrow('top-arrow');
    $( ".navbar-list .navbar-menuItem" ).hover(
      function() {
        addHoverArrow(this, 'top-arrow');
      }, function() {
        $( this ).find( "div:last" ).remove();
      }
    );
  }

  function addActiveArrow(arrowType){
    $( ".navbar-list .nav-current .navbar-menuItem" )
      .append("<span class='"+ arrowType +"'></span>" );
  }

  function addHoverArrow(self, arrowType) {
    var elements = $(self).find('.' + arrowType);
    if (elements.length === 0) {
      $(self).append($("<div class='" + arrowType + "'></div>"));
    }
    $( this ).find( "div:last" ).remove();
  }
});
