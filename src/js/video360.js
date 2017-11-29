var video360 = document.querySelector('.video360__leftContent__inner video'),
    video360_duration = 0,
    player_video360 = document.querySelector('.video360__leftContent__playerRange'),
    video360_Tuto = document.querySelector('.video360__leftContent__playerTuto');

//on récupère la durée de la vidéo
video360.addEventListener('loadedmetadata', function(event){
  video360_duration = video360.duration;
  
  return video360_duration;
});

//on récupère la valeur du input
//on fait un rapport de proportionnalité pour obtenir le moment de la vidéo correspondant
//on affiche le moment de la vidéo
player_video360.addEventListener('input', function(event){
  event.preventDefault();
  
  video360_Tuto.style.display = 'none';
  video360.style.opacity = '1';
  
  var player_video360_X = this.value,
      rapport_videoDuration_playerLength = (video360_duration * player_video360_X) / 100;
      
  video360.currentTime = rapport_videoDuration_playerLength;  
});