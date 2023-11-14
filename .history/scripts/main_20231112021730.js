let mainMenu = Array.from(document.querySelectorAll('.nav__right > ul > li'));
let introIndex = 0; 
let introTime = setInterval(() => introSlider(1), 5000)


mainMenu.forEach((item) => {
    let activeFlag = false;
    item.onmouseenter = () => {
        item.classList.add('active__nav')
        if(item.children[1]){
            activeFlag = true;
            item.children[1].classList.add('submenu__active');
            item.children[1].onmouseenter = ()=>{
                activeFlag = false;
            };
            item.children[1].onmouseleave = ()=> {
                item.children[1].classList.remove('submenu__active');
            };
            setTimeout(() => {
                activeFlag && item.children[1].classList.remove('submenu__active');
            }, 2000);
        }
    }
})

function introSlider(numb){
    clearInterval(introTime)
 
  
    let item = document.getElementsByClassName('slider__item')[0];
    let length = document.getElementsByClassName('slider__item').length - 1;
    if(introIndex == length) {
        introIndex = 0;
        item.style.marginLeft = 0;
        console.log(introIndex);
        return;
    }else if(introIndex < 0) {
        introIndex = 0;
        return;
    }
    console.log(introIndex);
    introIndex += numb;
   
    item.style.marginLeft = -100 * introIndex + '%'
    

    introTime = setInterval(() => introSlider(1), 5000);
}

