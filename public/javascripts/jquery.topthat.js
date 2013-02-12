(function() {

  (function($) {
    var defaults, methods, placeholder;
    defaults = {
      stickCssClass: "fixed-top"
    };
    placeholder = $("<div style='display:none;' class='topthat-ph-" + Date.now() + "'></div>");
    methods = {
      stick: function() {
        if (this.hasClass(defaults.stickCssClass)) return;
        this.replaceWith(placeholder);
        this.prependTo("body");
        return this.addClass(defaults.stickCssClass);
      },
      unstick: function() {
        if (!this.hasClass(defaults.stickCssClass)) return;
        this.removeClass(defaults.stickCssClass);
        return placeholder.replaceWith(this);
      }
    };
    return $.fn.topthat = function() {
      var initialHeight, initialPosition, that;
      that = this;
      initialPosition = that.offset();
      initialHeight = that.height();
      return $(window).scroll(function(event) {
        if ($(window).scrollTop() > (initialPosition.top + initialHeight)) {
          return methods.stick.apply(that);
        } else {
          return methods.unstick.apply(that);
        }
      });
    };
  })(jQuery);

}).call(this);
