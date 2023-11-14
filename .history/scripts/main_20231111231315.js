let mainMenu = Array.from(document.querySelectorAll('.nav__right > ul > li'));

mainMenu.forEach(item => {
    item.onmouseenter = () => {
        if(item.children[1]){
            item.children[1].classList.add('submenu__active');
            console.log(item.children[1]);
        }
        
    }
})


