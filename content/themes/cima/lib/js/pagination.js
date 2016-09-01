(function () {
  var paginationSelector = '#posts-pagination',
      metaSelector = '#pagination-meta';

  $(document).on('ready', function () {
    var $pagination = $(paginationSelector);
    if ($pagination.length > 0) {
      var totalPages = parseInt(
            $(metaSelector + ' .total-pages').html(),
            10
          ),
          currentPage = parseInt(
            $(metaSelector + ' .current-page').html(),
            10
          );

      // populate pages
      for (var i = 1; i <= totalPages; i++) {
        var $pageNode = $('<li />'),
            $link = $('<a />', {
              text: i,
              href: '/tag/blog/page/' + i
            });

        if (currentPage == i) {
          $link.attr('disabled', 'disabled');
        }

        $pageNode.append($link);
        $pageNode.insertBefore(paginationSelector + ' li:last');
      }
    }
  });
})();
