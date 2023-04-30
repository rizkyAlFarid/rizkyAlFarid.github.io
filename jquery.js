$(window).scroll(function(){
    let wScroll = $(this).scrollTop(); 
    $('main').css({
        'transform' : 'translate('+wScroll/-2+'px, 0)'
    });
    $('main aside h2').css({
        'transform' : 'translate('+wScroll/-2+'px, 0)'
    })
    $('main aside p').css({
        'transform' : 'translate('+wScroll/-2+'px, 0)'
    });
    $('main aside .media').css({
        'transform' : 'translate('+wScroll/-2+'px, 0)'
    })
    $('main figure').css({
        'transform' : 'translate('+wScroll/-2+'px, 0)'
    })
    // BAGIAN SKILL
});