const 
rightBtn = document.querySelector(".btn__black:last-child"),
leftBtn = document.querySelector(".btn__black:first-child"),
firstPage = document.querySelector(".slide-header__bar span:first-child"),
lastPage = document.querySelector(".slide-header__bar span:last-child"),
slideList = document.querySelector(".main__list");


function handleLeft(e){
    slideList.scrollBy({
        left:675,
        top:0, 
        behavior:"smooth"
    });
    leftBtn.classList.remove("hidden");
    firstPage.style.backgroundColor = "rgba(78, 78, 78, 0.904)";
    lastPage.style.backgroundColor = "white";
}
function handleRight(e){
    slideList.scrollBy({
        left:-675,
        top:0,
        behavior:"smooth"
    });
    leftBtn.classList.add("hidden");
    firstPage.style.backgroundColor = "white";
    lastPage.style.backgroundColor = "rgba(78, 78, 78, 0.904)";
}

rightBtn.addEventListener("click",handleLeft);
leftBtn.addEventListener("click",handleRight);