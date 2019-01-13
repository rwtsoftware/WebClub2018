
var myMap = {};

var scroller = {  
  newMap: function(window) {
  	myMap = {
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
  	myMap.objects.push({x: x, y: y, html: html, id: myMap.objects.length});
  },

  onSuccess: function(callback) {
  	myMap.successCallback = callback;
  },

  onFailure: function(callback) {
  	myMap.failureCallback = callback;
  },

  draw: function() {
  	for (let o in myMap.objects) {
  	  $(myMap.window).children('.'+o.id).css({top: (o.y * myMap.picture_size) + 'px', left: (o.x * myMap.picture_size) + 'px'});
  	}
  },

  run: function() {
    $(myMap.window).css({position: 'relative', height: '80px', width: '200px', 'background-color': 'gray'}).html('');
  	for (let k in myMap.objects) {
  		let o = myMap.objects[k];
  		console.log(o);
  	  $(myMap.window).append('<div class="'+o.id+'">'+o.html+'</div>')
  	  $(myMap.window).children('.'+o.id).css({
  	  	width: myMap.picture_size + 'px',
  	  	height: myMap.picture_size + 'px',
  	  	top: (o.y * myMap.picture_size) + 'px',
  	  	left: (o.x * myMap.picture_size) + 'px',
  	  	position: 'absolute'
  	  });
  	}
    myMap.interval = setInterval(function() {
      let stillRunning = false;
      for (let o in myMap.objects) {
        o.x--;
        if (o.x >1) {
          stillRunning = true;
        }
      }
      this.draw();
      if (!stillRunning) {
      	clearInterval(myMap.interval);
      	setTimeout(function() {
      	  if (myMap.successCallback) {
      	    myMap.successCallback();
      	  }
      	});
      }
    }, 1000);
  }
};