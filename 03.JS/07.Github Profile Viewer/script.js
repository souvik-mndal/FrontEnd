



// // https://api.github.com/users/souvik-mndal

// let search = document.querySelector("#search");
// let profile = document.querySelector("#profile");
// let showcase = document.querySelector("#showcase");

// async function see(name){
//     const req = await fetch(`https://api.github.com/users/${name}`)
//     const res = await req.json();
//     console.log(res);
//     put(res);
//     profile.value = "";
// }

// search.addEventListener("click",()=>{
//     if( profile.value === "" ){
//         alert("Give a username")
//     }
//     else{

//         see(profile.value);
//     }
// })

// function put( res ){
//     let bio;
//     if( !res.bio ){
//         bio = "";
//     }
//     else{
//         bio = res.bio;
//     }
//     if( res.message === "Not Found" ){
//         showcase.innerHTML = "User Not Found ";
//     }
//     else{
//         showcase.innerHTML =  `
//                             <div id="part1">
//                                 <div id="imageCont">
//                                     <img src="${res.avatar_url}" alt="">
//                                 </div>
//                                 <h3 id="name">${res.name}</h3>
//                                 <h4 id="desc">${bio}</h4>
//                             </div>
//                             <div id="part2">
//                                 <div id="socials">
//                                     <div id="part1" class="nums">
//                                         <h2>Follows</h2>
//                                         <h3>${res.followers}</h3>
//                                     </div>
//                                     <div id="part2" class="nums">
//                                         <h2>Following</h2>
//                                         <h3>${res.following}</h3>
//                                     </div>
//                                     <div id="part3" class="nums">
//                                         <h2>Repositories</h2>
//                                         <h3>${res.public_repos}</h3>
//                                     </div>
//                                 </div>
//                                 <a href = "${res.html_url}" target="_blank">
//                                 <button id="visit">Visit Profile</button>
//                                 </a>
//                             </div>
//     `
//     }
    
// }


// https://api.github.com/users/souvik-mndal

let name = document.querySelector("#profile");
let search = document.querySelector("#search");
let showcase = document.querySelector("#showcase");

async function api( nme ){
    let response = await fetch(`https://api.github.com/users/${nme}`)
    let result = await response.json();
    console.log(result);
    respo(result);
    name.value = ""
}

function respo(list){
    let bio;
    if( !list.bio ){
        bio = "";
    }
    else{
        bio = list.bio;
    }
    if( list.status === "404" ){
        showcase.innerHTML = "User Not Found"
    }
    else{
        showcase.innerHTML = ` <div id="part1">
                                <div id="imageCont">
                                    <img src="${list.avatar_url}" alt="">
                                </div>
                                <h3 id="name">${list.name}</h3>
                                <h4 id="desc">${bio}</h4>
                            </div>
                            <div id="part2">
                                <div id="socials">
                                    <div id="part1" class="nums">
                                        <h2>Follows</h2>
                                        <h3>${list.followers}</h3>
                                    </div>
                                    <div id="part2" class="nums">
                                        <h2>Following</h2>
                                        <h3>${list.following}</h3>
                                    </div>
                                    <div id="part3" class="nums">
                                        <h2>Repositories</h2>
                                        <h3>${list.public_repos}</h3>
                                    </div>
                                </div>
                                <a href = "${list.url}" target="_blank">
                                <button id="visit">Visit Profile</button>
                                </a>
                            </div>`
    }
}

search.addEventListener("click",()=>{
    if( name.value.trim() === "" ){
        alert("PLEASE enter a valid username")
    }
    else{
        showcase.innerHTML = `<span class="loader"></span>`
        api( name.value )
    }

})









