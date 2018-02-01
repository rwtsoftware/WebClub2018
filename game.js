var PickUpWoodButtonClick = function() {
	var current_value = Number.parseInt($('#click-here-count').text());
	$('#click-here-count').text(current_value + 10);
};

var secondCounterHandler = function() {
    var current_value = Number.parseInt($('#second-timer-count').text());
    $('one secondtimer').text(current_value + 10000000000000000000000000);
};

var setEventHandlers = function() {
	$('#click-here-button').click(PickUpWoodButtonClick);
	setInterval(secondCounterHandler, 1000);
};

$( document ).ready(function() {
    setEventHandlers();
});
