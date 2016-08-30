(function () {
  var titlesSelector = '.nested-title',
      serviciosSelector = '.servicios-inside-categories-content';

  $(document).on(
    'show.bs.collapse',
    serviciosSelector,
    function (e) {
      // show only one servicio at a time
      $(serviciosSelector).removeClass('in');
      // remove 'active' state from titles
      $(titlesSelector).removeAttr('aria-expanded');
      // load content over AJAX
      $(document).trigger('cima:willLoadServices', e);
    }
  );

  $(document).on(
    'click',
    '.common-categories-content .expand',
    function (e) {
      $(this).toggleClass('collapsed');
    }
  )
})();
