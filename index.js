//side menu
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}

function closemenu(){
  sidemenu.style.right = "-36rem";
}
//about section linkes-content
var tablinks = document.getElementsByClassName("teb-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
  for(tablink of tablinks){
   tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
   tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}


//rendome quote genrator
const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getquote(api_url);


// rock paper Scissor
const  gamecontainer = document.querySelector(".game-container");
  userresult = document.querySelector(".user_result img");
  cpuresult = document.querySelector(".cpu_result img");
  result = document.querySelector(".result");
  optionimages = document.querySelectorAll(".option_image");

optionimages.forEach((image, index) => {
    image.addEventListener("click",(e) => {
        image.classList.add("active")

        userresult.src = cpuresult.src = "images/rock.png"
        result.textContent = "Wait..."

        optionimages.forEach((image2, index2) => {

            index !== index2 && image2.classList.remove("active")
        })

        gamecontainer.classList.add("start");


let time = setTimeout(() => {
    gamecontainer.classList.remove("start");

    let imagesrc = e.target.querySelector("img").src
    userresult.src = imagesrc
   

    let randomnumber = Math.floor(Math.random() * 3)

    let cpuimage = ["images/rock.png","images/paper.png","images/scisser.png"]
    cpuresult.src = cpuimage[randomnumber]

    let cpuvalue = ["R","P","S"][randomnumber]
    let uservalue = ["R","P","S"][index]

    let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
    };
    let outcomesvalue = outcomes[uservalue + cpuvalue]

    result.textContent = uservalue === cpuvalue ? "Match Draw" : `${outcomesvalue} Won!!`
}, 2500);
       
    })
})

// rendom password Generaetor
const passwordbox = document.getElementById("password");
const password_lengths = [10,12,14,16];
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "~!@#$%^&*()_+=/";

const alchars = uppercase + lowercase + number + symbol;

function createpassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    const random = Math.floor(Math.random() * password_lengths.length);
    const passlen = password_lengths[random]

    // while(length > password.length){
    while(passlen > password.length){
        password += alchars[Math.floor(Math.random() * alchars.length)];
    }
    passwordbox.value = password;
}
document.getElementById("copy-button").addEventListener('click',function(){
   navigator.clipboard.writeText(passwordbox.value)
})

// for get data in google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbxsKilduLHAuROndxApRBbpEG8yQmDxxmnTh4k-f3LaFjBhRERUxW2osW47Gqv9OK8EVg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  alert("please wait Message is sending..")
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function(){
        msg.innerHTML = ""
      },7000);
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// for loder
window.addEventListener("load",function(){
  document.getElementById("loder").style.display = "none";
 })













