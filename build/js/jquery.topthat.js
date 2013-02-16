(function() {

  (function($) {
    var defaults, methods, placeholder;
    defaults = {
      stickCssClass: "fixed-top"
    };
    placeholder = $("<div style='display:none;' class='topthat-ph-" + Date.now() + "'></div>");
    methods = {
      init: function(options) {
        var initialHeight, initialPosition, that;
        that = this;
        initialPosition = that.offset();
        initialHeight = that.height();
        return this.each(function(index, elem) {
          return $(window).scroll(function(event) {
            if ($(window).scrollTop() > (initialPosition.top + initialHeight)) {
              return methods.stick.apply(that);
            } else {
              return methods.unstick.apply(that);
            }
          });
        });
      },
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
    return $.fn.topthat = function(method) {
      if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === "object" || !method) {
        return methods.init.apply(this, arguments);
      } else {
        return $.error("Method " + method + " does not exist on jQuery.topthat");
      }
    };
  })(jQuery);

}).call(this);
