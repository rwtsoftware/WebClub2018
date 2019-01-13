
var myMap = {};


var draw = function(myMap) {
  for (let k in myMap.objects) {
  	console.log('here2');
    let o = myMap.objects[k];
    console.log(o);
    console.log($(myMap.window).children('.'+o.id));
    console.log(o.y * myMap.picture_size);
    $(myMap.window).children('.'+o.id).css({
      top: (o.y * myMap.picture_size) + 'px',
      left: (o.x * myMap.picture_size) + 'px'
    });
  }
};

var scroller = {  
  newMap: function(window) {
  	myMap = {
  	  objects: [],
  	  picture_size: '20',
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

  run: function() {
    $(myMap.window).css({position: 'relative', height: '80px', width: '200px', 'background-color': 'gray'}).html('');
  	for (let k in myMap.objects) {
  	  let o = myMap.objects[k];
  	  $(myMap.window).append('<div class="'+o.id+'">'+o.html+'</div>');
  	  $(myMap.window).children('.'+o.id).css({
  	  	width: myMap.picture_size + 'px',
  	  	height: myMap.picture_size + 'px',
  	  	top: (o.y * myMap.picture_size) + 'px',
  	  	left: (o.x * myMap.picture_size) + 'px',
  	  	position: 'absolute',
  	  	overflow: 'hidden'
  	  });
  	}
    myMap.interval = setInterval(function() {
    	console.log('here');
      let stillRunning = false;
      for (let k in myMap.objects) {
        myMap.objects[k].x--;
        if (myMap.objects[k].x > -2) {
          stillRunning = true;
        }
      }
      this.draw(myMap);
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