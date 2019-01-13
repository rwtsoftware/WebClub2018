var scroller = {
  
  map: {},
  
  newMap: function(window) {
  	this.map = {
  	  objects: [],
  	  picture_size: '20px',
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
  	this.map.objects.push({x: x, y: y, html: html, id: map.objects.length});
  },

  onSuccess: function(callback) {
  	this.map.successCallback = callback;
  },

  onFailure: function(callback) {
  	this.map.failureCallback = callback;
  },

  draw: function() {
  	for (let o in this.map.objects) {
  	  $(this.map.window).children('.'+o.id).css({top: (o.y * picture_size) + 'px', left: (o.x * picture_size) + 'px'});
  	}
  },

  run: function() {
    $(this.map.window).css({position: 'relative'});
  	for (let o in this.map.objects) {
  	  $(this.map.window).append(o.html).addClass(o.id).css({top: o.y * this.map.picture_size, left: o.x * this.map.picture_size, position: 'absolute'});
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