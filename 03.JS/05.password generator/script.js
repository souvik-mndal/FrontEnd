


let range = document.querySelector("#range");
let showrange = document.querySelector("#show-range");
let generate = document.querySelector("#generate");
let capitalL = document.querySelector("#capital");
let lowerL = document.querySelector("#lower");
let numberL = document.querySelector("#number");
let symbolL = document.querySelector("#symbol");
let h3 = document.querySelector("h3");
let copy = document.querySelector("#copy");


range.addEventListener("input",()=>{
    showrange.innerText = range.value;
})

let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let small = "abcdefghijklmnopqrstuvwxyz";
let symbol = "@!#$%+-*/&^(){}[]|?<>";
let number = "0123456789";

let all = "";
let ans = "";

function rndm(i){
    return Math.floor(Math.random()*i);
}

generate.addEventListener("click",()=>{
    if( capitalL.checked === true ){
        all += capital;
    }
    if( lowerL.checked === true ){
        all += small;
    }
    if( symbolL.checked === true ){
        all += symbol;
    }
    if( numberL.checked === true ){
        all += number;
    }
    if( all.length === 0 ){
        alert("you have to choose atleast one option");
    }
    console.log(all.length);
    for( let i=0 ; i<range.value ; i++ ){
        let rdm = rndm(all.length)
        ans += all.charAt(rdm);
        console.log(rdm,ans);
    }
    h3.innerText = ans;
    ans = "";
    all = "";
})

copy.addEventListener("click",()=>{
    if( h3.innerText === "" ){
        alert("Please generate a password first");
    }
    else{
        window.navigator.clipboard.writeText(h3.innerText);
        alert("copied")
    }
})