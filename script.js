import myJson from "./data/dev/Darkshiira.json" assert { type: "json" };


let div1 = document.createElement("div");
div1.innerHTML = `<h1>Group 1: </h1>`
document.body.appendChild(div1);

let buttonHanna = document.createElement("button");
document.body.appendChild(buttonHanna);
buttonHanna.innerHTML = `${myJson.firstname}`;

buttonHanna.addEventListener("click", function() {
    div2.innerHTML = `<h2>Namn:</h2> <h3>${myJson.firstname} ${myJson.lastname}</h3>`
    div3.innerHTML = `<h2>Github: </h2> <h3>${myJson.github}</h3>`
    div4.innerHTML = `<h2>Discord: </h2> <h3>${myJson.discord}</h3>`

    myJson.Skills.programming.forEach (function (skill) {
        div5.innerHTML = `<h2>Skills:</h2> <h3>${myJson.Skills.programming}</h3>`

    });
   
myJson.Skills.Hobbies.forEach (function (hobby) {

        div6.innerHTML = `<h2>Hobbies :</h2> <h3>${myJson.Skills.Hobbies} </h3>`
       
    });
});

let div2 = document.createElement("div");
div2.innerHTML = `<h2>Namn: </h2>`
document.body.appendChild(div2);

let div3 = document.createElement("div");
div3.innerHTML = `<h2>Github: </h2>`
document.body.appendChild(div3);

let div4 = document.createElement("div");
div4.innerHTML = `<h2>Discord: </h2>`
document.body.appendChild(div4);

let div5 = document.createElement("div");
div5.innerHTML = `<h2>Skills: </h2>`
div5.className = "div5"
document.body.appendChild(div5);

let div6= document.createElement("div");
div6.innerHTML = `<h2>Hobbies: </h2>`
div6.className = "div6"
document.body.appendChild(div6);
