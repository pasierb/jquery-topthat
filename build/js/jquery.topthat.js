(function() {

  (function($) {
    var defaults, methods, placeholder;
    defaults = {
      stickCssClass: "fixed-top"
    };
    placeholder = $("<div style='display:none;' class='topthat-ph-" + Date.now() + "'></div>");
    methods = {
      init: function(options) {
        var settings;
        settings = $.extend(defaults, options);
        return this.each(function(index, elem) {
          var $this, initialHeight, initialPosition;
          $this = $(elem);
          initialPosition = $this.offset();
          initialHeight = $this.height();
          $this.data('topthat', settings);
          return $(window).scroll(function(event) {
            if ($(window).scrollTop() > initialPosition.top) {
              return $this.topthat("stick");
            } else {
              return $this.topthat("unstick");
            }
          });
        });
      },
      stick: function() {
        return this.each(function(index, elem) {
          var $this, data;
          $this = $(elem);
          data = $this.data();
          if (!$this.hasClass(data.topthat.stickCssClass)) {
            $this.replaceWith(placeholder);
            $this.prependTo("body");
            $this.data(data);
            return $this.addClass(data.topthat.stickCssClass);
          }
        });
      },
      unstick: function() {
        return this.each(function(index, elem) {
          var $this, data;
          $this = $(elem);
          data = $this.data();
          if ($this.hasClass(data.topthat.stickCssClass)) {
            $this.removeClass(data.topthat.stickCssClass);
            placeholder.replaceWith($this);
            return $this.data(data);
          }
        });
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
