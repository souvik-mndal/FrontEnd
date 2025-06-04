const grid = document.querySelector("#grid-cont");
let child = document.querySelectorAll(".element");
let h = document.querySelector("#h3");
// console.log(child);
let current = "X";

let count = 0;

function start(e){
    if( e.target.id !== "grid-cont"){
        if( e.target.innerText === "" ){
            e.target.innerText = current;
            count++;
            console.log(count);
            check();
            if( count === 9 && h.innerText === ""){
                h.innerText = "Match is Draw";
            }
            if( current === "X" ){
                current = "O" ;
            }
            else{
                current = "X";
            }
        }
    }
}


grid.addEventListener("click", start)

let condition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function check(){
    for( let ele of condition ){
        let b0 = ele[0];
        let b1 = ele[1];
        let b2 = ele[2];
        let i0 = child[b0].innerText;
        let i1 = child[b1].innerText;
        let i2 = child[b2].innerText;
        let c0 = child[b0];
        let c1 = child[b1];
        let c2 = child[b2];
        // console.log(i0 , i1 , i2);
        if( i0 !== "" && i1 !== "" && i2 !== "" ){
            if( i0 === i1 && i1 === i2){
                c0.classList.add("winner");
                c1.classList.add("winner");
                c2.classList.add("winner");
                h.innerText = `The Winner is ${i0}`
                grid.removeEventListener("click",start);
            }
        }
    }
}

let btn = document.querySelector("#res");
btn.addEventListener("dblclick",()=>{
    for( let ement of child ){
        ement.innerText = "";
        ement.classList.remove("winner");
    }
    h.innerText = "";
grid.addEventListener("click", start)
current = "X";
count = 0;

})
