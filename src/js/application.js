// app carousel v-2

var carousel = document.getElementById('application__carousel__active');
var slides = document.getElementsByClassName('carousel__slide');

function carouselHide(num) {
  indicators[num].setAttribute('data-state', '');
  slides[num].setAttribute('data-state', '');
  slides[num].classList.remove('carousel__slide--showing');
}

function carouselShow(num) {
  indicators[num].checked = true;
  indicators[num].setAttribute('data-state', 'active');
  slides[num].setAttribute('data-state', 'active');
  slides[num].classList.add('carousel__slide--showing');
}

function setSlide(slide) {
  return function() {
    // Reset all slides
    for (var i = 0; i < indicators.length; i++) {
      indicators[i].setAttribute('data-state', '');
      slides[i].setAttribute('data-state', '');

      carouselHide(i);
    }

    // Set defined slide as active
    indicators[slide].setAttribute('data-state', 'active');
    slides[slide].setAttribute('data-state', 'active');
    carouselShow(slide);
  };
}

function switchSlide() {
  var nextSlide = 0;

  // Reset all slides
  for (var i = 0; i < indicators.length; i++) {
    // If current slide is active & NOT equal to last slide then increment nextSlide
    if ((indicators[i].getAttribute('data-state') == 'active') && (i !== (indicators.length-1))) {
      nextSlide = i + 1;
    }

    // Remove all active states & hide
    carouselHide(i);
  }

  // Set next slide as active & show the next slide
  carouselShow(nextSlide);
}

if (carousel) {
  var slides = carousel.querySelectorAll('.carousel__slide');
  var indicators = carousel.querySelectorAll('.indicator');

  for (var i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", setSlide(i));
  }
  setSlide(0);
}

// Adding class to active slide

document.querySelectorAll('.carousel__slide').forEach(
  function(slide) {
    var button = slide.querySelector('.rightContent__button');
    if(button){
      button.addEventListener('click', function() {
        slide.querySelector('.rightContent__bluredImage').classList.toggle('rightContent__bluredImage--on');
        slide.querySelector('.leftContent__text').classList.toggle('leftContent__text--on');
        slide.querySelector('.rightContent__background').classList.toggle('rightContent__background--on');
      });
    }
  }
);


// Pull out class from deactivated slide

document.querySelectorAll('.carousel__indicator').forEach(
  function(turnOff) {
    var indicator = turnOff.querySelector('.indicator__label');
    
    if(indicator){
      indicator.addEventListener('click', function() {
    document.querySelectorAll('.carousel__slide').forEach(function(slide) {
          slide.querySelector('.rightContent__bluredImage').classList.remove('rightContent__bluredImage--on');
          slide.querySelector('.leftContent__text').classList.remove('leftContent__text--on');
          slide.querySelector('.rightContent__background').classList.remove('rightContent__background--on');
        });
      });
    }
  }
);
