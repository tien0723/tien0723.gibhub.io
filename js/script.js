// $('.slider').slick({
// 	arrows:true,
//         infinite:true,
//         slidesToShow:3,
//         accessibility:true,
//         autoplay:true,
//         autoplaySpeed:3000,
// 	prevArrow:"<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
// 	nextArrow:"<span class='arrow next'><i class='fas fa-angle-right'></i></span>",
// 	customPaging : function(slider, i) {
//        /* ADDING CUSTOM PAGING
//         Example
//         return  return '<li>Something you want to insert</li>';
// */
//     },
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
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
  centerMode: true,
  variableWidth: true
});

