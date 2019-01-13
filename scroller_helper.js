
var myMap = {};


var draw = function(myMap) {
  for (let k in myMap.objects) {
    let o = myMap.objects[k];
    $(myMap.window).children('.'+o.id).css({
      top: (o.y * myMap.picture_size) + 'px',
      left: (o.x * myMap.picture_size) + 'px'
    });
  }
  drawPlayer(myMap);
};

var drawPlayer = function(myMap) {
  $(myMap.window).children('.player').css({
  	top: (myMap.player.y * myMap.picture_size) + 'px',
  	left: (myMap.player.x * myMap.picture_size) + 'px'
  });	
}

var scroller = {  
  newMap: function(window, html) {
  	myMap = {
  	  objects: [],
  	  picture_size: '20',
  	  visible_width: '20',
  	  visible_height: '5',
  	  player: {x: 0, y: 0, html: html},
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
    $(myMap.window).css({
      position: 'relative',
      height: (myMap.picture_size * myMap.visible_height) + 'px',
      width: (myMap.picture_size * myMap.visible_width) + 'px',
      'background-color': 'gray',
      overflow: 'hidden',
      'z-index': -1
    })
	    .attr('tabindex', '0')
	    .html('')
	    .focus();
	$(window)
	    .keypress(function( event ) {
	    	console.log(event);
	      if (event.which === 38) {
	        myMap.player.y--;
	      }
	       if (event.which === 115) {
	        myMap.player.y++;
	      }
	      if (event.which === 37) {
	        myMap.player.x--;
	      }
	      if (event.which === 39) {
	        myMap.player.x++;
	      }
	      drawPlayer(myMap);
	    })
    $(myMap.window).append('<div class="player">'+myMap.player.html+'</div>')
      .css({
      	width: myMap.picture_size + 'px',
  	  	height: myMap.picture_size + 'px',
  	  	top: (myMap.player.y * myMap.picture_size) + 'px',
  	  	left: (myMap.player.x * myMap.picture_size) + 'px',
  	  	position: 'absolute'
      })
  	for (let k in myMap.objects) {
  	  let o = myMap.objects[k];
  	  $(myMap.window).append('<div class="'+o.id+'">'+o.html+'</div>');
  	  $(myMap.window).children('.'+o.id).css({
  	  	width: myMap.picture_size + 'px',
  	  	height: myMap.picture_size + 'px',
  	  	top: (o.y * myMap.picture_size) + 'px',
  	  	left: (o.x * myMap.picture_size) + 'px',
  	  	position: 'absolute'
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