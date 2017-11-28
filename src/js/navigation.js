import 'waypoints/lib/noframework.waypoints.min'
import SmoothScroll from 'smooth-scroll'

/*
 * Variables
 * init variables
 */
const anchors = ['discover', '360', 'specifications', 'gallery']
const header_item = document.getElementById('fixedHeader')
const nav_items = document.querySelectorAll('.navigation__content')

const nav_one = document.getElementById(anchors[0] + 'Point')
const nav_two = document.getElementById(anchors[1] + 'Point')
const nav_three = document.getElementById(anchors[2] + 'Point')
const nav_four = document.getElementById(anchors[3] + 'Point')
let prev_active_point = nav_one

/*
 * HEADER
 * Scroll Direction
 * state : in progress
 * > scroll detection on the whole page
 */

// var waypoint = new Waypoint({
//   element: document.getElementById('direction'),
//   handler: (direction) => {
//     if (direction == 'down') {
//       console.log('Direction: ' + direction);
//       header_item.classList.add('fixed-header-down')
//       header_item.classList.remove('test')
//     }
//     else {
//       console.log('up')
//       header_item.classList.add('test')
//       header_item.classList.remove('fixed-header-down')
//     }
//   }
// })

/*
 * NAVIGATION
 * smoothscroll
 * state : done
 */
var scroll = new SmoothScroll();

/*
 * NAVIGATION
 * Waypoint
 * state : done
 */
for(let i = 0; i < nav_items.length; i++) {
  nav_items[i].addEventListener('click', (event) => {
    let target = event.target.getAttribute('data-target');

    if(target) {
        const targetElement = document.getElementById(target)
        // location.href = "#" + anchors[i];
        scroll.animateScroll( targetElement )
    }
    else {
        if(event.target.classList.contains('navigation__points')) {            
            const targetElement = document.getElementById(event.target.parentNode.getAttribute("data-target"))
            scroll.animateScroll( targetElement )
        }
    }
  })
}

/*
 * NAVIGATION
 * Part 1
 * state : done
 */ 
var waypoint = new Waypoint({
  element: document.getElementById(anchors[0]),
  handler: (direction) => {
    if (prev_active_point != nav_one) {
      nav_one.classList.add('navigation__points--active')
      prev_active_point.classList.remove('navigation__points--active')
      prev_active_point = nav_one
    }
  }
})
/*
 * NAVIGATION
 * Part 2
 * state : done
 */ 
var waypoint = new Waypoint({
  element: document.getElementById(anchors[1]),
  handler: (direction) => {
    if (prev_active_point != nav_two) {
      nav_two.classList.add('navigation__points--active')
      prev_active_point.classList.remove('navigation__points--active')
      prev_active_point = nav_two
    }
  }
})
/*
 * NAVIGATION
 * Part 3
 * state : done
 */ 
var waypoint = new Waypoint({
  element: document.getElementById(anchors[2]),
  handler: (direction) => {
    if (prev_active_point != nav_three) {
      nav_three.classList.add('navigation__points--active')
      prev_active_point.classList.remove('navigation__points--active')
      prev_active_point = nav_three
    }
  }
})
/*
 * NAVIGATION
 * Part 4
 * state : done
 */ 
var waypoint = new Waypoint({
  element: document.getElementById(anchors[3]),
  handler: (direction) => {
    if (prev_active_point != nav_four) {
      nav_four.classList.add('navigation__points--active')
      prev_active_point.classList.remove('navigation__points--active')
      prev_active_point = nav_four
    }
  }
})