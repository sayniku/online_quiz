/*---------------------------------------------------------------

  Project Name: Online Quiz
  File Name: custom.js
  Author: Nitin Kumar
  Version: 1.0.0

------------------------------------------------------------------*/

$(document).ready(function() {
	$(".add-active span i").click(function () {
	    $(".add-active span i").removeClass("active");
	    $(this).addClass("active");   
	});

});
//select one test in the quiz card

function showCard(ele) {
	$('.section').hide();
	$(ele).show();
}

// progress bar 
var page_no = 1;
$('.next').click(function(e){
	page_no++;
	if (page_no ==3) {
		$(".finish").attr('disabled','disabled');
	}
	ele = $('.tick');
	ele.removeClassPrefix('active');
	ele.addClass('active-'+page_no);
});

$('.prev').click(function(e){
	page_no--;

	ele = $('.tick');
	ele.removeClassPrefix('active');
	ele.addClass('active-'+page_no);
});

$.fn.removeClassPrefix = function (prefix) {
    this.each( function ( i, it ) {
    var classes = it.className.split(" ").map(function (item) {
        return item.indexOf(prefix) === 0 ? "" : item;        
		});
		it.className = classes.join(" ");
    });
    return this;
};

// timer progress bar
function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft/60) + ":"+ timeleft%60);
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
};

progress(600, 600, $('#progressBar'));