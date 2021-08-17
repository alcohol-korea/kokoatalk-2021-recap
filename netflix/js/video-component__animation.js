const leftBtn = document.querySelector(".video-component__btn-black:first-child");
const rightBtn = document.querySelector(".video-component__btn-black:last-child");

function handleLeftBtn(e){
    console.log("hi");
}

function handleRightBtn(e){
    console.log("hi");
}

rightBtn.addEventListener("click",handleLeftBtn);
leftBtn.addEventListener("click",handleRightBtn);