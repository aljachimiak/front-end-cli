$(document).foundation();

function PresentationSize(me){
    var size = $(me).data('size');
    var isSmall = size == "small";
    var newSize = isSmall ? "big" : "small"; 
    var newText = isSmall ? "−" : "+"   
    var $container = $('#iframe-container');
    
    //var $wrapper = $('.iframe-wrapper')
    
    $(me).data('size', newSize).text(newText);
    $container.toggleClass('big-container', isSmall);
    
    $(me).blur();
    $('iframe').focus();
}

function stockade(){
    var url = "http://stockadefc.tweetwally.com";
    window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}