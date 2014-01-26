var ad = 190;  //animation duration in milliseconds


$('.collapseAll').click(function () {
	$('.expands').slideUp(ad);
});
$('.expand').click(function () {
	//expand only the first
	$('.expands').eq(0).slideDown(ad);
	//try commenting the line above and uncommenting the one below. It does the same thing, but using a css selector instead of eq.
	//$('.expands:first').slideDown(ad);
});

var shownext = function (theobj) {
	//notice children goes only one layer into the dom
	$(theobj).children('.expands').slideDown(ad);
}

$('.button.opennext').click(function () {
	//pass the shownext function the parent element of this button.
	//in this case, the parent element is a div with class 'expands'
	shownext($(this).parent());
});

var closethis = function (theobj) {
	//notice 'find' travels DOWN the whole dom tree
	$(theobj).find('.expands').slideUp(ad);
	$(theobj).slideUp(ad);
}

$('.button.closethis').click(function () {
	closethis($(this).parent());
});