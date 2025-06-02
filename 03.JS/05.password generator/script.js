const range = document.querySelector("#range");
const showRange = document.querySelector("#show-range");
const capital = document.querySelector("#capital");
const lower = document.querySelector("#lower");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");
const generate = document.querySelector("#generate");
const copy = document.querySelector("#copy");

range.addEventListener("input",()=>{
    showRange.innerText = range.value ;
})
let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sml = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let sym = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

let all = "";
let ans = "";

function rndm(){
    let ele = Math.floor((Math.random()*all.length));
    return ele;
}
generate.addEventListener('click',()=>{
    if( capital.checked === true ){
        all+=cap;
        console.log(all);
    }
    if( lower.checked === true ){
        all+=sml;
        console.log(all);
    }
    if( number.checked === true ){
        all+=num;
        console.log(all);
    }
    if( symbol.checked === true ){
        all+=sym;
        console.log(all);
    }
    if(all === "" ){
        alert("Please select atleast one field");
    }
    for( let i=0 ; i<range.value ; i++ ){
        let val = rndm();
        ans += all.charAt(val);
        console.log(all.charAt(val));
    }
    document.querySelector("h3").innerText = ans ;
    ans = "";
    all = "";
})
copy.addEventListener("click",()=>{
    let cp = document.querySelector("h3").innerText
    if( cp === ""){
        alert("Empty Value");
    }
    else{
        alert("Copied to Clipboard");
    }
    window.navigator.clipboard.writeText(cp)
    
})