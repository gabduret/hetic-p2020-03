import 'waypoints/lib/noframework.waypoints.min';

console.log('bruh');

var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
    }
  });