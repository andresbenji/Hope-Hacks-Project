// const fetch = require("node-fetch");

// ====Hammbuger Menu====
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

// ==== End of hamburgr menu =====
const url =
  "https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "222f5b18eemshb0f33bab03a19ccp14cf1ajsnb64c43c65f90",
    "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.text);
    // console.log(data.year);
    console.log(`${data.text} in year ${data.year}`);
    document.getElementById("quote").innerText = `${data.text} in year ${data.year}`;
  })
  .catch((error) => {
    console.error(error);
  });
