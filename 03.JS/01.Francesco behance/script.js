var tl = gsap.timeline()
tl.from("#nav-bar h3",{
    y:-30,
    duration:.5,
    delay:.3,
    opacity:0,
    stagger:.25
})
tl.from("#intro h1",{
    x:"-15%",
    duration:.6,
    opacity:0,
    stagger:.25
})
tl.from("#image img",{
    x:"45%",
    rotate:45,
    duration:.8,
    opacity:0,
    stagger:.4
})