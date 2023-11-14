let mainMenu = Array.from(document.querySelectorAll('.nav__right > ul > li'));
let ind = 0;

mainMenu.forEach((item, index) => {
    item.onmouseenter = () => {
        if(item.children[1]){
            ind = index;
            item.children[1].classList.add('submenu__active');
            console.dir(item.children[1]);
            item.children[1].onmouseleave = ()=> {
                item.children[1].classList.remove('submenu__active');
            }
            console.log(ind);
        }
    }
})


