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
  	this.map.objects.push({x: x, y: y, html: html, id: this.map.objects.length});
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
    $(this.map.window).css({position: 'relative', height: '80px', width: '200px', 'background-color': 'gray'});
  	for (let o in this.map.objects) {
  	  $(this.map.window).append('<div>'+o.html+'</div>').addClass(o.id).css({top: (o.y * this.map.picture_size) + 'px', left: (o.x * this.map.picture_size) + 'px', position: 'absolute'});
  	}
    this.map.interval = setInterval(function() {
      let stillRunning = false;
      for (let o in this.map.objects) {
        o.x--;
        if (o.x >1) {
          stillRunning = true;
        }
      }
      if (!stillRunning) {
      	clearInterval(this.map.interval);
      	setTimeout(function() {
      	  if (this.map.successCallback) {
      	    this.map.successCallback();
      	  }
      	});
      }
    }, 1000);
  }
};