const srcMoved = "./assest/marble2.jpg";
const srcdefault = "./assest/marble1.jpg";
const allImags = document.querySelectorAll("img");
const parent = document.querySelector(".parent");

let interval = 0;
// console.log(allImags[interval].src);

// console.log(allImags[0].src);
// console.log(allImags[0].getAttribute("src"));
let timer;
setAnimation();

function setAnimation() {
  timer = setInterval(() => {
    if (interval === 0) {
      allImags[interval].setAttribute("src", srcMoved);
      allImags[allImags.length - 1].setAttribute("src", srcdefault);
      interval++;
    } else {
      allImags[interval].setAttribute("src", srcMoved);
      allImags[interval - 1].setAttribute("src", srcdefault);
      interval++;
    }
    if (interval > 2) {
      interval = 0;
    }
  }, 1000);
}

parent.addEventListener("mouseenter", () => {
  clearInterval(timer);
});
parent.addEventListener("mouseleave", setAnimation);
