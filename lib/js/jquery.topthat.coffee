(($) ->
  
  defaults = stickCssClass: "fixed-top"

  placeholder = $("<div style='display:none;' class='topthat-ph-" + Date.now() + "'></div>")
  
  methods =
    init: (options) ->
      that = this
      initialPosition = that.offset()
      initialHeight = that.height()

      @.each (index, elem) ->
        $(window).scroll (event) ->
          (if $(window).scrollTop() > (initialPosition.top + initialHeight) then methods.stick.apply(that) else methods.unstick.apply(that))

    stick: ->
      return if @hasClass(defaults.stickCssClass)
      @replaceWith placeholder
      @prependTo "body"
      @addClass defaults.stickCssClass

    unstick: ->
      return unless @hasClass(defaults.stickCssClass)
      @removeClass defaults.stickCssClass
      placeholder.replaceWith this

  
  $.fn.topthat = (method) ->
    if methods[method]
      methods[method].apply this, Array::slice.call(arguments, 1)
    else if typeof method is "object" or not method
      methods.init.apply this, arguments
    else
      $.error "Method " + method + " does not exist on jQuery.topthat"

) jQuery