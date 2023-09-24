const srcs = [
  { src: "./assest/images/1.jpg" },
  { src: "./assest/images/2.jpg" },
  { src: "./assest/images/3.jpg" },
  { src: "./assest/images/4.jpg" },
  { src: "./assest/images/5.jpg" },
  { src: "./assest/images/6.jpg" },
];

//_______ elements_________
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const preview = document.querySelector(".preview");
const STOP = document.querySelector(".stop");
const img = document.querySelector("img");

let counter = 0;
let timer;

//_____event listeners_____
left.addEventListener("click", increment);
right.addEventListener("click", decrement);
STOP.addEventListener("click", clearTimer);

preview.addEventListener("click", () => {
  if (timer) {
    clearTimer();
  }
  setTimer();
});

//_____functions____
function increment() {
  if (counter === srcs.length - 1) {
    counter = 0;
    imgManipulate();
  } else {
    counter++;
    imgManipulate();
  }
}
function decrement() {
  if (counter === srcs.length - 1) {
    counter = 0;
    imgManipulate();
  } else {
    counter++;
    imgManipulate();
  }
}

function setTimer() {
  timer = setInterval(() => {
    increment();
  }, 2000);
  left.setAttribute("disabled", "");
  right.setAttribute("disabled", "");
}

function clearTimer() {
  clearInterval(timer);
  timer = undefined;
  left.removeAttribute("disabled");
  right.removeAttribute("disabled");
}

function imgManipulate() {
  img.src = srcs[counter]["src"];
}
