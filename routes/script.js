// Random Fact onclick
async function testApiCall() {
  const response = await fetch("http://localhost:5555/randomfacts");
  const JSONdata = await response.json();
  
  console.log(JSONdata);
  const displayElement = document.getElementById("display");
  displayElement.innerText = `${JSONdata.text} is ${JSONdata.number}`;
}

// ====================== Math Fact on click
async function getMathFact() {
  const number = document.getElementById("numberInput").value;
  const response = await fetch("http://localhost:5555/mathFact/" + number);
  const JSONdata = await response.json();
  console.log(JSONdata);
  const displayElement = document.getElementById("number");
  displayElement.innerText = `${JSONdata.text} is ${JSONdata.number} `;
}

// ================= Year Fact on click
async function getYearFact() {
  const response = await fetch("http://localhost:5555/year");
  const JSONdata = await response.json();
  console.log(JSONdata);
  const displayElement = document.getElementById("quote");
  displayElement.innerText = `${JSONdata.text} in ${JSONdata.year}`;
}

// ================== Trivia Fact on click

async function getTriviaFact() {
  const number = document.getElementById("numberInput").value;
  const response = await fetch("http://localhost:5555/triviafact/" + number);
  const JSONdata = await response.json();
  console.log(JSONdata);
  const displayElement = document.getElementById("number");
  displayElement.innerText = `${JSONdata.text}`;
}
