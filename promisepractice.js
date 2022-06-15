//  const animal = "Lion";
// const animal2 = "Tiger";
//   const div = document.getElementById("canvas");
// const picture = document.createElement("img");
// picture.src = "/download.gif";
//   div.appendChild(picture);


// let funSignin = new Promise(function (resolve, reject) {

//   if (animal === "Lion"|| animal2 === "Tiger") {
//     setTimeout(() => resolve("These are the kings of the jungle"), 1000);
//   } else {
//     setTimeout(()=>reject("These are imposters"),1000)
//     }

// });


// funSignin.then(function (newanimal) {
//     console.log("I am a Cheetah");
//     return newanimal;
// })
  
// funSignin.then(() => {
//   setTimeout(() => {
//     console.log("I'm here");
//   }, 3000);
// });

// const { Octokit } = require("@octokit/rest");
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
const person = document.getElementById("inputInfo");
const clickBtn = document.getElementById("clickBtn");
let message=document.getElementById("statement")
const div = document.getElementById("canvas");
const image = document.createElement("img");
image.src = "/download.gif";
div.appendChild(image);
const octokit = new Octokit();


clickBtn.addEventListener("click", (btn) => {
    btn.preventDefault();
    octokit.rest.users
        .getByUsername({
            username: "brasmith9"
        })
        .then((data) => {
            message.innerText = data.data.company
        })
        .catch((err) => {
            console.log(err)
        }
        )
})
  




//   async function People() {
//   const testRun = await octokit.request("GET /users/brasmith9");
//   console.log(testRun.data.company);
//   return testRun;
// }
// console.log(People());


