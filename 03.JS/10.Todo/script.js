


let arr = JSON.parse(localStorage.getItem("todo")) || [];


let input = document.querySelector("#input");
let add = document.querySelector("#add");
let tasks = document.querySelector("#tasks");

let id = 0;
function display(){
    tasks.innerHTML = "";
    id=0;
    for( let tdo of arr ){
        toAdd( tdo.input , tdo.check , id );
        id++;
    }
}

function toAdd( inpuu , checkuu , id ){

    let div = document.createElement("div");
    div.setAttribute("class","tsk");
    div.setAttribute("id", id );
    div.innerHTML = `
                    <input type="checkbox" name="complete" id="cbox">              
                    <button class="cbtn"><p class="cross">X</p></button>
                    <p class="do">${inpuu}</p>`
    
    
    let remove = div.querySelectorAll(".cbtn");
    let cbox = div.querySelector("#cbox");
    let doo = div.querySelectorAll(".do");
    let i = div.id;
    
    remove[0].addEventListener("click",(e)=>{
        e.target.parentNode.parentNode.remove();
        dell( i );
    })
    if( checkuu === true ){
        cbox.setAttribute("checked",true);
        doo[0].style.textDecoration = "line-through";
    }
    else{
        doo[0].style.textDecoration = "none";
    }
    cbox.addEventListener("click",(e)=>{
        if( cbox.checked === true ){
            doo[0].style.textDecoration = "line-through";
            line(e.target.parentNode.id , cbox.checked);
        }
        else{
            doo[0].style.textDecoration = "none";
            line(e.target.parentNode.id , cbox.checked);
        }
    })
    tasks.append(div);
}

function line( iid , value){
    arr[iid].check = value;
    console.log(arr[iid]);
    localStorage.setItem("todo",JSON.stringify(arr));
    // display();
}

function dell(idd){
    console.log(idd);
    arr.splice(idd,1);
    localStorage.setItem("todo",JSON.stringify(arr));
    display();
}

add.addEventListener("click",()=>{
    if( input.value === "" ){
        alert("empty note");
        return;
    }
    arr.push({"input":input.value,"check":false});
    console.log(id);
    toAdd( input.value , false , id);
    id++;
    input.value = "";
    localStorage.setItem("todo",JSON.stringify(arr));
})

display();
