addPageBottomListener
===============

Monitors the scroll progress of a page and fires a specified callback function when the 
relative bottom of the page is reached. Used in cases similar to "infinite" or "endless"
scrolling, but without the overhead of many of the other plugins.

[![endorse](http://api.coderwall.com/oomlaut/endorsecount.png)](http://coderwall.com/oomlaut)

Usage
-----

The generic pattern is:

    $.addPageBottomListener({options}, callback);

Attach a callback function to be fired once the bottom of the page has been scrolled to:

    $.addPageBottomListener(function(){ console.log("Reached the end of the page")});
    
Use the `buffer` option to trigger the event earlier:

    $.addPageBottomListener({buffer: 100}, function(){ console.log("Buffer reached.")});
    
By default, the event only fires the first time the page bottom is reached. To trigger the 
event multiple times:

    $.addPageBottomListener({fireOnlyOnce: false}, function(){ console.log("Fires every time the end of the page is reached.")});


Options
-------

* `buffer`			int		the distance (in pixels) from the bottom of the page that
* `fireOnlyOnce`	bool	whether the event should fire each time bottom is scrolled to or only one time.

**NOTE: fired state resets itself if for any reason the body changes height**

TODO
----

[ ] Explore better way of determining changes to the document or body element other than recalculating height on scroll

[ ] Determine if the event can be attached to different element than the window, document or body

[ ] Determine if any other options are appropriate
