var PickUpWoodButtonClick = function() {
	var current_value = Number.parseInt($('#click-here-count').text());
	$('#click-here-count').text(current_value + 10);
	if(current_value >500){
		$('#click-here-count').text(current_value);	
	}
};

var secondCounterHandler = function() {
    var current_value = Number.parseInt($('#second-timer-count').text());
    $('#second-timer-count').text(current_value + 1);
};
var fallenwoodCounter = function() {
    var current_value = Number.parseInt($('#wood-fallen-count').text());
    $('#wood-fallen-count').text(current_value + 1);
};

var setEventHandlers = function() {
	$('#click-here-button').click(PickUpWoodButtonClick);
	setInterval(one second timer, 1000);
    setInterval(fallenwoodCounter, 1000);
};

$( document ).ready(function() {
    setEventHandlers();
});
