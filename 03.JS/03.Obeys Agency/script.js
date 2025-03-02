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
    loadertl.from("#page1",{
        y:"100%",
        duration:.55,
        ease: "none",
    })
    loadertl.to("#loader",{
        display:"none"
    })
}
// load()
// var cursormove = document.querySelector("#wrapper");
// cursormove.addEventListener("mousemove",function(dets){
//     // console.log(dets.x,dets.y);
//     gsap.to("#cursor",{
//         x:dets.x,
//         y:dets.y
//     })
// })

