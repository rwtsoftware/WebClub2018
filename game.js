var PickUpWoodButtonClick = function() {
		if(Number.parseInt($('#wood-fallen-count').text()) <10){
			alert("no wood left");
		}
		
	var current_value = Number.parseInt($('#click-here-count').text());
	$('#click-here-count').text(current_value + 10);
	if(current_value >500){
		$('#click-here-count').text(current_value);	
		$('#click-here-count').addClass('inventory-full');
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
	$('body').append('&#x1f347;');
	
} ;

var changetimeofdayCounter= function() {
	$('body').css('background-color', '#'+Math.floor($('#second-timer-count').text()/10)%10*111111);
};
var buildfire= function() {
$('body').append('&#x1f525;'); 
};
var sellBerries= function() {
};
var setEventHandlers = function() {
  setInterval(changetimeofdayCounter, 30000);
	$('#pick-up-wood-button').click(PickUpWoodButtonClick);
		$('#build-fire-button').click(buildfire);
		$('sell-berries-button').click(sellBerries);
	setInterval(onesecondtimer, 1000);
  $('#collect-berries-button').mouseover(collectberriesButtonClick);
  setInterval(fallenwoodCounter, 1000);
};

$( document ).ready(function() {
    setEventHandlers();
})
('#collect-berries-button')