(($) ->
  
  
  methods =
    init: (options) ->
      defaults = 
        stickCssClass: "fixed-top"
        prependTo: "body"
        placeholder: $("<div style='display:none;' class='topthat-ph-" + Date.now() + "'></div>")
      
      settings = $.extend defaults, options

      @each (index, elem) ->
        $this = $(elem)
        initialPosition = $this.offset()
        initialHeight = $this.height()
        
        $this.data 'topthat', settings
        $(window).scroll (event) ->
          if $(window).scrollTop() > initialPosition.top then $this.topthat("stick") else $this.topthat("unstick")


    stick: ->
      @each (index, elem) ->
        $this = $(elem)
        data = $this.data()
        unless $this.hasClass data.topthat.stickCssClass
          if data.topthat.prependTo
            $this.replaceWith data.topthat.placeholder
            $this.prependTo data.topthat.prependTo
          $this.data data
          $this.addClass data.topthat.stickCssClass
          data.topthat.onStick.apply(elem) if typeof data.topthat.onStick is "function"

    unstick: ->
      @each (index, elem) ->
        $this = $(elem)
        data = $this.data()
        if $this.hasClass data.topthat.stickCssClass
          $this.removeClass data.topthat.stickCssClass
          if data.topthat.prependTo
            data.topthat.placeholder.replaceWith $this
          $this.data data
          data.topthat.onUnstick.apply(elem) if typeof data.topthat.onUnstick is "function"
          elem.className = elem.className
      body = document.getElementsByTagName('body')[0]
      body.className = body.className
      return this
  
  $.fn.topthat = (method) ->
    if methods[method]
      methods[method].apply this, Array::slice.call(arguments, 1)
    else if typeof method is "object" or not method
      methods.init.apply this, arguments
    else
      $.error "Method " + method + " does not exist on jQuery.topthat"

) jQuery