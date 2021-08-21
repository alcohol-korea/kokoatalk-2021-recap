const slide = document.querySelector(".slide");
const slideRightBtn = document.querySelector(".right");
const slideLeftBtn = document.querySelector(".left");

function slideScroll(e){
    const scroll = e.path[0].scrollLeft;
    console.log(scroll)
}

function slideRight(e){
    slide.scrollBy({
        top:0,
        left:410,
        behavior:"smooth"
    });
    let scrollLeft = slide.scrollLeft;
    if(scrollLeft = 1195){
        slideRightBtn.classList.add("hidden");
        slide.style.width = "610px";
    }
}
function slideLeft(e){
    slide.scrollBy({
        top:0,
        left:-410,
        behavior:"smooth"
    });
}

slide.addEventListener("scroll",slideScroll);
slideRightBtn.addEventListener("click",slideRight);
slideLeftBtn.addEventListener("click",slideLeft);