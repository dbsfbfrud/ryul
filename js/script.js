new Swiper('.sw-work', {
  slidesPerView:3, 
  spaceBetween:30,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl:".btn-next",
    prevEl:".btn-prev",
  },
    
})
$(document).ready(function(){
  $('.img-wrap img').click(function(){
        $('.modal').addClass("show")
        $('.modal').append(`<div class="item_box">
        <iframe src="https://www.youtube.com/embed/${$(this).data("video")}?rel=0&playsinline=1&autoplay=1" frameborder="0" allowfullscreen>
        </iframe>
      </div>`
    )
})
  $('.modal .dim').click(function(){
      $('.modal .item_box').remove()
      $('.modal').removeClass('show')
  })
  $('.list img').mouseover(function(){
      $(this).attr("src",$(this).data("animated"))
  })   
  $('.list img').mouseout(function(){
      $(this).attr("src",$(this).data("static"))
  }) 

// 주메뉴 클릭시 스크롤
const $menu = $('header ul li'),
$contents = $('section')
$menu.click(function(){
  $(this).addClass('on')
// 메뉴의 해당 li의 인덱스 번호 구하기 
  let idx = $(this).index()
  let $section = $contents.eq(idx)
// 현재 선택된 section의 위치정보 (top)
 let sectionDistance = $section.offset().top -160
 $(`html, body`).animate({
   scrollTop:sectionDistance
 })
})
// 윈도우를 스크롤할 때 
$(window).scroll(function(){
    $contents.each(function(){
      console.log($(this).offset().top,$(window).scrollTop()+160) 
      if($(this).offset().top <=$ (window).scrollTop()+160) {
      let idx = $(this).index(); 
      $menu.removeClass("on")
      $menu.eq(idx).addClass("on")
    }
 })
})


});