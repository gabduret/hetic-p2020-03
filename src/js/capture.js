var bouton_capture = document.querySelector('.rightContent__triggerButton'),
    image_capture = document.querySelector('.rightContent__inner img');

bouton_capture.addEventListener('click', function(event){
  image_capture.classList.toggle('rightContent__innerInactive');
});