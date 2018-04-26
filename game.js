var PickUpWoodButtonClick = function() {
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
};

var setEventHandlers = function() {
  setInterval(changetimeofdayCounter, 30000);
	$('#pick-up-wood-button').click(PickUpWoodButtonClick);
	setInterval(onesecondtimer, 1000);
  $('#collect-berries-button').mouseover(collectberriesButtonClick);
  setInterval(fallenwoodCounter, 1000);
};

$( document ).ready(function() {
    setEventHandlers();
});