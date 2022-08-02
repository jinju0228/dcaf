window.onscroll = function b(){
    var navbarr = document.getElementById("snavbar");
    var navbarr2 = document.getElementById("snavbar2");
    var m_navbarr = document.getElementById("sm_navbar");
  
    if(window.pageYOffset >= 180){
      navbarr.style.display = "none"  
      navbarr2.style.display = "block"
      m_navbarr.style.display = "block"  
  
    }
    else{
      navbarr.style.display = "block"
      navbarr2.style.display = "none"  
      m_navbarr.style.display = "none"
    }
    }
  
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





