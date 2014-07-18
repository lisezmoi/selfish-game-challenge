var UPDATE_DELAY = 40;
var THEMES = [
  'Dementia',
  'Never inside',
  'Capture frame',
  'Slow seconds',
  'Sticky feature',
  'Gender',
  'Inappropriate medium',
  'Past and lie',
  'Paul',
  'Streamed',
  'Advertising',
  'Smelly',
  'Everything is dark',
  'Inside out',
  'I don’t want to grow up',
  'Hardcore',
  'War and Peace',
  'Light',
  'It’s not possible',
  'Garden',
  'I’m home!',
  'One more time',
  'It’s not funny anymore'
];

var requestAnimationFrame = requestAnimationFrame || function(cb) {
  setTimeout(cb, 10);
};

function on(elt, name, cb) {
  elt.addEventListener(name, cb);
}
function off(elt, name, cb) {
  elt.removeEventListener(name, cb);
}

function nextTheme(index) {
  if (++index < THEMES.length) return index;
  return 0;
}

function start(elt) {
  var currentTheme = 0;
  var displayedTheme = null;
  var stop = false;

  var update = function() {
    setTimeout(update, UPDATE_DELAY);
    if (stop) return;
    currentTheme = nextTheme(currentTheme);
  };

  var draw = function() {
    requestAnimationFrame(draw);
    if (stop) return;
    if (displayedTheme === currentTheme) return;
    elt.innerHTML = THEMES[(displayedTheme = currentTheme)];
  };

  on(elt, 'click', function() {
    stop = !stop;
  });

  update();
  draw();
}

var button = document.querySelector('#generator');
var init = function() {
  off(button, 'click', init);
  start(button);
};
on(button, 'click', init);
