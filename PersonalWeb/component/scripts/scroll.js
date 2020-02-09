// This file contains the code for the scrolling functionality


// First will define the variable needed
var scrollTo = $('.scrollItem')


//Figure out how I will set an element active
function setActive(scrollPos){
    //Should go through each elemnt I have with the class .scrollItem
    scrollTo.each(function(){
        // console.log($('#menu').outerHeight()+20);
        var sectionOffset = $(this.hash).offset().top-$('#menu').outerHeight()-2;
        // Now we check if we are currently in this section or not.
        // If we are, then we remove the current scrollTo active class, and add it to the current one.
        if(sectionOffset <= scrollPos){
            scrollTo.removeClass('active');
            $(this).addClass('active');
            // return false;
        }
    });
}

$( function() {
    //Call set active
    setActive($(window).scrollTop());
    
    //On click we prevent the default action and then animate the scroll movement
    scrollTo.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top -$('#menu').outerHeight()
      }, 1000 );
    });
});

//just check when we scroll
$( window ).scroll(function(){
    var scrollPos = $(this).scrollTop();
    setActive(scrollPos);
  
    document.activeElement.blur()
  });