// const box1 = document.querySelector("#box1");
// const box2 = document.querySelector("#box2");
// let elements = document.querySelectorAll(".element");
// for( let ele of elements ){
//     ele.addEventListener("dragstart",(e)=>{
//         let child = e.target;
//         box2.addEventListener("dragover",(e)=>{
//             e.preventDefault();
//             e.stopPropagation();
//         })
//         box2.addEventListener("drop",()=>{
//             box2.append(child);
//             child = "";
//         })
//         box1.addEventListener("dragover",(e)=>{
//             e.preventDefault();
//             e.stopPropagation();
//         })
//         box1.addEventListener("drop",()=>{
//             box1.append(child);
//             child = "";
//         })
//     })
// }


// const box1 = document.querySelector("#box1");
// const box2 = document.querySelector("#box2");
// let ele = document.querySelectorAll(".element");

// for( let el of ele ){
//     el.addEventListener("dragstart",(e)=>{
//         let item = e.target;
//         // console.log(item);
//         box2.addEventListener("dragover",(e)=>{
//             e.preventDefault();
//             e.stopPropagation();
//         })
//         box2.addEventListener("drop",()=>{
//             box2.append(item);
//             item = "";
//         })
//         box1.addEventListener("dragover",(e)=>{
//             e.preventDefault();
//             e.stopPropagation();
//         })
//         box1.addEventListener("drop",()=>{
//             box1.append(item);
//             item = "";
//         })
//     })
// }


const box1 = document.querySelector("#box1")
const box2 = document.querySelector("#box2")
const boxes = document.querySelectorAll(".element")
boxes.forEach((items) => {
    items.addEventListener("dragstart",(e) => {
        let i = e.target;
        box2.addEventListener("dragover",(e) => {
            e.preventDefault();
        })
        box2.addEventListener("drop",() => {
            box2.append(i);
            i = "";
        })
        box1.addEventListener("dragover",(e) => {
            e.preventDefault();
        })
        box1.addEventListener("drop",() => {
            box1.append(i);
            i = "";
        })
    })
})