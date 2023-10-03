

$(document).ready(function () {
	$('.invisible-content').hide();
	$(document).on('click',"#btn", function () {
		var moreLessButton=$('.invisible-content').is(":visible")?'Read More' :'Read Less';
		$(this).text(moreLessButton);
		$(this).parent('.box').find('.invisible-content').toggle();
	 //$(this).parent('.box').find('.visible-content').toggle();
    $(this).parent('.paraLeadership').find('.invisible-content').toggle();
    // $(this).parent('.paraLeadership').find('.visible-content').toggle();

  })
      
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.width = "250px";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.width = "350px";
  }
}



