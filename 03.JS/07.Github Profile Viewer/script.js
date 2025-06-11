// let profile = document.querySelector("#profile");

// // https://api.github.com/users/souvik-mndal

// async function see(id) {
//   let response = await fetch(`https://api.github.com/users/${id}`);
//   let element = await response.json();
//   console.log(element);
//     display(element);
  
// } 
// document.querySelector("#search").addEventListener("click", () => {
//     document.querySelector("#showcase").innerHTML = `<span class="loader"></span>`;
//   let user = profile.value;
//   see(user);
// });

// function display(element){
//     let {
//         avatar_url,name,bio,followers,following,public_repos,html_url
//     } = element;
//     if( !avatar_url ){
//         document.querySelector("#showcase").innerHTML = `<h2>User Not Found</h2>`;
//         return;
//     }
//     if( !bio ){
//         bio = " ";
//     }
//     document.querySelector("#showcase").innerHTML = `
//     <div id="part1">
//                 <div id="imageCont">
//                     <img src="${avatar_url}" alt="">
//                 </div>
//                 <h3 id="name">${name}</h3>
//                 <h4 id="desc">${bio}</h4>
//             </div>
//             <div id="part2">
//                 <div id="socials">
//                     <div id="part1" class="nums">
//                         <h2>Follows</h2>
//                         <h3>${followers}</h3>
//                     </div>
//                     <div id="part2" class="nums">
//                         <h2>Following</h2>
//                         <h3>${following}</h3>
//                     </div>
//                     <div id="part3" class="nums">
//                         <h2>Repositories</h2>
//                         <h3>${public_repos}</h3>
//                     </div>
//                 </div>
//                 <a href = "${html_url}" target="_blank">
//                 <button id="visit">Visit Profile</button>
//                 </a>
//             </div>
//     `;
// }



// https://api.github.com/users/souvik-mndal

let search = document.querySelector("#search");
let profile = document.querySelector("#profile");
let showcase = document.querySelector("#showcase");

async function see(name){
    const req = await fetch(`https://api.github.com/users/${name}`)
    const res = await req.json();
    console.log(res);
    put(res);
    profile.value = "";
}

search.addEventListener("click",()=>{
    see(profile.value);
})

function put( res ){
    let bio;
    if( !res.bio ){
        bio = "";
    }
    else{
        bio = res.bio;
    }
    if( res.message === "Not Found" ){
        showcase.innerHTML = "User Not Found ";
    }
    else{
        showcase.innerHTML =  `
                            <div id="part1">
                                <div id="imageCont">
                                    <img src="${res.avatar_url}" alt="">
                                </div>
                                <h3 id="name">${res.name}</h3>
                                <h4 id="desc">${bio}</h4>
                            </div>
                            <div id="part2">
                                <div id="socials">
                                    <div id="part1" class="nums">
                                        <h2>Follows</h2>
                                        <h3>${res.followers}</h3>
                                    </div>
                                    <div id="part2" class="nums">
                                        <h2>Following</h2>
                                        <h3>${res.following}</h3>
                                    </div>
                                    <div id="part3" class="nums">
                                        <h2>Repositories</h2>
                                        <h3>${res.public_repos}</h3>
                                    </div>
                                </div>
                                <a href = "${res.html_url}" target="_blank">
                                <button id="visit">Visit Profile</button>
                                </a>
                            </div>
    `
    }
    
}