var winW = $(window).width();
    
function fontSize(winW) {
    var fontSize = 0;
    (winW < 560) ? fontSize = winW / 5.12 : fontSize = winW / 9.04;
	$('html').css('font-size', Math.floor(fontSize*100)/100 + '%');
}
fontSize(winW);

$(window).resize(function(){
    var winW = $(window).width();
    fontSize(winW);
});
