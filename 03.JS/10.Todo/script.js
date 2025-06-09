let input = document.querySelector("#input");
let btn = document.querySelector("#add");
let c = 0;
btn.addEventListener("click",()=>{
    console.log(input.value);
    // localStorage.setItem(c,input.value);
    addin( input.value );
    input.value = "";
})
// {
// function removeDo( i ){
//     let d = document.getElementById(i);
//     // console.log(d);
//     d.remove();
// }
// function slash( i ){
//     let d = document.getElementById(i);
    
//     let dd = d.children[2];
//     // console.log(d.children[0].checked );
//     if( d.children[0].checked === true ){
//         dd.style.textDecoration = "line-through";
//     }
//     else{
//         dd.style.textDecoration = "none";
//     }
    
// }

// function addin( inp ){
//     let item = document.createElement("div");
//     item.setAttribute("class","tsk");
//     item.setAttribute("id", c );
//     item.innerHTML = `
//     <input type="checkbox" name="complete" onclick=slash(${c})>
//     <button class="cbtn" onclick=removeDo(${c}) ><p class="cross">X</p></button>
    
//     <p class="do">${inp}</p>
    
//     `
//     document.querySelector("#tasks").append(item);
//     c++;
// }
// }

let arr = JSON.parse(localStorage.getItem("todo"))  || [];
function todos( ){
    document.querySelector("#tasks").innerHTML = ``;
    c=0;
    arr.map((to)=>{
        str( to );
    })
}

function del(id){
    arr.splice(id,1);
    localStorage.setItem("todo",JSON.stringify(arr));
    console.log(id);
    if( arr.length === 0 ){
        c = 0;
    }
    todos();
}

function str (inp){
    let item = document.createElement("div");
    item.setAttribute("class","tsk");
    item.setAttribute("id", c );
    item.innerHTML = `
    <input type="checkbox" name="complete" >
    <button class="cbtn" id="${c}" ><p class="cross">X</p></button>
    
    <p class="do">${inp.input}</p>
    `

    let b = item.getElementsByTagName("button");
    b[0].addEventListener("click",(e)=>{
        b[0].parentNode.remove();
        del(e.target.parentNode.id);
    })  
    let p = item.getElementsByTagName("input");
    let t = item.getElementsByClassName("do");
    if( inp.complete === true ){
        // t[0].style.textDecoration = "line-through";
        t[0].style.textDecoration = "line-through";
        p[0].setAttribute("checked",true);
    }
    else{
        t[0].style.textDecoration = "none"
    }
    p[0].addEventListener("click",(e)=>{
        // console.log(e.target.checked);
        toggle( e.target.checked , e.target.parentNode.id )
        let itm = e.target.nextElementSibling.nextElementSibling;
        if( p[0].checked === true ){
            itm.style.textDecoration = "line-through";
        }
        else{
            itm.style.textDecoration = "none";
        }
    })
    
    document.querySelector("#tasks").append(item);
    c++;
}

function toggle( value , id ){
    arr[id].complete = !arr[id].complete;
    localStorage.setItem("todo",JSON.stringify(arr));
}

function addin( inp ){
    arr.push({ input : inp , complete : false });
    // c++;
    localStorage.setItem("todo",JSON.stringify(arr));
    todos();
}

todos( )