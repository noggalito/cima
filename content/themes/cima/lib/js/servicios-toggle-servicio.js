(function () {
  var expandedSelector = '.servicio-expanded-view',
      wrapperSelector = '.servicios-inside-categories-content';

  $(document).on(
    'click',
    '.servicio-view',
    function (e) {
      var wrapper = $(this).parents(wrapperSelector),
          container = wrapper.find('.container');

      container.html(
        $(this).find(expandedSelector).html()
      );
      return false;
    }
  );
})();
