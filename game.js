
/*
Todos:
	
	Limit Berries
	Add berries ready to be picked
*/
var PickUpWoodButtonClick = function() {
  // If wood fallen count less then 10 alert and quit function
  if(Number.parseInt($('#wood-fallen-count').text()) <10){
   alert("no wood found in forest");
    return;
  }
increaseWoodCount();
   // Decrease Wood Fallen
  current_value = Number.parseInt($('#wood-fallen-count').text());
  $('#wood-fallen-count').text(current_value -10);
};


	var displayalert= function(alerttext) {
     $('#game-div').css('visibility', 'hidden');
     $('#warning').show();
     $('#inventory-div').hide();
     $('#button-div').hide();
     $('#emoji-div').hide();
   
	}



var increaseWoodCount= function(){
	 // Increase Wood Collected
  var current_value = Number.parseInt($('#wood-collected-count').text());
  $('#wood-collected-count').text(current_value + 10);

  // If more then 10 mark inventory full
//  if(current_value >10){
   // $('#wood-collected-count').text(current_value);	
//    $('#wood-collected-count').addClass('inventory-full');
// }


};
var setstartingvalue = function(){
  // This can be used to reset values
  $('#Health-count-').text(10);
};

var onesecondtimer = function() {
  // Increase second timer by 1
  var current_value = Number.parseInt($('#second-timer-count').text());
  $('#second-timer-count').text(current_value + 1);
};

var fallenwoodCounter = function() {
  // Increase Fallen wood count by 1
  var current_value = Number.parseInt($('#wood-fallen-count').text());
  $('#wood-fallen-count').text(current_value + 1);
};

var berryAvailableCounter = function() {
  // Increase berries avaliable by 1
  var current_value = Number.parseInt($('#berries-available-count').text());
  $('#berries-available-count').text(current_value + 1);
};

var carAvailableCounter = function() {
  // Increase cars avaliable by 1
  var current_value = Number.parseInt($('#cars-collected-count').text());
  $('#cars-collected-count').text(current_value + 1);
};

var collectberriesButtonClick = function() {
  // If verries avaliable less then 10 alert and quit function
  if(Number.parseInt($('#berries-available-count').text()) <10){
    alert("not enough berries available in forest");
    return;
  }
  //If you run over wood your wood count goes up
  // Get car count
  var car_value = Number.parseInt($('#cars-collected-count').text());
  
  // Increase berries collected by 10 and by car count
	var current_value = Number.parseInt($('#berries-collected-count').text());
  $('#berries-collected-count').text(current_value + 10 + car_value);
  
  // Decrease berries collected by 10
  current_value = Number.parseInt($('#berries-available-count').text());
  $('#berries-available-count').text(current_value - 10);

  // Add berries icon
  $('#emoji-div').append('&#x1f347;');
} ;

var changetimeofdayCounter= function() {
  // Get health count
  var current_value = Number.parseInt($('#Health-count-').text());

  // If health count is large set background to green
  if (current_value >= 67){
    $('body').css('background-color','green');
  // If health count is medium set background to yellow
  } else if (current_value < 67 && current_value >= 34){
    $('body').css('background-color','yellow');
  // If health count is low set background to red
  }else {
 	$('body').css('background-color','red');
  }

  // decrease fitre 
  fireDieDown();
};

var fireDieDown = function() {
  // Darken suroundings
  var originalOpacity = $('#mouse-div').css("opacity");
  $('#mouse-div').css("opacity", originalOpacity /.99); 
}

var buildfire= function() {
  // If wood collected count is less then 10 alert and quit function
  if(Number.parseInt($('#wood-collected-count').text()) <10){
    alert("no wood collected left");
    return;
  }

  // Decrease wood by 5
  current_value = Number.parseInt($('#wood-collected-count').text());
  $('#wood-collected-count').text(current_value - 5);

  // Lighten suroundings
  var originalOpacity = $('#mouse-div').css("opacity");
  $('#mouse-div').css("opacity", originalOpacity * .9);

  // Add wood icon
  $('#emoji-div').append('&#x1f525;'); 
};

