const header = document.querySelector(".screen-header");
function handleScroll(e){
    let howIScroll = this.scrollY;
    if(howIScroll >50){
        header.classList.add("screen-header__black");
    }else{
        header.classList.remove("screen-header__black");
    }
}
window.addEventListener("scroll",handleScroll);