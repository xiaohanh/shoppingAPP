$(document).ready(function () {
            var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    pagination: '.swiper-pagination',
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		    scrollbar: '.swiper-scrollbar',
		    
		  });                           
     });
        
function aa(){
	        localStorage.setItem("install",true);
        	window.location.href="index.html";
        }
        
