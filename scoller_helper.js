var scroller = {
  
  map: {},
  picture_size: '20px',
  
  newMap: function(window) {
  	map = {
  	  objects: [],
  	  window: window,
  	  successCallback: null,
  	  failureCallback: null,
  	  fail: function() {
        this.objects = [];
        this.failureCallback();
  	  }
  	}
  },
  
  addObject: function(x, y, html) {
  	map.objects.push({x: x, y: y, html: html, id: map.objects.length});
  },

  onSuccess: function(callback) {
  	map.successCallback = callback;
  },

  onFailure: function(callback) {
  	map.failureCallback = callback;
  },

  draw: function() {
  	for (let o in map.objects) {
  	  $(map.window).children('.'+o.id).css({top: o.y * picture_size, left: o.x * picture_size});
  	}
  },

  run: function() {
    $(map.window).css({position: 'relative'});
  	for (let o in map.objects) {
  	  $(map.window).append(o.html).addClass(o.id).css({top: o.y * picture_size, left: o.x * picture_size, position: 'absolute'});
  	}
    map.interval = setInterval(function() {
      stillRunning = false;
      for (let o in map.objects) {
        o.x--;
        if (o.x >1) {
          stillRunning = true;
        }
      }
      if (!stillRunning) {
      	clearInterval(map.interval);
      	setTimeout(function() {
      	  if (map.successCallback) {
      	    map.successCallback();
      	  }
      	});
      }
    }, 1000);
  }
};