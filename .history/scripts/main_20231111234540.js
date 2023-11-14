let mainMenu = Array.from(document.querySelectorAll('.nav__right > ul > li'));
let activeFlag = false;

mainMenu.forEach((item, index) => {
    item.onmouseenter = () => {
        if(item.children[1]){
            ind = index;
            item.children[1].classList.add('submenu__active');
            item.children[1].onmouseenter = ()=>{
                activeFlag = true;
            };
            item.children[1].onmouseleave = ()=> {
                item.children[1].classList.remove('submenu__active');
            };

            setTimeout(() => {
                activeFlag && item.children[1].classList.remove('submenu__active');
            }, 500);
        }
    }
})


