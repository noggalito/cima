(function () {
  var titlesSelector = '.nested-title',
      serviciosSelector = '.servicios-inside-categories-content',
      expandCategoriesSelector = '.common-categories-content .expand';

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
    expandCategoriesSelector,
    function (e) {
      $(this).toggleClass('collapsed');
    }
  );
})();
