const
colorCircle = document.querySelector(".responsive-btn");
//rotate::after에 하려면 rotate에 하면됨
//어차피 rotate안에 속해있는 것이므로 상관 없음 =>absolute했잖아!!!!!!
//따라서 rotate한테 걸어야하기때문에 이게 안될우려가 높음
//rotate에 gradation을 넣지는 못하니깐

let angle = 0;
function gradient(){
    if(angle === 360){
        angle = 0;
    }
    colorCircle.style.setProperty("--angle",`${angle}deg`);
    angle++;
    requestAnimationFrame(gradient);
}
gradient();