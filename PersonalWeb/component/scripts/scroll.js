// // This file contains the code for the scrolling functionality
// // First will define the variable needed
// var scroll = $('.scrollItem');


// //Figure out how I will set an element active
// function setActiveClass(scrollPos){
//     //Should go through each elemnt I have with the class .scrollItem
//     scroll.each(function(){
//         // console.log($('#menu').outerHeight()+20);

//         var sectionOffset = $(this.hash).offset().top;
//         // console.log(this.hash)
//         console.log(this)
//         console.log('offset: ' +sectionOffset)
//         // Now we check if we are currently in this section or not.
//         // If we are, then we remove the current scrollTo active class, and add it to the current one.
//         if(sectionOffset <= scrollPos){
//             scroll.removeClass('active');
//             $(this).addClass('active');
//             // return false;
//         }
//     });
// }

// //When document is ready
// $( function() {
//   //Call set active
//   setActiveClass($(window).scrollTop());
  
//   //On click we prevent the default action and then animate the scroll movement
//   scroll.click(function(e) {
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top - 80
//     }, 1000 );
//   });
// });

// //just check when we scroll
// $( window ).scroll(function(){
//   var scrollPos = $(this).scrollTop();
//   setActiveClass(scrollPos);


//   console.log(scrollPos);
//   // document.activeElement
//   document.activeElement.blur();
// });


// Cache selectors
var lastId,
    topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find(".scrollItem"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1000);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
      menuItems.filter("[href='#"+lastId+"']").removeClass("active");
      lastId = id;
      // Set/remove active class
      menuItems.filter("[href='#"+id+"']").addClass("active");
   }                   
});