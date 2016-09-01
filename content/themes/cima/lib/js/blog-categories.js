(function () {
  var categoriesSelector = '.blog-nav .nav-tabs';

  $(document).on(
    'ready',
    function () {
      $(categoriesSelector + ' li a').each(function () {
        if (window.location.href == this.href) {
          // current element
          $(this).addClass('active');
        }
      });
    }
  );
})();
