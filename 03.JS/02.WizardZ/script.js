var sec1anni = function(){
    var tl = gsap.timeline()
    tl.from("#nav-bar #part1,#nav-bar #part2",{
        y:-50,
        opacity:0,
        duration:.8,
        stagger:0.5
    })
    tl.from("#center h1,#center h2,#center .butto",{
        x:-100,
        opacity:0,
        duration:0.7,
        stagger:0.55
    })
    tl.from("#center #part2 img",{
        scale:0.7,
        opacity:0,
        duration:0.7,
    },"-=.7")
    tl.from("#web-icon img",{
        y:70,
        opacity:0,
        duration:0.7,
        stagger:0.1
    })
}
sec1anni()
var sec2anni = function(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#two ",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top -50%",
            scrub:2
        }
    })
    tl.from("#two .services",{
        opacity:0,
        y:50,
        duration:.7
    })
    tl.from("#showcase #one",{
        opacity:0,
        x:-100,
        duration:1.2
    })
    tl.from("#showcase #two",{
        opacity:0,
        x:100,
        duration:1.2
    })
    tl.from("#showcase #three",{
        opacity:0,
        x:-100,
        duration:1.2
    })
    tl.from("#showcase #four",{
        opacity:0,
        x:100,
        duration:1.2
    })
}
sec2anni();
var sec3anni = function(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:" .page#three .services",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 40%",
            scrub:2
        }
    })
    tl.from(".page#three .services h2",{
        opacity:0,
        x:-50,
        duration:0.8
    })
    tl.from("#foot .inside",{
        opacity:0,
        scale:0.6,
        duration:0.5,
        stagger:0.2
    })
}
sec3anni();