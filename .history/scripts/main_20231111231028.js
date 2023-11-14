let mainMenu = Array.from(document.querySelectorAll('.nav__right > ul > li'));

mainMenu.forEach(item => {
    item.onmouseenter = () => {
        console.dir(item.children[1]);
    }
})


