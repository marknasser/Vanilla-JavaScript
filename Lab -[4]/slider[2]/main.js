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
const img = document.querySelector("img");

let counter = 0;

const imgManipulate = () => {
  img.src = srcs[counter]["src"];
};

left.addEventListener("click", () => {
  if (counter === 0) {
    counter = srcs.length - 1;
    imgManipulate();
  } else {
    counter--;
    imgManipulate();
  }
});
right.addEventListener("click", () => {
  if (counter === srcs.length - 1) {
    counter = 0;
    imgManipulate();
  } else {
    counter++;
    imgManipulate();
  }
});
