'use strict';

var bigMac = document.getElementById("btn-bigMac");
var btnNavShow = document.getElementById("btn-navShow");

bigMac.addEventListener("click", mobile);
function mobile() {
  btnNavShow.classList.toggle("listShow");

  bigMac.classList.toggle("open");
}

var header = document.querySelector(".nav");
var smallMenuLinkList = document.querySelectorAll(".nav-mobile li a");
for (var i = 0; i < smallMenuLinkList.length; i++) {
  smallMenuLinkList[i].addEventListener("click", mobile);
}

$(document).ready(function(){

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var position =  (barra * 0.10);

		$('body').css({
			'background-position': '0 -' + position + 'px'
		});

	});

});

jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},4000);
});
