$(document).ready(function(){
  
    $('.first-screen-slider').slick({
        dots:true,
        infinity:true,
        appendArrows: '.first-screen-slider__arrows',
        responsive: [{
            
              breakpoint: 991,
              settings: {
                arrows:false,
              }
            },
          ]
        });
});

 

