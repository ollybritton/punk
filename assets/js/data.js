var text = document.querySelector(".text");
var main = document.querySelector(".main");
var tutorial = document.querySelector(".tutorial");

var keys = {
  q: 81,
  w: 87,
  e: 69,
  r: 82,
  t: 84,
  y: 89,
  u: 85,
  i: 73,
  o: 79,
  p: 80,
  a: 65,
  s: 83,
  d: 68,
  f: 70,
  g: 71,
  h: 72,
  "=": 187
};

var audios = {
  first: {
    after: new Audio("assets/audio/after_1.wav"),
    better: new Audio("assets/audio/better_1.wav"),
    do_it: new Audio("assets/audio/do_it_1.wav"),
    ever: new Audio("assets/audio/ever_1.wav"),
    faster: new Audio("assets/audio/faster_1.wav"),
    harder: new Audio("assets/audio/harder_1.wav"),
    hour: new Audio("assets/audio/hour_1.wav"),
    make_it: new Audio("assets/audio/make_it_1.wav"),
    makes_us: new Audio("assets/audio/makes_us_1.wav"),
    more_than: new Audio("assets/audio/more_than_1.wav"),
    never: new Audio("assets/audio/never_1.wav"),
    our: new Audio("assets/audio/our_1.wav"),
    over: new Audio("assets/audio/over_1.wav"),
    stronger: new Audio("assets/audio/stronger_1.wav"),
    work_is: new Audio("assets/audio/work_is_1.wav"),
    work_it: new Audio("assets/audio/work_it_1.wav")
  },

  second: {
    after: new Audio("assets/audio/after_2.wav"),
    better: new Audio("assets/audio/better_2.wav"),
    do_it: new Audio("assets/audio/do_it_2.wav"),
    ever: new Audio("assets/audio/ever_2.wav"),
    faster: new Audio("assets/audio/faster_2.wav"),
    harder: new Audio("assets/audio/harder_2.wav"),
    hour: new Audio("assets/audio/hour_2.wav"),
    make_it: new Audio("assets/audio/make_it_2.wav"),
    makes_us: new Audio("assets/audio/makes_us_2.wav"),
    more_than: new Audio("assets/audio/more_than_2.wav"),
    never: new Audio("assets/audio/never_2.wav"),
    our: new Audio("assets/audio/our_2.wav"),
    over: new Audio("assets/audio/over_2.wav"),
    stronger: new Audio("assets/audio/stronger_2.wav"),
    work_is: new Audio("assets/audio/work_is_2.wav"),
    work_it: new Audio("assets/audio/work_it_2.wav")
  }
};

var colors = ["#4abdac", "#fc4a1a", "#f7b733", "#0375b4", "#a239ca", "#4717f6"];
