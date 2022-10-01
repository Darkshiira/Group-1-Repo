import myJson from "./data/dev/Darkshiira.json" assert { type: "json" };


let div1 = document.createElement("div");
div1.innerHTML = `<h1>Group 1: </h1>`
document.body.appendChild(div1);

let button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = `${myJson.firstname}`;
button.addEventListener("click", function() {
    div2.innerHTML = `<h2>Namn:</h2> <h3>${myJson.firstname} ${myJson.lastname}</h3>`
    div3.innerHTML = `<h2>Github: </h2> <h3>${myJson.github}</h3>`
    div4.innerHTML = `<h2>Discord: </h2> <h3>${myJson.discord}</h3>`

    for (let i = 0; i < (myJson.Skills.programming).length; i++) {

        let div = document.createElement("div");
        div.innerHTML = `<h2>${[i+1]} ${myJson.Skills.programming[i]}</h2>`
        document.body.appendChild(div);
    }
    let div6= document.createElement("div");
    div6.innerHTML = `<h2>Hobbies: </h2>`
    document.body.appendChild(div6);
    for (let i = 0; i < (myJson.Skills.Hobbies).length; i++) {

        let div = document.createElement("div");
        div.innerHTML = `<h2>${[i+1]} ${myJson.Skills.Hobbies[i]}</h2>`
        document.body.appendChild(div);
    }
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
document.body.appendChild(div5);