var setSpotlightTracking = function() {
  // Setup dark overlay for fire spotlight
  $('#mouse-div').css("top", 0-5040);
  $('#mouse-div').css("left", 0-5040)
  $(document).mousemove(function (e) {
    $('#mouse-div').css("top", e.pageY-5040);
    $('#mouse-div').css("left", e.pageX-5040)
  });
};

var GetMoney = function() {
  // Increase money by 10
  var current_value = Number.parseInt($('#Money-count').text());
  $('#Money-count').text(current_value + 10);
};

var sellwood=function() {
  // Decrease wood by 9 and if successful increase money by 10
  if (DecreasewoodCount(9)) {
    var current_value = Number.parseInt($('#Money-count').text());
    $('#Money-count').text(current_value + 10);
  }	
};
var Sellcarbutton=function() {
  // Decrease car by 1 and if successful increase money by 100
  if (DecreasecarCount(1)) {
    var current_value = Number.parseInt($('#Money-count').text());
    $('#Money-count').text(current_value + 100);
  }	
};


var Sellberriesbutton = function() {
  // Decrease Berries and if successful increase money by 10
  if (DecreaseBerryCount(1)) {
    var current_value = Number.parseInt($('#Money-count').text());
    $('#Money-count').text(current_value + 10 );
  }
};

var Eat5Berriesbutton = function() {
  // Decrease Berries and if successful increase money by 10
  if (DecreaseBerryCount(5)) {
    var current_value = Number.parseInt($('#Health-count-').text());
    $('#Health-count-').text(current_value + 10);
  }
};



var startCarUp = function() {
  var current_value = Number.parseInt($('#cars-collected-count').text());
  if (current_value>0){
    runMap();
  }
};

var healthButtonClick = function() {
  // Decrease Berries and if successful increase health count
  if (DecreaseBerryCount(1)) {
  	// If health is less the 99 then increase health by 2
    var current_value = Number.parseInt($('#Health-count-').text()); 
    if (current_value<99){
      $('#Health-count-').text(current_value + 2);
    }
  }
};

var DecreaseBerryCount=function(count ) {
  // If berries collected count is less then 1 alert and return failure
  if(Number.parseInt($('#berries-collected-count').text()) <count){
    alert("no berries found in forest ");
    return false;
  }

  // Decrease berries by 1 and return success
  var current_value2 = Number.parseInt($('#berries-collected-count').text());
  $('#berries-collected-count').text(current_value2 - count);
  return true;  
};

var DecreasewoodCount=function(count) {
  // If wood collected count  is less the parameter then alert and return failure
  if(Number.parseInt($('#wood-collected-count').text()) <count){
    alert("get some wood with skins #fortnite");
    return false ;
  }
   // Decrease wood collected count by parameter and return success
  var current_value2 = Number.parseInt($('#wood-collected-count').text());
  $('#wood-collected-count').text(current_value2 - count);
  return true;  
};
var DecreasecarCount=function(count) {

  // If car collected count  is less the parameter then alert and return failure
  if(Number.parseInt($('#cars-collected-count').text()) <1){
    alert("get some v bucks for skins #fortnite");
    return false ;
  }

  // Decrease car collected count by parameter and return success
  var current_value2 = Number.parseInt($('#cars-collected-count').text());

  $('#cars-collected-count').text(current_value2 - count);
  return true;  
};


var DecreaseMoney=function(count) {
  // If money count is less then parameter then alert and reutn failure
  if(Number.parseInt($('#Money-count').text()) <count){
    alert("you are missing money");
    return false ;
  }

  // Decrease money count by parameter and return success
	 	var current_value2 = Number.parseInt($('#Money-count').text());
  $('#Money-count').text(current_value2 - count);
  return true;  
};

var BuildCar=function(){
  // If decrease money and wood successful then add car and drive
  if(DecreaseMoney(100) && DecreasewoodCount(24)) {
	  carAvailableCounter();
	  $('#emoji-div').append('<img src="car.png">');
    //runMap()
  }
};


//var buildCarHelp=function(){
  // If decrease money and wood successful then add car and drive
// $('#build-a-car-button'}.title='todo'   	
//};


var buildHouse=function(){
  // If decrease money and wood successful then add car and drive
  if(DecreaseMoney(2) && DecreasewoodCount(9)) {
  	var current_value = Number.parseInt($('#-house-available-count').text());
  $('#-house-available-count').text(current_value + 10 );
  
	//carAvailableCounter();
	//$('#emoji-div').append('<img src="car.png">');
    //runMap()
    alert('you built a house');
  }	
};

