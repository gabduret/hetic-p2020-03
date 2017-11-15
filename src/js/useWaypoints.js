import 'waypoints/lib/noframework.waypoints.min'


var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
    }
})

const header_item = document.getElementById('fixedHeader')

var waypoint = new Waypoint({
  element: document.getElementById('direction'),
  handler: function(direction) {
    if (direction == 'down') {
      console.log('Direction: ' + direction);
      header_item.classList.add('fixed-header-down')
      header_item.classList.remove('test')
    }
    else {
      console.log('up')
      header_item.classList.add('test')
      header_item.classList.remove('fixed-header-down')
    }
  }
})



/*
 * Navigation waypoint
 */
const anchors = ['discover', 'table', 'footer']
const nav_items = document.querySelectorAll('.navigation__content')

for(let i = 0; i < nav_items.length; i++) {
  nav_items[i].addEventListener('click', () => {
    location.href = "#" + anchors[i];
  })
}
