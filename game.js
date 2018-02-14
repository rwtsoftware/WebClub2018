var clickHereButtonHandler = function() {
	var current_value = Number.parseInt($('#click-here-count').text());
	$('#click-here-count').text(current_value + 100000000000000000000);
};

var secondCounterHandler = function() {
    var current_value = Number.parseInt($('#second-timer-count').text());
    $('#second-timer-count').text(current_value + 10);
};

var setEventHandlers = function() {
	$('#click-here-button').click(clickHereButtonHandler);
	setInterval(secondCounterHandler, 1000);
};

$( document ).ready(function() {
    setEventHandlers();
});
