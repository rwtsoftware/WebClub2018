

/*
Todos:
	Limit health to 100
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

var onesecondtimer = function() {
  var current_value = Number.parseInt($('#second-timer-count').text());
  $('#second-timer-count').text(current_value + 1);
};
var fallenwoodCounter = function() {
  var current_value = Number.parseInt($('#wood-fallen-count').text());
  $('#wood-fallen-count').text(current_value + 1);
};

var collectberriesButtonClick = function() { 
	var current_value = Number.parseInt($('#berries-collected-count').text());
  $('#berries-collected-count').text(current_value + 10);
	
 $('#emoji-div').append('&#x1f347;');
} ;

var changetimeofdayCounter= function() {
  $('body').css('background-color', '#'+Math.floor($('#second-timer-count').text()/10)%10*111111);
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
  console.log(originalOpacity);
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
  if(	DecreasewoodCount()){
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
	 $('#Health-count-').text(current_value + 2);
 }
};
var DecreaseBerryCount=function( ) {
 if(Number.parseInt($('#berries-collected-count').text()) <1){
    alert("no berries found in forest ");
    return false ;
}
	 	var current_value2 = Number.parseInt($('#berries-collected-count').text());
  $('#berries-collected-count').text(current_value2 - 1);
   return true;  
};
var DecreasewoodCount=function( ) {
 if(Number.parseInt($('#wood-collected-count').text()) <1){
    alert("no berries found in forest ");
    return false ;
}
	 	var current_value2 = Number.parseInt($('#wood-collected-count').text());
  $('#wood-collected-count').text(current_value2 - 1);
   return true;  
};
var Decreasehealth=function( ) {
 if(Number.parseInt($('#Health-count-').text()) <1){
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
var setEventHandlers = function() {
  setInterval(changetimeofdayCounter, 30000);
  $('#pick-up-wood-button').click(PickUpWoodButtonClick);
  $('#build-fire-button').click(buildfire);
  $('#sell-wood').click(sellwood);
  $('#get-money-button').keypress(GetMoney);
  setInterval(onesecondtimer,1000);
  setInterval(Decreasehealth,1000);
  $('#collect-berries-button').click(collectberriesButtonClick);
 $('#sell-berries-button').click(Sellberriesbutton);
   $('#game-over').hide();

  setInterval(fallenwoodCounter,1000);
  setSpotlightTracking();
    $('#Health').click(healthButtonClick);
};
$( document ).ready(function() {
  setEventHandlers();
});
