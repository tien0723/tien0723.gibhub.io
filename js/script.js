// $(".slideshow1").slick({

//   infinite: true,
//   autoplay: true,
//   arrows: true,
//   autoplaySpeed: 2000,
//   prevArrow:"<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
//  	nextArrow:"<span class='arrow next'><i class='fas fa-angle-right'></i></span>",

//   //  toc do chieu dai khong khoang cach
//   speed: 1000,
//   slidesToShow: 1,
// });
				
$(".slideshow").slick({

  infinite: true,
  autoplay: false,
  arrows: true,
  autoplaySpeed: 2000,
  prevArrow:"<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
 	nextArrow:"<span class='arrow next'><i class='fas fa-angle-right'></i></span>",

  //  toc do chieu dai khong khoang cach
  speed: 1000,
  slidesToShow: 1,
  // centerMode: true,
  // variableWidth: true
});


const $active =document.querySelector('.tab-item.active')
const $activeProduct =document.querySelector('.tab-product.active')
const $A =document.querySelector.bind(document)
const tabs =document.querySelectorAll('.tab-item')
const tabsProduct =document.querySelectorAll('.tab-product')

const $line1 = document.querySelector('.product .tabs .line')
console.log( $line1)
$line1.style.left = $active.offsetLeft + "px"
$line1.style.width = $active.offsetWidth + "px"

tabs.forEach((tab,index) => {
  const product = tabsProduct[index]
  
  tab.onclick =function (){
    // console.log(product)
        $A('.tab-item.active').classList.remove('active')
        $A('.tab-product.active').classList.remove('active')
         console.log(product)
         tab.classList.add('active')
        product.classList.add('active')
         $line1.style.left = tab.offsetLeft + "px"
         $line1.style.width = tab.offsetWidth + "px"
         console.log( $line1)
  }
});
//header----------------------------------------------------------------
$(document).ready(function(){
  $(window).scroll(function(){
    console.log($(this).scrollTop())
   if($(this).scrollTop()){
       $('header').addClass('sticky');
       console.log("asdasdasda")
   }else{
       $('header').removeClass('sticky');
   }
  })
})

