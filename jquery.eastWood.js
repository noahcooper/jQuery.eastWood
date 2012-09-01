/*
 * Copyright (c) 2012 Noah Cooper (<noah.cooper@hotmail.com>)  
 * Dual licensed under MIT and GPL licenses (<http://projects.iamnoahcooper.com/license>)  
 * Version: 1.0 (01-SEP-2012)
 */

(function($) {
  $.fn.eastWood = function() {
    var $obamas = this;
    
    $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=empty%20chair&jsoncallback=?', function(data) {
      var chairs = data.items.sort(function() {return 0.5 - Math.random()}), 
      daysMade = 0;
      
      $obamas.each(function() {
        if(!chairs[daysMade]) {
          daysMade = 0;
        }
        
        var $obama = $(this), 
        chair = chairs[daysMade].media.m.replace('_m.', '.');
        
        $obama.attr('src', chair).attr('alt', 'GET OFF MY LAWN');
      });
    });
  };
})(jQuery);