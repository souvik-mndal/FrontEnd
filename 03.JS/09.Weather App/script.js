let input = document.querySelector("#input");
const search = document.querySelector("#search");
const onn = document.querySelector("#own");

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



const ACCESS_TOKEN = "97deba5ea3dd0c654e9e293aa40e7fb1";

async function show( inpu ){
    const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inpu}&appid=${ACCESS_TOKEN}&units=metric`)
    const res = await req.json();
    console.log(res);
    if( res.cod === "404" ){
        document.querySelector("#weather").innerHTML = `<h2>${inpu} Not Found</h2>`;
    }
    else{

        display( res );
    }
    input.value = "";
}

search.addEventListener("click",()=>{
    let inp = input.value;
    show(inp)
})
function speed(spd){
    let ans = spd * 3.6;
    return (Math.round(ans));
}
function display(res){
    // console.log(res.name);
    // console.log(res.main.temp);
    // speed(res.wind.speed);
    // console.log(res.main.pressure);
    // console.log(res.main.humidity);
    let speedd = speed(res.wind.speed);
    document.querySelector("#weather").innerHTML = `<div id="part1" class="parts">
                <h1 id="deg">${res.main.temp}</h1>
                <h3 id="place">${res.name}</h3>
            </div>
            <div id="part2" class="parts">
                <div id="part21" class="show">
                    <div class="one">
                        <img src="https://cdn-icons-png.flaticon.com/512/54/54298.png" alt="">
                        <div class="text">Wind</div>
                    </div>
                    <div class="two">${speedd} km/hrs</div>
                </div>
                <div id="part22" class="show">
                    <div class="one">
                        <img src="https://cdn-icons-png.flaticon.com/512/1163/1163666.png" alt="">
                        <div class="text">Pressure</div>
                    </div>
                    <div class="two">${res.main.pressure} hPa</div>
                </div>
                <div id="part23" class="show">
                    <div class="one">
                        <img src="https://static-00.iconduck.com/assets.00/humidity-icon-1024x838-vqbjj1sp.png" alt="">
                        <div class="text">Humidity</div>
                    </div>
                    <div class="two">${res.main.humidity} %</div>
                </div>
            </div>`
}

 async function sho( lati , longi ){
            const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${ACCESS_TOKEN}&units=metric`)
            const res = await req.json();
            console.log(res);

            display( res );
            
        }


onn.addEventListener("click",()=>{
    navigator.geolocation.getCurrentPosition((pos)=>{
        let lati = pos.coords.latitude;
        let longi = pos.coords.longitude;
        console.log(lati,longi);
        sho( lati,longi);
    })
})