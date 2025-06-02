const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
let child = document.querySelectorAll(".element");
for( let ele of child ){
    ele.addEventListener("dragstart",(e)=>{
        let item = e.target;
        box2.addEventListener("dragover",(e)=>{
            e.preventDefault();
            e.stopPropagation();
        })
        box2.addEventListener("drop",()=>{
            box2.append(item);
            item = "";
        })
        box1.addEventListener("dragover",(e)=>{
            e.preventDefault();
            e.stopPropagation();
        })
        box1.addEventListener("drop",()=>{
            box1.append(item);
            item = "";
        })
    })
}