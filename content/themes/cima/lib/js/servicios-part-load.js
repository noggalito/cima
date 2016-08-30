$(document).on(
  'cima:willLoadServices',
  function (e, originalEvent) {
    var $currentTarget = $(originalEvent.currentTarget),
        slug = $currentTarget.data("slug"),
        url = '/' + slug + '/';
        $(originalEvent.currentTarget)

    $(originalEvent.target).html('<h3 class="loading">Cargando...</h3>');

    $(originalEvent.target).load(url);
  }
);
