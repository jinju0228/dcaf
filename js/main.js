var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 26,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  //   type:"custom"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});  
  


  
/*********스크롤되면 뒤집어지는거**********/
   var animation = function () {
        var items, winH;
        var initModule = function () {
          items = document.querySelectorAll(".cul_i");
          winH = window.innerHeight;
          _addEventHandlers();
        }
        var _addEventHandlers = function () {
          window.addEventListener("scroll", _checkPosition);
          window.addEventListener("load", _checkPosition);
          window.addEventListener("resize", initModule);
        };
       var _checkPosition = function flip(){
         for(let i = 0; i < items.length; i++){
           var cultureTop = items[i].getBoundingClientRect().top;
           if (winH > cultureTop) {
            setTimeout(function(){
              items[i].classList.add("img_active")
             },170*i)
          }
        }
           }

       return {
         init: initModule
       }
     }
     animation().init();


  
/*********스크롤되면 navbar바뀌는거**********/
window.onscroll = function a(){
  var navbar = document.getElementById("navbar");
  var navbar2 = document.getElementById("navbar2");
  var m_navbar = document.getElementById("m_navbar");

  if(window.pageYOffset >= 180){
    navbar.style.display = "none"  
    navbar2.style.display = "block"
    m_navbar.style.display = "block"  
  }
  else{
    navbar.style.display = "block"
    navbar2.style.display = "none"  
    m_navbar.style.display = "none"
  }



  
  }






  var gn = document.getElementsByClassName("gn");

  for (var i = 0; i < gn.length; i++) {
    gn[i].addEventListener("click", function() {
      this.classList.add('gn_active');
    });
  }

  
  


document.getElementsByClassName


  
  document.getElementById('myfunction').onclick = function (){
    document.getElementById("info_wrap").style.display = "block";
    
}
document.getElementById('myFunctionX').onclick = function (){
    document.getElementById("info_wrap").style.display = "none";
    document.getElementById("myfunction").classList.remove("gn_active");
}



// function(){
//   var tabLinks = document.getElementsByClassName("tablinks");
//   for (var j = 0; j < tabLinks.length; j++) {
//     tabLinks[j].addEventListener("click", function() {
//     var current = document.getElementsByClassName("");
//     current[0].className = current[0].className.replace(" active_underline", "");
//     this.className += " active_underline";
//     });
//   }
// }


$(document).ready(function(){
$(function(){
    $(".topBtn").hide(); 
      $(window).scroll(function () {
            if ($(this).scrollTop() > 300) { 
            $('.topBtn').fadeIn();
            } else {
              $('.topBtn').fadeOut();
            }
        });
  
        $('.topBtn').click(function () {
            $('body,html').animate({
                scrollTop:0
            }, 500);
            return false;
        });
  });

})



