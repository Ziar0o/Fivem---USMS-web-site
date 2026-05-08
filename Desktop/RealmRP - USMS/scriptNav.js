$(document).ready(function() {

   $(window).resize(function(){
       if ($(window).width() >= 980){	
            $(".nav .dropdown-toggle").hover(function () {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".dropdown-menu").toggleClass("show"); 
          });
         $( ".nav .dropdown-menu" ).mouseleave(function() {
           $(this).removeClass("show");  
         });
       }	
   });  
   });