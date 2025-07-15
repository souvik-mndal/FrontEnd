


// let range = document.querySelector("#range");
// let showrange = document.querySelector("#show-range");
// let generate = document.querySelector("#generate");
// let capitalL = document.querySelector("#capital");
// let lowerL = document.querySelector("#lower");
// let numberL = document.querySelector("#number");
// let symbolL = document.querySelector("#symbol");
// let h3 = document.querySelector("h3");
// let copy = document.querySelector("#copy");


// range.addEventListener("input",()=>{
//     showrange.innerText = range.value;
// })

// let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let small = "abcdefghijklmnopqrstuvwxyz";
// let symbol = "@!#$%+-*/&^(){}[]|?<>";
// let number = "0123456789";

// let all = "";
// let ans = "";

// function rndm(i){
//     return Math.floor(Math.random()*i);
// }

// generate.addEventListener("click",()=>{
//     if( capitalL.checked === true ){
//         all += capital;
//     }
//     if( lowerL.checked === true ){
//         all += small;
//     }
//     if( symbolL.checked === true ){
//         all += symbol;
//     }
//     if( numberL.checked === true ){
//         all += number;
//     }
//     if( all.length === 0 ){
//         alert("you have to choose atleast one option");
//     }
//     console.log(all.length);
//     for( let i=0 ; i<range.value ; i++ ){
//         let rdm = rndm(all.length)
//         ans += all.charAt(rdm);
//         console.log(rdm,ans);
//     }
//     h3.innerText = ans;
//     ans = "";
//     all = "";
// })

// copy.addEventListener("click",()=>{
//     if( h3.innerText === "" ){
//         alert("Please generate a password first");
//     }
//     else{
//         window.navigator.clipboard.writeText(h3.innerText);
//         alert("copied")
//     }
// })




const h3 = document.querySelector("h3")
const slider = document.querySelector("#range")
const slider_no = document.querySelector("#show-range")
const capital = document.querySelector("#capital")
const lower = document.querySelector("#lower")
const number = document.querySelector("#number")
const symbol = document.querySelector("#symbol")
const generate = document.querySelector("#generate")
const copy = document.querySelector("#copy")

let capital_val = "QWERTYUIOPASDFGHJKLZXCVBNM"
let lower_val = "qwertyuiopasdfghjklzxcvbnm"
let number_val = "7410852963"
let symbol_val = "~!@#$%^&*()_+-=[]{}|;':,?"

let sum = "";

function rndm(len){
    return Math.floor(Math.random()*len)
}

slider.addEventListener("input", (e) => {
    slider_no.innerText = slider.value;
})
generate.addEventListener("click",(e)=>{
    e.preventDefault();
    if( capital.checked ){
        sum += capital_val
    }
    if( lower.checked ){
        sum += lower_val
    }
    if( number.checked ){
        sum += number_val
    }
    if( symbol.checked ){
        sum += symbol_val
    }
    console.log(sum);
    if( sum === "" ){
        h3.innerText = "*Please Select atleast one field*"
    }
    let ans = "";
    for( let i=0 ; i<slider.value ; i++ ){
        let random_no = rndm(sum.length);
        ans += sum.charAt(random_no);
    }
    h3.innerText = ans;
    sum = "";
})

copy.addEventListener("click", () => {
    if( h3.innerText === "" ){}
    else{
        window.navigator.clipboard.writeText(h3.innerText);
    }
})
