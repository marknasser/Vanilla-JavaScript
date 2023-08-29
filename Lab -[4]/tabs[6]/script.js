const D1 = document.querySelector(".D1");
const D2 = document.querySelector(".D2");
const B1 = document.querySelector(".B1");
const B2 = document.querySelector(".B2");

const toggelFuc = () => {
  D1.classList.toggle("display");
  D2.classList.toggle("display");
};
B1.addEventListener("click", () => {
  if (D1.classList.contains("display")) toggelFuc();
});
B2.addEventListener("click", () => {
  if (D2.classList.contains("display")) toggelFuc();
});