var Decreasehealth=function( ) {
  // if no more health out end game and return failure
  if (Number.parseInt($('#Health-count-').text()) <1) {
    $('#gameover-div').css('visibility', 'visible');
    $('#game-div').css('visibility', 'hidden');
    $('#game-over').show();
    $('#inventory-div').hide();
    $('#button-div').hide();
    $('#emoji-div').hide();
    return false ;
  }

  // Decrease health by 1 and return success
  var current_value2 = Number.parseInt($('#Health-count-').text());
  $('#Health-count-').text(current_value2 - 1);
  return true;  
};

var restartgame=function( ) {
  // Resart the game after you died
  setstartingvalue();
  $('#gameover-div').css('visibility', 'hidden');
  $('#game-div').css('visibility', 'visible');
};
var RunOverBerries = function() {
	var current_value = Number.parseInt($('#berries-collected-count').text());
  $('#berries-collected-count').text(current_value + 10 );
  
};
var RunOverHole = function(map) {
  return function() {
	map.killcar();
	var current_value = Number.parseInt($('#berries-collected-count').text());
    $('#berries-collected-count').text(current_value - 10 );
  	var current_value = Number.parseInt($('#cars-collected-count').text());
    $('#cars-collected-count').text(current_value - 1 );
  }
};	

var runMap = function() {

  // Setup map and start driving
  scroller.newMap($('#road-div'), '<img src="car.png">');

var WOOD ='&#x1f332;';
     scroller.addObject(5,3,WOOD,increaseWoodCount);
 scroller.addObject(5,3,WOOD,increaseWoodCount);
  scroller.addObject(18,4,WOOD,increaseWoodCount);
   scroller.addObject(36,3,WOOD,increaseWoodCount);
    scroller.run();
	

 var BERRY='&#x1f347;';
 scroller.addObject(4,1,BERRY,RunOverBerries);
    scroller.addObject(50,2,BERRY,RunOverBerries);
    scroller.addObject(6,2,BERRY,RunOverBerries);
    scroller.addObject(10,3,BERRY,RunOverBerries);
    scroller.addObject(7,1,BERRY,RunOverBerries);
    scroller.addObject(5,2,BERRY,RunOverBerries);
    scroller.addObject(6,3,BERRY,RunOverBerries);
    
    
    var BALENONTHETRACK='&#x1f573;';
    scroller.addObject(18,3,BALENONTHETRACK,RunOverHole(scroller));
     scroller.addObject(18,8,BALENONTHETRACK,RunOverHole(scroller));
 scroller.addObject(30,4,BALENONTHETRACK,RunOverHole(scroller));

  scroller.run();

};
     

var setEventHandlers = function() {
  // This tells the program which functions to call when
  $('#gameover-div').css('visibility', 'hidden');
  setInterval(changetimeofdayCounter, 1000);
  $('#pick-up-wood-button').click(PickUpWoodButtonClick);
  $('#build-fire-button').click(buildfire);
  $('#sell-wood').click(sellwood);
  $('#sell-car').click(Sellcarbutton);
  $('#build-a-car-button').click(BuildCar);
  //$('#build-a-car-button').onmouseover(buildCar);
  $('#get-money-button').keypress(GetMoney);
  setInterval(onesecondtimer,1000);
  setInterval(Decreasehealth,1000);
  $('#collect-berries-button').click(collectberriesButtonClick);
  $('#sell-berries-button').click(Sellberriesbutton);
  $('#x5-berries-button').click(Eat5Berriesbutton);
  $('#restart-button').click(restartgame);
  $('#game-over').hide();
   $('#warning').hide();
  setInterval(fallenwoodCounter,1000);
  setInterval(berryAvailableCounter,1000);
  $('#Health').click(healthButtonClick);
 $('#start-up-car-button').click(startCarUp);
 $('#build-house-button').click(buildHouse);
  // Turn on spolight/firelight
  setSpotlightTracking();

  // Start out driving
  //runMap();
};

$( document ).ready(function() {
  setEventHandlers();
});
