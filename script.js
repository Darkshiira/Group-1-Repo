import myJson from "./data/dev/Darkshiira.json" assert { type: "json" };
import linusJson from "./data/dev/linus.json" assert { type: "json" };
import erikJson from "./data/dev/ErikThorsson83.json" assert { type: "json" };
import dennis from "./data/dev/dennis.json" assert { type: "json" };
import robin from "./data/dev/robinrillelock.json" assert { type: "json" };
import mattiasJson from "./data/dev/Mattias.json" assert { type: "json" };
// The webpage is built with different divs.
//To modify the content you can each change the innerHTML of each divs when clicking on your button.
let tmp = false;
//Title:
let div1 = document.createElement("div");
div1.innerHTML = `<h1>Group 1: </h1>`;
document.body.appendChild(div1);

//Hannas button:
createButton(myJson);

//Linus button:
createButton(linusJson);

//Eriks button:
createButton(erikJson);

//Dennis button:
createButton(dennis);

//Roins button:
createButton(robin);

//Mattias button:
createButton(mattiasJson);

//Name box:
let div2 = document.createElement("div");
div2.innerHTML = `<h2>Namn: </h2>`;
document.body.appendChild(div2);
//Github box:
let div3 = document.createElement("div");
div3.innerHTML = `<h2>Github: </h2>`;
document.body.appendChild(div3);
//Discord box:
let div4 = document.createElement("div");
div4.innerHTML = `<h2>Discord: </h2>`;
document.body.appendChild(div4);
//Skill box:
let div5 = document.createElement("div");
div5.innerHTML = `<h2>Skills: </h2>`;
div5.className = "div5";
document.body.appendChild(div5);
//Hobby box:
let div6 = document.createElement("div");
div6.innerHTML = `<h2>Hobbies: </h2>`;
div6.className = "div6";
document.body.appendChild(div6);
//Cat or Dog box
let div7 = document.createElement("div");
div7.innerHTML = `<h2>Cat or Dog: </h2>`;
document.body.appendChild(div7);
//To add an img:
let img = document.createElement("img");
document.body.appendChild(img);

//Gör att infon hamnar på samma rad som rubriken
const divs = [div2, div3, div4, div5, div6];
for (let data of divs) {
  data.style.display = "flex";
  data.style.alignItems = "center";
}

// let buttonActive = [false, false, false, false, false, false]; kanske???

function createButton(jsonName) {
  let personButton;
  personButton = document.createElement("button");
  document.body.appendChild(personButton);
  personButton.innerHTML = jsonName.firstname;
  personButton.addEventListener("click", () => {
    if (!tmp) {
      div2.innerHTML = `<h2>Namn:</h2> <p>${jsonName.firstname} ${jsonName.lastname}</p>`;
      div3.innerHTML = `<h2>Github: </h2> <p>${jsonName.github}</p>`;
      div4.innerHTML = `<h2>Discord: </h2> <p>${jsonName.discord}</p>`;
      div5.innerHTML = `<h2>Skills: </h2> <p>${jsonName.skills}</p>`;
      div6.innerHTML = `<h2>Hobbies: </h2> <p>${jsonName.hobbies}</p>`;
      img.src = jsonName.imageSource;
      img.style.width = "400px";
      tmp = true;
    } else {
      div2.innerHTML = `<h2>Namn:</h2> <p>${""} ${""}</p>`;
      div3.innerHTML = `<h2>Github: </h2> <p>${""}</p>`;
      div4.innerHTML = `<h2>Discord: </h2> <p>${""}</p>`;
      div5.innerHTML = `<h2>Skills: </h2> <p>${""}</p>`;
      div6.innerHTML = `<h2>Hobbies: </h2> <p>${""}</p>`;
      img.src = "";
      img.style.width = "";
      tmp = false;
    }
  });
}
