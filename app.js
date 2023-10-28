$(function(){
    $('dt').click(function(){
        $(this).next('dd').slideToggle();
        $(this).next('dd').toggleClass('none');
        $('span',this).toggleClass('rotate');
    });

    // scroll to top
    const topBtn = $('.back-to-top');
    const scrollHeight = 100;
    topBtn.hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > scrollHeight){
            topBtn.fadeIn();
        }else{
            topBtn.fadeOut();
        }
    });
    topBtn.click(function(){
        $('body,html').animate({
            scrollTop: 0
        },800);
        return false;
    });
});