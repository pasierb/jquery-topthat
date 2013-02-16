(($) ->
  
  defaults = stickCssClass: "fixed-top"

  placeholder = $("<div style='display:none;' class='topthat-ph-" + Date.now() + "'></div>")
  
  methods =
    init: (options) ->
      settings = $.extend defaults, options

      @each (index, elem) ->
        $this = $(elem)
        initialPosition = $this.offset()
        initialHeight = $this.height()
        
        $this.data 'topthat', settings
        $(window).scroll (event) ->
          console.log $this
          if $(window).scrollTop() > initialPosition.top then $this.topthat("stick") else $this.topthat("unstick")


    stick: ->
      @each (index, elem) ->
        $this = $(elem)
        data = $this.data()
        unless $this.hasClass data.topthat.stickCssClass
          $this.replaceWith placeholder
          $this.prependTo "body"
          $this.data data
          $this.addClass data.topthat.stickCssClass

    unstick: ->
      @each (index, elem) ->
        $this = $(elem)
        data = $this.data()
        if $this.hasClass data.topthat.stickCssClass
          $this.removeClass data.topthat.stickCssClass
          placeholder.replaceWith $this
          $this.data data

  
  $.fn.topthat = (method) ->
    if methods[method]
      methods[method].apply this, Array::slice.call(arguments, 1)
    else if typeof method is "object" or not method
      methods.init.apply this, arguments
    else
      $.error "Method " + method + " does not exist on jQuery.topthat"

) jQuery