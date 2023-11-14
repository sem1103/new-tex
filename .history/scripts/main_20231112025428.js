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
    let length = document.getElementsByClassName('slider__item').length;
    let headerWrapper = document.getElementById('header__wrapper');
    let dots = document.getElementsByClassName('dot');
    dots.forEach(elem => elem.classList.remove('active__dot'))
    introIndex += numb;

    if(introIndex == length) {
        introIndex = 0;
    }else if(introIndex < 0) {
       introIndex = length-1;
    }
    item.style.marginLeft = -100 * introIndex + '%';
    headerWrapper.style.backgroundImage = `url(../img/intro-bg${introIndex+1}.png)`;
    dots[introIndex].classList.add('active__dot');
    

    introTime = setInterval(() => introSlider(1), 5000);
}


