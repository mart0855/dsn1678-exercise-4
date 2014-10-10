var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttleSection = $('.shuttle-section');
var $shuttle = $('.shuttle');

var $shipsSection = $('.ships-section');
var $ships = $('.ships img');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 2 + 'px');

	$shipsSection.css('background-position', 'center ' + (scrollPos - 3000) / 2 + 'px');

});

$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, { offset: '50%' });

$shuttleSection.waypoint(function () {
	$shuttle.addClass('js-shuttle-animate');
}, { offset: '50%' });

$shipsSection.waypoint(function () {
	$ships.addClass('js-ships-animate');
}, { offset: '50%' });
