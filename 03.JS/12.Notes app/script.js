



let notecreate = document.querySelector("#note");
let allNotes = document.querySelector("#allNotes");

let id = 0;
let first = null;

let arr = JSON.parse(localStorage.getItem("note")) || [];

function display(){
    first = null;
    allNotes.innerHTML = "";
    id = 0;
    for( let el of arr ){
        console.log(el);
        gene(el.n , el.date);
    }
}

function gene( elem , dte ){
    

    let div = document.createElement("div");
    div.setAttribute("class","cont");
    div.setAttribute("id", `note-${id}` );
    div.innerHTML = `<div id="btns">
    <button id="edit">Edit</button>
    <button id="submit">Submit</button>
    <button id="remove">Remove</button>
    <div id="pageschange">
        <div id="left" class="dir"><i class="ri-arrow-left-line"></i></div>
        <abbr title="page number"><p id="num">${id+1}</p></abbr>
        <div id="right" class="dir"><i class="ri-arrow-right-line"></i></div>
    </div>
    </div>
    <div id="textss">
        <div id="noteText">${elem}</div>
        <textarea name="take" id="noteTake" >${elem}</textarea>
    </div>
    <div id="date">${dte}</div>`
    
    
    let edit = div.querySelector("#edit");
    let submit = div.querySelector("#submit");
    let remove = div.querySelector("#remove");
    let noteText = div.querySelector("#noteText");
    let noteTake = div.querySelector("#noteTake");
    let left = div.querySelector("#left");
    let right = div.querySelector("#right");
    let num = div.querySelector("#num");
    edit.addEventListener("click",()=>{
        submit.style.display = "initial";
        noteText.style.display = "none";
        noteTake.style.display = "initial";
        submit.addEventListener("click",()=>{
            noteText.innerText = noteTake.value;
            noteTake.style.display = "none";
            noteText.style.display = "block";
            submit.style.display = "none";
            // arr[id] = noteTake.value;
            let ftch = div.id;
            ftch = ftch.split("-");
            arr[ftch[1]] = {"n":noteTake.value , "date":dte};
            localStorage.setItem("note",JSON.stringify(arr));
        })
    })
    remove.addEventListener("click",()=>{
        div.remove();
        remo( div );
    })
    if( !first && first !== 0){
        first = id;
        // console.log(first);
    }
    else{
        let current = first;
        let currEle = allNotes.querySelector(`#note-${current}`);
        console.log(currEle);
        currEle.style.display = "none";
        div.style.display = "block";
        first = id;
        console.log(first);
    }
    left.addEventListener("click",()=>{
        let val = parseInt(num.innerText); ;
        if( val > 1 ){
            let prev = val - 2;
            let ele = allNotes.querySelector(`#note-${prev}`)
            let current = first;
            let currEle = allNotes.querySelector(`#note-${current}`);
            currEle.style.display = "none";
            ele.style.display = "block";
            first = prev;
        }
        // console.log(first);
    })
    right.addEventListener("click",()=>{
        let val = parseInt(num.innerText); ;
        if( val < id ){
            let nxt = val;
            // console.log("nect",nxt);
            let ele = allNotes.querySelector(`#note-${nxt}`)
            // console.log(ele);
            let current = first;
            let currEle = allNotes.querySelector(`#note-${current}`);
            // console.log(currEle);
            currEle.style.display = "none";
            ele.style.display = "block";
            first = nxt;
        }
        // console.log(first);
    })
    allNotes.append(div);
    id++;
}

notecreate.addEventListener("click",()=>{
    
    let date = new Date().toLocaleString();

    gene("" , date);
    localStorage.setItem("note",JSON.stringify(arr))

})

function remo( item ){
    let ge =  item.id;
    ge = ge.split("-");
    arr.splice( ge[1] , 1 );
    localStorage.setItem("note",JSON.stringify(arr));
    display();
    // console.log("hehe");
}

display();