



// https://api.unsplash.com/search/photos?query=shoes&client_id=QtrEP0lP9hR3JuTzWG8GuyaN8W-nFo06Td9g7_LOk0M



let ACCESS_TOKEN = "QtrEP0lP9hR3JuTzWG8GuyaN8W-nFo06Td9g7_LOk0M";

let input = document.querySelector("#input");
let search = document.querySelector("#search");
let imgWrap = document.querySelector("#imageWrap");
let load = document.querySelector("#load");

let page = 1;
let inp = input.value;
async function call( item ){
    let req = await fetch(`https://api.unsplash.com/search/photos?query=${item}&client_id=${ACCESS_TOKEN}&page=${page}`)
    let res = await req.json();
    console.log(res);
    add( res )
}

search.addEventListener("click",()=>{
    page = 1;
    imgWrap.innerHTML = "";
    if( input.value === "" ){
        imgWrap.innerHTML = "No match found";
        return;
    }
    call(input.value);
    inp = input.value;
    input.value = "";
})

function add( res ){
    console.log(page);
    for( let re of res.results ){
        // console.log(re);
        let div = document.createElement("div");
        div.setAttribute("class","card");
        div.innerHTML = `<div id="pro">
                    <div id="userimg"><img src="${re.user.profile_image.medium}" alt=""></div>
                    <p id="user">${re.user.username}</p>
                    </div>
                    <a href = "${re.links.html}" target = "_blank">
                    <div id="actualimg">
                        <img src="${re.urls.regular}" alt="">
                    </div>
                    </a>
                    <div id="desc"><p>${re.alt_description}</p></div>
                `
        imgWrap.append(div);
        load.style.display = "initial"
    }
}

load.addEventListener("click",()=>{
    page++;
    call( inp );
})