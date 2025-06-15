gsap.to("#page2 h1",{
    x: "-180%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -100%",
        pin:true,
        scrub:1
    }
})