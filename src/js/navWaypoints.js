/*
 * Navigation waypoint
 */
var nav = {};

nav.nav_items = document.querySelectorAll('.navigation__points');

for(var i = 0; i < 2; i++) {
  console.log(nav);
  console.log(nav.nav_items);
  nav.nav_items[i].addEventListener('click', function() {
    console.log('is true maaan');
  });
}

