 new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  simulateTouch:false, 
});
let paginationsBlocks,slides,swiperWrapper,i,cardButton,cards,navPanel,lines;
let body;
body = document.querySelector('body');
navPanel = document.querySelector('nav');
lines = document.querySelectorAll('.burger_line')
cards = document.querySelectorAll('.dop_card');
cardButton = document.querySelector('.hidden_link');
slides = document.querySelectorAll('.swiper-slide');
paginationsBlocks=document.querySelectorAll('.pagination_block');
swiperWrapper = document.querySelector('.swiper');


swiperWrapper.addEventListener('click',function(e){
  for (i=0;i<3;i++){
    if (slides[i].closest('.swiper-slide-active')){
      paginationsBlocks[i].classList.add('active_pagination_block');
    }
    else{
      paginationsBlocks[i].classList.remove('active_pagination_block');
    }
  }
  
})
cardButton.addEventListener('click',function(){
  for(i=0;i<2;i++){
    cards[i].classList.toggle('active_card');
  }
})

navPanel.addEventListener('click',function(){
  body.classList.toggle('menu_active_block');  
  for(i=0;i<4;i++){
    if ((i==0)||(i==3)){
      lines[i].classList.toggle('burger_line_hidden');
    }
    if (i==1) {
      lines[i].classList.toggle('burger_line_active_one');
    }
    if (i==2) {
      lines[i].classList.toggle('burger_line_active_two');
    }    
  }
  navPanel.classList.toggle('nav_active');
})