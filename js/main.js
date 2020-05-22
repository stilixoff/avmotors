
    // document.getElementById('map').addEventListener("click", function(){
    //     document.getElementById("map_box").innerHTML = `<iframe class="map"
    //     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.9282343753353!2d35.01986151565885!3d48.41952207924683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3554482fea5%3A0x5293687204501a39!2z0JfQsNC_0L7RgNGW0LfRjNC60LUg0YjQvtGB0LUsIDI20JEsINCU0L3RltC_0YDQvsyBLCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1suk!2sua!4v1559479956614!5m2!1suk!2sua"
    //     frameborder="0" style="border:0" allowfullscreen></iframe>`
    // })

    document.addEventListener("DOMContentLoaded", function() {
        var lazyloadImages = document.querySelectorAll("img.lazy");    
        var lazyloadThrottleTimeout;
        
        function lazyload () {
          if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
          }    
          
          lazyloadThrottleTimeout = setTimeout(function() {
              var scrollTop = window.pageYOffset;
              lazyloadImages.forEach(function(img) {
                  if(img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                  }
              });
              if(lazyloadImages.length == 0) { 
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
              }
          }, 20);
        }
        
        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
      });

// var target = $('.elem');
// var targetPos = target.offset().top;
// var winHeight = $(window).height();
// var scrollToElem = targetPos - winHeight;
// $(window).scroll(function(){
//   var winScrollTop = $(this).scrollTop();
//   if(winScrollTop > scrollToElem){
//     //сработает когда пользователь доскроллит к элементу с классом .elem
//   }
// });