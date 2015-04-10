var  mn = $(".navbar.navbar-default.navbar-static-top");
var  mns = "navbar-fixed-top";
var  hdr = $('#welcome').height(); //height of section above navbar
var hnav = $('.navbar').height() + 'px'; //height of navbar
console.log(hdr);

$(window).scroll(function() {
  if( $(this).scrollTop() > (hdr) ) {
    mn.addClass(mns);
    $('#wrapper').css('padding-top', hnav);
  } else {
    mn.removeClass(mns);
    $('#wrapper').css('padding-top', '0px');
  }
});
