let wrap = document.querySelector("#wrapper")
let cursor = document.querySelector("#cursor")
let image = document.querySelector("#image")

wrap.addEventListener("mousemove",(e)=>{
    // console.log(e.x , e.y);

    gsap.to("#cursor",{
        x:e.x,
        y:e.y,
        duration:1.25,
        ease:"back.out",
        xPercent: -50,
        yPercent: -50,
        // translateX:"-50%",
        // translateY:"-50%",
    })
})

image.addEventListener("mouseenter",()=>{
    cursor.innerText = "View More";
    
    cursor.style.backgroundColor = "white"
    cursor.style.border = "none"
    gsap.to("#cursor",{
        scale:5
    })
})
image.addEventListener("mouseleave",()=>{
    cursor.innerText = "";
    cursor.style.backgroundColor = "transparent"
    cursor.style.border = "2px solid white"
    gsap.to("#cursor",{
        scale:1
    })
})