const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
let elements = document.querySelectorAll(".element");
for( let ele of elements ){
    ele.addEventListener("dragstart",(e)=>{
        let child = e.target;
        box2.addEventListener("dragover",(e)=>{
            e.preventDefault();
            e.stopPropagation();
        })
        box2.addEventListener("drop",()=>{
            box2.append(child);
            child = "";
        })
        box1.addEventListener("dragover",(e)=>{
            e.preventDefault();
            e.stopPropagation();
        })
        box1.addEventListener("drop",()=>{
            box1.append(child);
            child = "";
        })
    })
}