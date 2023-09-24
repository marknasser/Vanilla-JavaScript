const srcs = [
  { src: "./assest/images/1.jpg" },
  { src: "./assest/images/2.jpg" },
  { src: "./assest/images/3.jpg" },
  { src: "./assest/images/4.jpg" },
  { src: "./assest/images/5.jpg" },
  { src: "./assest/images/6.jpg" },
];

// element
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const preview = document.querySelector(".preview");
const img = document.querySelector("img");

let counter = 0;
let isPrv = false;
let timer;
const imgManipulate = () => {
  img.src = srcs[counter]["src"];
};

left.addEventListener("click", () => {
  // clearInterval(timer);
  increment();
});
right.addEventListener("click", () => {
  // clearInterval(timer);
  decrement();
});
preview.addEventListener("click", () => {
  console.log(isPrv);
  if (isPrv) {
    left.setAttribute("disabled", "");
    right.setAttribute("disabled", "");
    timer = setInterval(() => {
      console.log("interval");
      increment();
    }, 2000);
  } else {
    clearInterval(timer);
    left.removeAttribute("disabled");
    right.removeAttribute("disabled");
  }
  isPrv = !isPrv;
});

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
