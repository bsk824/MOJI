var winW = $(window).width();

function fontSize(winW) {
    var fontSize = 0;
    (winW < 560) ? fontSize = winW / 5.12 : fontSize = winW / 9.04;
	$('html').css('font-size', Math.floor(fontSize*100)/100 + '%');
}
fontSize(winW);

function toggleActive(obj) {
    var btn = $(obj);
    btn.click(function(){
        var _this = $(this);
        _this.toggleClass('active');
    });
}
function point(obj) {
    var wrap = $(obj),
        point = wrap.find('.point'),
        sel = wrap.find('select');

    sel.change(function(){
        var val = $(this).val();
        point.removeClass().addClass('point'+val).text(val+'점');
    })
}
function tab(btn, cont) {
    var tabBtn = $(btn),
        tabCont = $(cont).find('.tabCont');
    tabBtn.click(function(){
        var _this = $(this),
            idx = _this.index();
        _this.addClass('active').siblings().removeClass('active');
        tabCont.eq(idx).addClass('active').siblings().removeClass('active');
    })
}
function accodian(obj) {
    var btn = $(obj).find('.tit');

    btn.click(function(){
        var _this = $(this);
        _this.parent().addClass('current').siblings().removeClass('current');
    })
}
$(window).resize(function(){
    var winW = $(window).width();
    fontSize(winW);
});
