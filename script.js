function fade(){
    TweenMax.to("button",1,{
        y:-300,
        opacity:0
    })
    TweenMax.to("#one",1,{
        top:"-100%",
        delay:1,
        ease : Power4.easeInOut
    })
    TweenMax.to("#two",1,{
        top:"-110%",
        delay:2,
        ease : Power4.easeInOut
    })
    TweenMax.to("#surprise",1,{
        opacity:1,
    })
}