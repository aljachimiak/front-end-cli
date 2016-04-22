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
}