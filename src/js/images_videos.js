var video = document.querySelector('.images_videos video');

console.log('video');

video.addEventListener('click', function(event){
  event.preventDefault();
  
  console.log('lol');
  video.setAttribute('width', '1000');
})