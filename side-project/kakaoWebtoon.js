const slide = document.querySelector(".slide");
const slideList = document.querySelector(".slide-list");
const slideRightBtn = document.querySelector(".right");
const slideLeftBtn = document.querySelector(".left");
function slideRight(e){
    console.log("right",e)
    console.dir(slide)
    let option = 
    {
        top:0,
        left:615,
        behavior:"smooth"
    }
    slide.scrollBy(option);
    slideLeftBtn.classList.remove("hidden");
    if(slide.scrollLeft == 615){
        slideRightBtn.classList.add("hidden");
        //눌렀을떄 실행이 되어야하니깐 사라지기전에 즉 다음 페이지로 넘어가기전에 누르는 지점에서 실행되어야한다
    }
}
function slideLeft(e){
    console.log("left",e)
    console.dir(slide)
    let option = 
    {
        top:0,
        left: -615,
        behavior:"smooth"
    }
    console.log(option.left)
    slide.scrollBy(option);
    if(slide.scrollLeft == 1230){
        slideRightBtn.classList.remove("hidden");    
    }
    else if(slide.scrollLeft == 615){
        slideLeftBtn.classList.add("hidden");
        //눌렀을떄 실행이 되어야하니깐 사라지기전에 즉 다음 페이지로 넘어가기전에 누르는 지점에서 실행되어야한다
    }
}

slideRightBtn.addEventListener("click",slideRight);
slideLeftBtn.addEventListener("click",slideLeft);
/*function handleScroll(e){
    const scroll = e.path[0].scrollLeft;
    console.log(scroll)
}

slide.addEventListener("scroll",handleScroll);*/