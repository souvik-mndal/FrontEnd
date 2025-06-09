// 5fc5d0fb93231f009fa33fc540190d94f1b07790

// https://emoji-api.com/emojis?access_key=5fc5d0fb93231f009fa33fc540190d94f1b07790

let ACCESS_KEY = "5fc5d0fb93231f009fa33fc540190d94f1b07790";

let ji = document.querySelector("#emoji");

function rndm(len){
    return Math.floor(Math.random()*len)
}

async function emo(){
    const req = await fetch(`https://emoji-api.com/emojis?access_key=${ACCESS_KEY}`)
    const res = await req.json();
    let r = rndm(res.length)
    ji.innerText = res[r].character;
}

let btn =  document.querySelector("#gen");
btn.addEventListener("click",()=>{
    emo();
})