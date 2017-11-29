var bouton_capture = document.querySelector('.rightContent__triggerButton'),
    texte_bouton_capture = document.querySelector('.rightContent__buttonText'),
    image_capture = document.querySelector('.rightContent__inner img'),
    flash_capture = document.querySelector('.rightContent__flash'),
    success_capture = document.querySelector('.rightContent__success');

bouton_capture.addEventListener('click', function(event) {
  flash_capture.style.animationPlayState = 'running';
  image_capture.classList.remove('rightContent__innerInactive');
  bouton_capture.style.display = 'none';
  texte_bouton_capture.style.display = 'none';
  window.navigator.vibrate(200);
});

flash_capture.addEventListener('animationend', function(event) {
  flash_capture.style.display = 'none';
  flash_capture.style.animationPlayState = 'paused';
  success_capture.style.display = 'block';
})