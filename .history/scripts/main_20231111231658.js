let mainMenu = Array.from(document.querySelectorAll('.nav__right > ul > li'));

mainMenu.forEach(item => {
    item.onmouseenter = () => {
        if(item.children[1]){
            item.children[1].classList.add('submenu__active');
            item.children[1].onmouseout = ()=> {
                item.children[1].classList.remove('submenu__active');
            }
        }
    }
})


