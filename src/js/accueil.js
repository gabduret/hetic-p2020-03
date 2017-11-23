// arrow fonction
console.log('Accueil.js fonctionne');


// app__carousel v-1

// var slides = document.querySelectorAll('#app__slides .app__slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,5000);

// function nextSlide(){
// 	goToSlide(currentSlide+1);
// }

// function previousSlide(){
// 	goToSlide(currentSlide-1);
// }

// function goToSlide(n){
// 	slides[currentSlide].className = 'app__slide';
// 	currentSlide = (n+slides.length)%slides.length;
// 	slides[currentSlide].className = 'app__slide showing';
// }


// var playing = true;
// var pauseButton = document.getElementById('pause');

// function pauseSlideshow(){
// 	pauseButton.innerHTML = '&#9658;'; // play character
// 	playing = false;
// 	clearInterval(slideInterval);
// }

// function playSlideshow(){
// 	pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
// 	playing = true;
// 	slideInterval = setInterval(nextSlide,2000);
// }

// pauseButton.onclick = function(){
// 	if(playing){ pauseSlideshow(); }
// 	else{ playSlideshow(); }
// };

// var next = document.getElementById('next');
// var previous = document.getElementById('previous');

// next.onclick = function(){
// 	pauseSlideshow();
// 	nextSlide();
// };
// previous.onclick = function(){
// 	pauseSlideshow();
// 	previousSlide();
// };


// app carousel v-2

var carousel = document.getElementById('app__carousel');
var slides = document.getElementsByClassName('app__slide');
var speed = 2100; // 1s = 1400

function carouselHide(num) {
    indicators[num].setAttribute('data-state', '');
    slides[num].setAttribute('data-state', '');

    slides[num].style.opacity=0;
    slides[num].style.display="none";
}

function carouselShow(num) {
    indicators[num].checked = true;
    indicators[num].setAttribute('data-state', 'active');
    slides[num].setAttribute('data-state', 'active');

    slides[num].style.opacity=1;
    slides[num].style.display="inline-block";
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

        // Stop the auto-switcher
        // clearInterval(switcher);
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
    var slides = carousel.querySelectorAll('.app__slide');
    var indicators = carousel.querySelectorAll('.indicator');

    // var switcher = setInterval(function() {
    //     switchSlide();
    // }, speed);

    for (var i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", setSlide(i));
    }
    setSlide(0);
}



// app carousel en savoir plus bouton


//Traditional way

// document.getElementById('bouton-1').addEventListener('click', function() {
//     document.querySelector('#slide-1 .app__blured-image').classList.toggle('app__blured-image-on');
//     document.querySelector('#slide-1 .app__text').classList.toggle('app__text-mobile-on');
//     document.querySelector('#slide-1 .app__phone-background').classList.toggle('app__phone-background-on');
// });





document.querySelectorAll('.app__slide').forEach(
    function(slide) {
        var button = slide.querySelector('.app__phone-bouton');
        if(button){
            button.addEventListener('click', 
            function() {
                // console.log(slide);
                console.log('en savoir plus button clicked');
                // console.log(slide.querySelector('.app__blured-image'));
                slide.querySelector('.app__blured-image').classList.toggle('app__blured-image-on');
                slide.querySelector('.app__text').classList.toggle('app__text-mobile-on');
                slide.querySelector('.app__phone-background').classList.toggle('app__phone-background-on');
                }
            );
        }
    }
);


