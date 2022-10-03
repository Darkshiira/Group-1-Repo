import myJson from "./data/dev/Darkshiira.json" assert { type: "json" };
import linusJson from "./data/dev/linus.json" assert { type: "json" };
import erikJson from "./data/dev/ErikThorsson83.json" assert { type: "json" };
import dennis from "./data/dev/dennis.json" assert { type: "json"};
// The webpage is built with different divs.
//To modify the content you can each change the innerHTML of each divs when clicking on your button.

//Title:
let div1 = document.createElement("div");
div1.innerHTML = `<h1>Group 1: </h1>`
document.body.appendChild(div1);

//Hannas button:
let buttonHanna = document.createElement("button");
document.body.appendChild(buttonHanna);
buttonHanna.innerHTML = `${myJson.firstname}`;

//Linus button:
let linusButton = document.createElement("button");
document.body.appendChild(linusButton);
linusButton.innerHTML = `${linusJson.firstname}`;

//Eriks button:
let erikButton = document.createElement("button");
document.body.appendChild(erikButton);
erikButton.innerHTML = `${erikJson.firstname}`;

//Dennis button:
let dennisButton = document.createElement("button");
document.body.appendChild(dennisButton);
dennisButton.innerHTML = `${dennis.firstname}`;


//Name box:
let div2 = document.createElement("div");
div2.innerHTML = `<h2>Namn: </h2>`
document.body.appendChild(div2);
//Github box:
let div3 = document.createElement("div");
div3.innerHTML = `<h2>Github: </h2>`
document.body.appendChild(div3);
//Discord box:
let div4 = document.createElement("div");
div4.innerHTML = `<h2>Discord: </h2>`
document.body.appendChild(div4);
//Skill box:
let div5 = document.createElement("div");
div5.innerHTML = `<h2>Skills: </h2>`
div5.className = "div5"
document.body.appendChild(div5);
//Hobby box:
let div6= document.createElement("div");
div6.innerHTML = `<h2>Hobbies: </h2>`
div6.className = "div6"
document.body.appendChild(div6);
//Cat or Dog box
let div7 = document.createElement('div')
div7.innerHTML= `<h2>Cat or Dog: </h2>`
document.body.appendChild(div7);
//To add an img:
let img = document.createElement("img");
document.body.appendChild(img);


//Gör att infon hamnar på samma rad som rubriken
const divs = [div2,div3,div4,div5,div6]
for(let data of divs){
    data.style.display="flex"
    data.style.alignItems="center"
}


//---------------When clicking on Hannas button:
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

    img.src = "https://t4.ftcdn.net/jpg/00/41/67/51/360_F_41675161_ZXCYtzeFlNMI5mQ51p4sa5flTttH9bHZ.jpg";
});
// ------------------When clicking on Hannas button ends here


/*---------------------Linus Button------------------*/
linusButton.addEventListener('click', function(){
    div2.innerHTML = `<h2>Namn:</h2> <h3>${linusJson.firstname} ${linusJson.lastname}</h3>`
    div3.innerHTML = `<h2>Github: </h2> <h3>${linusJson.github}</h3>`
    div4.innerHTML = `<h2>Discord: </h2> <h3>${linusJson.discord}</h3>`
    div5.innerHTML = `<h2>Skills: </h2> <h3>${linusJson.skills}</h3>`
    div6.innerHTML = `<h2>Hobbies: </h2> <h3>${linusJson.hobbies}</h3>`
    img.src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
  });
 /*-----------------------------------------------------*/

 /*---------------------Erik Button------------------*/
erikButton.addEventListener('click', function(){
    div2.innerHTML = `<h2>Namn:</h2> <h3>${erikJson.firstname} ${erikJson.lastname}</h3>`
    div3.innerHTML = `<h2>Github: </h2> <h3>${erikJson.github}</h3>`
    div4.innerHTML = `<h2>Discord: </h2> <h3>${erikJson.discord}</h3>`
    div5.innerHTML = `<h2>Skills: </h2> <h3>${erikJson.skills}</h3>`
    div6.innerHTML = `<h2>Hobbies: </h2> <h3>${erikJson.hobbies}</h3>`
    img.src = "https://www.akc.org/wp-content/uploads/2015/06/Golden-Retriever-laying-down-playing-with-a-cat.jpeg"
  });
 /*-----------------------------------------------------*/

 
/*----------------------Dennis Button-------------------*/
dennisButton.addEventListener('click', function(){
    div2.innerHTML = `<h2>Namn:</h2> <h3>${dennis.firstname} ${dennis.lastname}</h3>`
    div3.innerHTML = `<h2>Github: </h2> <h3>${dennis.github}</h3>`
    div4.innerHTML = `<h2>Discord: </h2> <h3>${dennis.discord}</h3>`
    div5.innerHTML = `<h2>Skills: </h2> <h3>${dennis.skills}</h3>`
    div6.innerHTML = `<h2>Hobbies: </h2> <h3>${dennis.hobbies}</h3>`
    img.src = "https://upload.wikimedia.org/wikipedia/en/f/f6/Tom_Tom_and_Jerry.png"
});
/*-------------------------------------------------------*/