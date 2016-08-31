(function () {
  var titlesSelector = '.nested-title',
      serviciosContext = '.service-context',
      serviciosSelector = '.servicios-inside-categories-content',
      expandCategoriesSelector = '.common-categories-content .expand';

  $(document).on(
    'show.bs.collapse',
    serviciosSelector,
    function (e) {
      // show only one servicio at a time
      var wrapper = $(this).parents(serviciosContext);
      wrapper.find(serviciosSelector).removeClass('in');
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
      // toggle + icon
      $(this).toggleClass('collapsed');
    }
  );
})();
