$(document).mousemove(function (event) {
  $("nav").css("display", "block");
});


if (navigator.userAgent.match(/Trident\/7\./)) { // if IE
  $('body').on("mousewheel", function () {
    // remove default behavior
    event.preventDefault();

    //scroll without smoothing
    var wheelDelta = event.wheelDelta;
    var currentScrollPosition = window.pageYOffset;
    window.scrollTo(0, currentScrollPosition - wheelDelta);
  });
}
$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  //if the first page is in the viewport
  if((page1 <= (scrollTop+windowHeight))&&((page1+1000) >= scrollTop)){
      newOffset = -60 + ((scrollTop - page1)*0.8);
      $('#page1 .background').css('top',newOffset);
  }
});