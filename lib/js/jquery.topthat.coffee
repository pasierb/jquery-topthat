(($) ->
  
  defaults = stickCssClass: "fixed-top"

  placeholder = $("<div style='display:none;' class='topthat-ph-" + Date.now() + "'></div>")
  
  methods =
    stick: ->
      return if @hasClass(defaults.stickCssClass)
      @replaceWith placeholder
      @prependTo "body"
      @addClass defaults.stickCssClass

    unstick: ->
      return unless @hasClass(defaults.stickCssClass)
      @removeClass defaults.stickCssClass
      placeholder.replaceWith this

  
  $.fn.topthat = ->
    that = this
    initialPosition = that.offset()
    initialHeight = that.height()
   
    $(window).scroll (event) ->
      (if $(window).scrollTop() > (initialPosition.top + initialHeight) then methods.stick.apply(that) else methods.unstick.apply(that))

) jQuery