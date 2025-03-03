var load = function(){
    var loadertl = gsap.timeline()
    loadertl.from(".line h1 ",{
        y:100,
        stagger:0.32,
        opacity:0,
        duration:.66,
        delay:.6
    })

    loadertl.from("#loader #line1-part1",{
        y:-50,
        opacity:0,
        duration:.66,
        onStart:function(){
            var run = document.querySelector(".line #line1-part1 #time");
            console.log((run.textContent));
            var count=0;
            var cnt = setInterval(function(){
                count++;
                if(count=== 100){
                    clearInterval(cnt)
                }
                run.textContent = count;
            },23)
        }
    },"-=1")
    loadertl.to("#loader .line",{
        opacity:0,
        duration:1.2,
        delay:1,
        stagger:0.2
    })
    loadertl.to("#loader",{
        opacity:0,
        duration:.4
    })
    loadertl.to("#page0",{
        y:"-100%",
        duration:.8,
        ease: "expo.out",
    })
    loadertl.to("#loader",{
        display:"none"
    })
    loadertl.from("#hero .cont h1",{
        y:100,
        opacity:0,
        stagger:.17
    },"-=1.2")
}
// load()
var movecrsr = function(){
    var cursormove = document.querySelector("#wrapper");
    cursormove.addEventListener("mousemove",function(dets){
        // console.log(dets.x,dets.y);
        gsap.to("#cursor",{
            x:dets.x,
            y:dets.y
        })
    })
}
movecrsr();
var magnet = function(){
   Shery.makeMagnet("#nav-bar #part1 #one ,#nav-bar #part3 h3" /* Element to target.*/, {
    //Parameters are optional.
    }); 
}
magnet();
