var loco = function(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#wrapper"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#wrapper" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#wrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()

const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
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
        display:"none"
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
// movecrsr();
var magnet = function(){
   Shery.makeMagnet("#nav-bar #part1 #one ,#nav-bar #part3 h3" /* Element to target.*/, {
    //Parameters are optional.
    }); 
}
magnet();
var vidcntl = function(){
    var vidcont = document.querySelector("#videocont")
    var vidcur = document.querySelector("#videocrsr")
    var vidthumb = document.querySelector("#videocont img")
    var vid = document.querySelector("#videocont video")
    var vidpause = document.querySelector("#videocont #pause")
    var vidplay = document.querySelector("#videocont #play")
    vidcont.addEventListener("mouseenter",function(){
        var crsr = document.querySelector("#cursor")
        crsr.style.zIndex=0
    })
    vidcont.addEventListener("mousemove",function(dets){
        const rect = vidcont.getBoundingClientRect();
        let relativeX = dets.clientX - rect.left;
        let relativeY = dets.clientY - rect.top;
        gsap.to("#videocrsr",{
            left:relativeX,
            top:relativeY
        })
    })
    vidcont.addEventListener("mouseleave",function(){
        var crsr = document.querySelector("#cursor")
        crsr.style.zIndex=1
        gsap.to("#videocrsr",{
            left:"77%",
            top:0
        })
    })
    var clickcount=1;
    vidcont.addEventListener("click",function(){
        if(clickcount%2===0){
            vid.pause();
            
            gsap.to("#videocrsr",{
                height:"10.2vw",
                width:"10.2vw",
            })
            vidpause.style.display="none"
            vidplay.style.display="initial"
            vidthumb.style.opacity=1
        }
        else{
            vidthumb.style.opacity=0
            gsap.to("#videocont #pause",{
                fontSize:"1.2vw",
                duration:.4
            })
            gsap.to("#videocrsr",{
                height:"4.5vw",
                width:"4.5vw",
            })
            vidpause.style.display="initial"
            vidplay.style.display="none"
            vid.autoplay = true; // Enables autoplay
            vid.loop = true; // Loops the video
            vid.muted = false;
            vid.play();
        }
        clickcount++;
        
    })
}
vidcntl();
document.addEventListener("DOMContentLoaded", function() {
    let h2s = document.querySelectorAll("#page6 #foots #foot1 h2, #page6 #foots #foot3 h2"); 
    h2s.forEach(h2 => {
        h2.setAttribute("data-text", h2.textContent); // Set data-text for each h2
    });
});
