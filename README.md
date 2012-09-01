jQuery.eastWood
===============================

Copyright (c) 2012 Noah Cooper (<noah.cooper@hotmail.com>)  
Dual licensed under MIT and GPL licenses (<http://projects.iamnoahcooper.com/license>)  
Version: 1.0 (01-SEP-2012)

With jQuery.eastWood, you can tell POTUS to *get off your lawn*.

This plugin replaces any photo of Obama with a photo of an empty chair from Flickr.

For example, the following could be used to eastWood [the President's bio](http://www.whitehouse.gov/administration/president-obama):

```  js
$('#admin-official-image img').eastWood();
```

No seriously, try it -- go to http://www.whitehouse.gov/administration/president-obama, open a JavaScript console, and copy and paste:

```  js
(function(a){a.fn.eastWood=function(){var b=this;
a.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=empty%20chair&jsoncallback=?",
function(c){var d=c.items.sort(function(){return.5-Math.random()}),e=0;b.each(function(){if(!d[e]){e=0}
var b=a(this),c=d[e].media.m.replace("_m.",".");b.attr("src",c).attr("alt","GET OFF MY LAWN")})})}})(jQuery);
$("#admin-official-image img").eastWood()
```