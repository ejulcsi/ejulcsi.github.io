$('.text').hide();

$('li').click(function(){
    $(this).find('.text').slideToggle();
})
