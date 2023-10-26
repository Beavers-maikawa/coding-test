$(function(){
    $('dt').click(function(){
        $(this).next('dd').slideToggle();
        $(this).next('dd').toggleClass('none');
        $('span',this).toggleClass('rotate');
    });
});