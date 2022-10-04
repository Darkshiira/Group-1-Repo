// Using import to locally extract information from the .json file filled with our data..
import hannaJson from "./data/dev/Darkshiira.json" assert { type: "json" };
import linusJson from "./data/dev/linus.json" assert { type: "json" };
import erikJson from "./data/dev/ErikThorsson83.json" assert { type: "json" };
import dennisJson from "./data/dev/dennis.json" assert { type: "json" };
import robinJson from "./data/dev/robinrillelock.json" assert { type: "json" };
import mattiasJson from "./data/dev/Mattias.json" assert { type: "json" };

// The variable emtpy is a boolean that lets us empty our information on the second button click.
let empty = false;
// This is an empty array that we push our divElements into when we call the function createPage
let myDivs = [];
let importList = [
  hannaJson,
  linusJson,
  erikJson,
  dennisJson,
  robinJson,
  mattiasJson,
];
// Its an array that we can loop through to print out our topics. 
let topics = ["Namn", "Github", "Discord", "Skills", "Hobbies","Cat or Dog" ];

// Its a fuction that creates a HTMLdivelement and log group 1
createPage("Group 1");

// For every person in importList it calls the function createButton. 
// person is one object in the array
for (const person of importList) {
  createButton(person);
}
// For every topic in the array topics it calls the function createPage.
for (const topic of topics) {
  createPage(topic);
}

// Appends an image element to the end of the webpage.
let img = document.createElement("img");
document.body.appendChild(img);

// For each title in the array topics appends an element and prints out a heading two in it
// Lastly it pushes the div into the array myDivs
function createPage(title) {
  let div = document.createElement("div");
  div.innerHTML = `<h2>${title}: </h2>`;
  document.body.appendChild(div);
  myDivs.push(div);
}
// Its appends a button for each person in the array importList then it prints out our personal information
// inside each Divs in the array myDivs when you click the button. (unless u click a second time)
function createButton(jsonName) {
  let personButton;
  personButton = document.createElement("button");
  document.body.appendChild(personButton);
  personButton.innerHTML = jsonName.firstname;
  personButton.addEventListener("click", () => {
    if (!empty) {
      myDivs[1].innerHTML = `<h2>Namn:</h2> <p>${jsonName.firstname} ${jsonName.lastname}</p>`;
      myDivs[2].innerHTML = `<h2>Github: </h2> <p>${jsonName.github}</p>`;
      myDivs[3].innerHTML = `<h2>Discord: </h2> <p>${jsonName.discord}</p>`;
      myDivs[4].innerHTML = `<h2>Skills: </h2> <p>${jsonName.skills}</p>`;
      myDivs[5].innerHTML = `<h2>Hobbies: </h2> <p>${jsonName.hobbies}</p>`;

      // This prints out an image based on the URL from each person data.. 
      // due to the images being to large we changed the size on the image 
      img.src = jsonName.imageSource;
      img.style.width = "400px";
      empty = true;
    } else {
      myDivs[1].innerHTML = `<h2>Namn:</h2> <p>${""} ${""}</p>`;
      myDivs[2].innerHTML = `<h2>Github: </h2> <p>${""}</p>`;
      myDivs[3].innerHTML = `<h2>Discord: </h2> <p>${""}</p>`;
      myDivs[4].innerHTML = `<h2>Skills: </h2> <p>${""}</p>`;
      myDivs[5].innerHTML = `<h2>Hobbies: </h2> <p>${""}</p>`;
      img.src = "";
      img.style.width = "";
      empty = false;
      // The if-statement is boolean based so if the button is clicked the next click will 
      // empty the personal information on the webbsite
    }
  });
}
