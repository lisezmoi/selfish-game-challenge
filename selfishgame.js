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
  'Navigations',
  'Advertising',
  'Smelly',
  'Inside out',
  'Is this random?',
  'I don’t want to grow up',
  'Loop',
  'Vengeance',
  'Indians',
  'Hardcore',
  'War and Peace',
  'Light',
  'It’s not possible',
  'Garden',
  'I’m home!',
  'One more time',
  'It’s not funny anymore'
];

var button = document.querySelector('#generator');
var colon = button.previousElementSibling;

var init = function() {
  off(button, 'click', init);
  colon.hidden = false;
  start(button);
};

on(button, 'click', init);

function nextTheme(index) {
  if (++index < THEMES.length) return index;
  return 0;
}

function start(elt) {
  var currentTheme = 0;
  var displayedTheme = null;
  var stopped = true;

  var update = function() {
    setTimeout(update, UPDATE_DELAY);
    if (stopped) return;
    currentTheme = nextTheme(currentTheme);
  };

  var draw = function() {
    raf(draw);
    if (stopped) return;
    if (displayedTheme === currentTheme) return;
    elt.innerHTML = THEMES[(displayedTheme = currentTheme)];
  };

  on(document, 'click', function(event) {
    if (event.target === elt && stopped) {
      stopped = false;
    } else if (!stopped) {
      stopped = true;
    }
  });

  update();
  draw();
}

var raf = requestAnimationFrame || function(cb) {
  setTimeout(cb, 10);
};
function on(elt, name, cb) {
  elt.addEventListener(name, cb);
}
function off(elt, name, cb) {
  elt.removeEventListener(name, cb);
}
