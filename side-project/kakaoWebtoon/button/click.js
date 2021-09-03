const 
icon = document.querySelectorAll("i"),
button = document.querySelector(".responsive-btn");

console.log(icon)

function clickedButton(e) {
    for(i=0;i<5;i++){
        icon[i].style.display = "none";
        icon[2].style.display = "block";
    }
    button.style.width = "50px";
    if(button.offsetWidth === 50){
        button.style.width = "500px";
        for(i=0;i<5;i++){
            icon[i].style.display = "block";
        }
        return;
    } 
}

icon[2].addEventListener("click", clickedButton);
/*
        window.addEventListener("click", (e)=>{
            button.style.width = "500px";
        });
*/