var tl = gsap.timeline()


tl.from("nav img, nav ul li, nav .last h5, nav .last button",  {
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

tl.from(".banner-title h1",  {
    y:100,
    opacity:0,
    stagger:0.3
})

tl.from(".main-banner img",  {
    scale:0,
    opacity:0,
    stagger:0.3
})

tl.from(".main-banner h5",  {
    scale:0,
    opacity:0,
})

tl.to(".main-banner h5",  {
    y:25,
    duration:0.7,
    repeat:-1,
    yoyo:true
})