(function () {
  var CimaSearch = function () {
    this.$gscInput         = null;
    this.iconSelector      = '.gcse-cima-search .glyphicon';
    this.inputSelector     = '.gcse-cima-search input[type=search]';
    this.formSelector      = '.gcse-cima-search form';
    this.gscBtnSelector    = '.gsc-search-button input';
    this.gscInputSelector  = '.gsc-input-box input';
    this.listeners();
  };

  CimaSearch.prototype.listeners = function () {
    $(document).on(
      'keyup',
      this.inputSelector,
      $.proxy(this.updateGscInput, this)
    );
    $(document).on(
      'click',
      this.iconSelector,
      $.proxy(this.triggerAndSearch, this)
    );
    $(document).on(
      'submit',
      this.formSelector,
      $.proxy(this.triggerAndSearch, this)
    );
  };

  CimaSearch.prototype.updateGscInput = function (e) {
    if (this.gscInput()) {
      this.gscInput().val(e.currentTarget.value);
    }
  };

  CimaSearch.prototype.gscInput = function () {
    if (!this.$gscInput && $(this.gscInputSelector).length > 0) {
      this.$gscInput = $(this.gscInputSelector);
    }
    return this.$gscInput;
  };

  CimaSearch.prototype.triggerAndSearch = function () {
    this.triggerInputChange();
    return this.performSearch();
  };

  CimaSearch.prototype.triggerInputChange = function () {
    $(this.inputSelector).trigger('keyup');
  };

  CimaSearch.prototype.performSearch = function () {
    $(this.gscBtnSelector).trigger('click');
    return false;
  };

  new CimaSearch();
})();
