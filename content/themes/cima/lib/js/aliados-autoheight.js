$(document).on(
  'shown.bs.collapse',
  '.allies-toggable-content',
  function () {
    $('.allies-toggable-content-figure').matchHeight();
});
