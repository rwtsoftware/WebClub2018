var scroller = require('./scroller_helper.js')();

/*
Todos:
	
	Limit Berries
	Add berries ready to be picked
*/
var PickUpWoodButtonClick = function() {
  if(Number.parseInt($('#wood-fallen-count').text()) <10){
    alert("no wood found in forest");
    return;
  }

  var current_value = Number.parseInt($('#wood-collected-count').text());
  $('#wood-collected-count').text(current_value + 10);
  if(current_value >10){
    $('#wood-collected-count').text(current_value);	
    $('#wood-collected-count').addClass('inventory-full');
  }
  current_value = Number.parseInt($('#wood-fallen-count').text());
  $('#wood-fallen-count').text(current_value - 10);
};
var setstartingvalue = function(){
		 $('#Health-count-').text(10);
}
var onesecondtimer = function() {
  var current_value = Number.parseInt($('#second-timer-count').text());
  $('#second-timer-count').text(current_value + 1);
};
var fallenwoodCounter = function() {
  var current_value = Number.parseInt($('#wood-fallen-count').text());
  $('#wood-fallen-count').text(current_value + 1);
};
var berryAvailableCounter = function() {
  var current_value = Number.parseInt($('#berries-available-count').text());
  $('#berries-available-count').text(current_value + 1);
};
var carAvailableCounter = function() {
  var current_value = Number.parseInt($('#cars-collected-count').text());
  $('#cars-collected-count').text(current_value + 1);
};


var collectberriesButtonClick = function() { 
	 if(Number.parseInt($('#berries-available-count').text()) <10){
    alert("not enough berries available in forest");
    return;
  }
  var car_value = Number.parseInt($('#cars-collected-count').text());
  
	var current_value = Number.parseInt($('#berries-collected-count').text());
  $('#berries-collected-count').text(current_value + 10 + car_value);
  
   current_value = Number.parseInt($('#berries-available-count').text());
  $('#berries-available-count').text(current_value - 10);
	
 $('#emoji-div').append('&#x1f347;');
} ;

var changetimeofdayCounter= function() { 
	var current_value = Number.parseInt($('#Health-count-').text()); 
 if (current_value >= 67){
   $('body').css('background-color','green');
 } else if (current_value < 67 && current_value >= 34){
 	 $('body').css('background-color','yellow');
 }else {
 	$('body').css('background-color','red');
 }
  var originalOpacity = $('#mouse-div').css("opacity");
  console.log(originalOpacity);
  $('#mouse-div').css("opacity", originalOpacity /.9); 
};
var buildfire= function() {
  if(Number.parseInt($('#wood-collected-count').text()) <10){
    alert("no wood collected left");
    return;
  }

  current_value = Number.parseInt($('#wood-collected-count').text());
  $('#wood-collected-count').text(current_value - 5);

  $('#emoji-div').append('&#x1f525;'); 
  var originalOpacity = $('#mouse-div').css("opacity");
  $('#mouse-div').css("opacity", originalOpacity * .9);
};

var setSpotlightTracking = function() {
  $('#mouse-div').css("top", 0-5040);
  $('#mouse-div').css("left", 0-5040)
  $(document).mousemove(function (e) {
    $('#mouse-div').css("top", e.pageY-5040);
    $('#mouse-div').css("left", e.pageX-5040)
  });
};

var GetMoney = function() {
		var current_value = Number.parseInt($('#Money-count').text());
  $('#Money-count').text(current_value + 10);

 
};
var sellwood=function() {
  if(	DecreasewoodCount(9)){
		var current_value = Number.parseInt($('#Money-count').text());
    $('#Money-count').text(current_value + 10);
  }	
};
var Sellberriesbutton = function() {
 if(	DecreaseBerryCount()){
		var current_value = Number.parseInt($('#Money-count').text());
  $('#Money-count').text(current_value + 10);}

 
};
var healthButtonClick = function() {
  if	(DecreaseBerryCount()){
    var current_value = Number.parseInt($('#Health-count-').text()); 
    if (current_value<99){
      $('#Health-count-').text(current_value + 2);
    }
  }
}
var DecreaseBerryCount=function( ) {
 if(Number.parseInt($('#berries-collected-count').text()) <1){
    alert("no berries found in forest ");
    return false ;
}
	 	var current_value2 = Number.parseInt($('#berries-collected-count').text());
  $('#berries-collected-count').text(current_value2 - 1);
   return true;  
};
var DecreasewoodCount=function(count) {
 if(Number.parseInt($('#wood-collected-count').text()) <count){
    alert("you are missing wood broke boy");
    return false ;
}
	 	var current_value2 = Number.parseInt($('#wood-collected-count').text());
  $('#wood-collected-count').text(current_value2 - count);
   return true;  
};
var DecreaseMoney=function(count) {
 if(Number.parseInt($('#Money-count').text()) <count){
    alert("you are missing big bucks");
    return false ;
}
	 	var current_value2 = Number.parseInt($('#Money-count').text());
  $('#Money-count').text(current_value2 - count);
   return true;  
};
var BuildCar=function(){
	 if(DecreaseMoney(2) && DecreasewoodCount(9)){
	 	carAvailableCounter();
	 	$('#emoji-div').append('<img src="car.png">');

  }	
};
var Decreasehealth=function( ) {
 if(Number.parseInt($('#Health-count-').text()) <1){
    $('#gameover-div').css('visibility', 'visible');
    $('#game-div').css('visibility', 'hidden');
   $('#game-over').show();
 $('#inventory-div').hide();
  $('#button-div').hide();
    $('#emoji-div').hide();
    return false ;
}
	 	var current_value2 = Number.parseInt($('#Health-count-').text());
  $('#Health-count-').text(current_value2 - 1);
   return true;  
};
var restartgame=function( ) {
	 setstartingvalue();
	  $('#gameover-div').css('visibility', 'hidden');
    $('#game-div').css('visibility', 'visible');
}

var runMap() {
  scroller.newMap($('#road-div'));
  scroller.addObject(4,1,'&#x1f347;');
  scroller.addObject(6,2,'&#x1f347;');
  scroller.run();
}

var setEventHandlers = function() {
	$('#gameover-div').css('visibility', 'hidden');
  setInterval(changetimeofdayCounter, 1000);
  $('#pick-up-wood-button').click(PickUpWoodButtonClick);
  $('#build-fire-button').click(buildfire);
  $('#sell-wood').click(sellwood);
  $('#build-a-car-button').click(BuildCar);
  $('#get-money-button').keypress(GetMoney);
  setInterval(onesecondtimer,1000);
  setInterval(Decreasehealth,1000);
  $('#collect-berries-button').click(collectberriesButtonClick);
 $('#sell-berries-button').click(Sellberriesbutton);
  $('#restart-button').click(restartgame);
   $('#game-over').hide();
  setInterval(fallenwoodCounter,1000);
  setInterval(berryAvailableCounter,1000);
  setSpotlightTracking();
    $('#Health').click(healthButtonClick);
  runMap();
};
$( document ).ready(function() {
  setEventHandlers();
});
