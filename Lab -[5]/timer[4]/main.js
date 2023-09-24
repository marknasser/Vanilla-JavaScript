var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DATE = new Date();

const date = document.querySelector(".date");
const time = document.querySelector(".time");

const currentMonth = month[DATE.getMonth()];
const day = DATE.getDate();
const year = DATE.getFullYear();

// setInterval(() => {
//   const now = new Date();
//   const day = `${now.getDate()}`.padStart(2, 0);
//   const mounth = `${now.getMonth() + 1}`.padStart(2, 0);
//   const year = now.getFullYear();
//   const hour = now.getHours();
//   const min = now.getMinutes();
//   const sec = now.getSeconds();
//   // console.log(day, mounth, year );

//   // console.log(`${hour}:${min}:${sec}`);
// }, 1000);

let result;
const timerr = setInterval(() => {
  const d = new Date();
  result = d.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    second: "numeric",
  });
  time.innerHTML = `<p> The TIME is: <span>${result} </span> </p>`;
}, 1000);

date.innerHTML = `
<p> The DATE is: <span>${day} </span> <span>${currentMonth} </span> <span>${year} </span></p>
`;
