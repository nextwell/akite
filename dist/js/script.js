$(document).ready(() => {
	console.log("loaded");
	console.log("1234");
	$(".header-navigation-item-action").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1100);

    });
})