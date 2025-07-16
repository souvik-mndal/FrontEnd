



// const grid = document.querySelector("#grid-cont");
// const ele = document.querySelectorAll(".element");
// const h3 = document.querySelector("#h3");
// const restart = document.querySelector("#res");


// let current = "X";

// let count = 0;

// function add(e){
//     if( e.target.id !== "grid-cont" ){
//         if( e.target.innerText === "" ){
//             e.target.innerText = current;
//             console.log(count);
//             count++;
//             check();
//             if( count === 9 && h3.innerText === "" ){
//                 h3.innerText = "The match is draw";
//             }
//             if( current === "X" ){
//                 current = "O";
//             }
//             else{
//                 current = "X";
//             }
//         }
//     }
// }
// grid.addEventListener("click", add)

// let logic = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// function check(){
//     for( let l of logic ){
//         let one = ele[l[0]].innerText;
//         let two = ele[l[1]].innerText;
//         let three = ele[l[2]].innerText;
//         if( one !== "" && two !== "" && three !== "" ){
//             if( one === two && two === three){
//                 console.log(current);
//                 h3.innerText = `The Winner is ${current}`;
//                 grid.removeEventListener("click",add);
//             }
//         }
//     }

// }
// restart.addEventListener("click",()=>{
//     for( let l of logic ){
//          ele[l[0]].innerText = "";
//          ele[l[1]].innerText = "";
//          ele[l[2]].innerText = "";
         
//         }
//         current = "X";
//         h3.innerText = "";
//         count = 0;
//         grid.addEventListener("click", add)
// })






const parent = document.querySelector("#grid-cont")
const box = document.querySelectorAll(".element")
const h3 = document.querySelector("#h3")
const restart = document.querySelector("#res")
let current = "X";
let count = 0;
let ans = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

function startgame(e){
    if(e.target.className === "element" ){
        if( e.target.innerText === "" ){
            e.target.innerText = current;
            count++;
            check();
            if( count == 9 && h3.innerText == "" ){
                h3.innerText = "The match is a DRAW"
            }
            if( current === "X" ){
                current = "O"
            }
            else{
                current = "X"
            }
        }
    }
}

parent.addEventListener("click",startgame)

function check(){
    ans.forEach((ele)=>{
        let first = box[ele[0]].innerText
        let second = box[ele[1]].innerText
        let third = box[ele[2]].innerText
        if( first !== "" && second !== "" && third !== "" ){
            if( first === second && second === third ){
                h3.innerText = `The Winner is player - ${current}`
                box[ele[0]].classList.add("winner")
                box[ele[1]].classList.add("winner")
                box[ele[2]].classList.add("winner")
                parent.removeEventListener("click",startgame)
            }
        }
    })
}

restart.addEventListener("click",()=>{
    h3.innerText = "";
    box.forEach((ele)=>{
        ele.innerText = ""
        ele.classList.remove("winner")
    })
    current = "X"
    count = 0;
    parent.addEventListener("click",startgame)
})