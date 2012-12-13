 /*
  * "Add Page Bottom Listener" jQuery plugin
  * v0.1
  * http://github.com/oomlaut/addPageBottomListener
  * Copyright (c) 2012 Paul Gueller
  * Licensed MIT
  */

(function($){
  $.extend({
    addPageBottomListener: function(options, callback){
      var settings = {
        buffer: 0,
        fireOnlyOnce: true
      }
      , fired = false
      , yPosTrigger = $("body").outerHeight()
      ;

      if(arguments.length == 2 ){
        $.extend(true, settings, options);
      } else if ($.isFunction(options)){
        callback = options;
      }

      $(window).bind("scroll", function(){
        var $this = $(this);
        var yPosBottom = $this.height() + $this.scrollTop() + settings.buffer;
        var currentBodyHeight = $("body").outerHeight()
        if(yPosTrigger != currentBodyHeight){
          yPosTrigger = currentBodyHeight;
          fired = false; //reset firing to report on new end of page
        }

        if(!fired && yPosBottom >= yPosTrigger && $.isFunction(callback)){
          callback();
          if(settings.fireOnlyOnce) { fired = true; }
        }
      });

    }
  });
})(jQuery);