let mainMenu = Array.from(document.querySelectorAll('.nav__right > ul > li'));


mainMenu.forEach((item, index) => {
    let activeFlag = false;
    item.onmouseenter = () => {
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

