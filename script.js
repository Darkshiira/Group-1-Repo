import hannaJson from "./data/dev/Darkshiira.json" assert { type: "json" };
import linusJson from "./data/dev/linus.json" assert { type: "json" };
import erikJson from "./data/dev/ErikThorsson83.json" assert { type: "json" };
import dennisJson from "./data/dev/dennis.json" assert { type: "json" };
import robinJson from "./data/dev/robinrillelock.json" assert { type: "json" };
import mattiasJson from "./data/dev/Mattias.json" assert { type: "json" };
// The webpage is built with different divs.
//To modify the content you can each change the innerHTML of each divs when clicking on your button.
let tmp = false;
let myDivs = [];
let importList = [
  hannaJson,
  linusJson,
  erikJson,
  dennisJson,
  robinJson,
  mattiasJson,
];
let topics = ["Namn", "Github", "Discord", "Skills", "Hobbies"];

//Title:
createPage("Group 1");

// Everybody's buttons
for (const person of importList) {
  createButton(person);
}

// All topics
for (const topic of topics) {
  createPage(topic);
}

//Cat or Dog box
let div7 = document.createElement("div");
div7.innerHTML = `<h2>Cat or Dog: </h2>`;
document.body.appendChild(div7);
//To add an img:
let img = document.createElement("img");
document.body.appendChild(img);

// Title = Namn, github, discord osv
function createPage(title) {
  let div = document.createElement("div");
  div.innerHTML = `<h2>${title}: </h2>`;
  document.body.appendChild(div);
  myDivs.push(div);
}

function createButton(jsonName) {
  let personButton;
  personButton = document.createElement("button");
  document.body.appendChild(personButton);
  personButton.innerHTML = jsonName.firstname;
  personButton.addEventListener("click", () => {
    if (!tmp) {
      myDivs[1].innerHTML = `<h2>Namn:</h2> <p>${jsonName.firstname} ${jsonName.lastname}</p>`;
      myDivs[2].innerHTML = `<h2>Github: </h2> <p>${jsonName.github}</p>`;
      myDivs[3].innerHTML = `<h2>Discord: </h2> <p>${jsonName.discord}</p>`;
      myDivs[4].innerHTML = `<h2>Skills: </h2> <p>${jsonName.skills}</p>`;
      myDivs[5].innerHTML = `<h2>Hobbies: </h2> <p>${jsonName.hobbies}</p>`;
      img.src = jsonName.imageSource;
      img.style.width = "400px";
      tmp = true;
    } else {
      myDivs[1].innerHTML = `<h2>Namn:</h2> <p>${""} ${""}</p>`;
      myDivs[2].innerHTML = `<h2>Github: </h2> <p>${""}</p>`;
      myDivs[3].innerHTML = `<h2>Discord: </h2> <p>${""}</p>`;
      myDivs[4].innerHTML = `<h2>Skills: </h2> <p>${""}</p>`;
      myDivs[5].innerHTML = `<h2>Hobbies: </h2> <p>${""}</p>`;
      img.src = "";
      img.style.width = "";
      tmp = false;
    }
  });
}
