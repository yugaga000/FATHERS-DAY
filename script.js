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
    TweenMax.to("#three",1,{
        top:"-100%",
        delay:3,
        ease : Power4.easeInOut
    })
    TweenMax.to("#quote",1,{
        top:"-100%",
        delay:4,
        ease : Power4.easeInOut
    })
    TweenMax.to("#quote2",1,{
        top:"-100%",
        delay:9,
        ease : Power4.easeInOut
    })
    TweenMax.to("#quote3",1,{
        top:"-100%",
        delay:14,
        ease : Power4.easeInOut
    })
    TweenMax.to("#quote4",1,{
        top:"-100%",
        delay:19,
        ease : Power4.easeInOut
    })
    TweenMax.to("#quote5",1,{
        top:"-100%",
        delay:24,
        ease : Power4.easeInOut
    })
}
