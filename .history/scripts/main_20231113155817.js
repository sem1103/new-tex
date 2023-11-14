let mainMenu = Array.from(document.querySelectorAll('.nav__right > ul > li'));
let introIndex = 0; 
let introTime = setInterval(() => introSlider(0), 5000)


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
    
    let item = Array.from(document.getElementsByClassName('slider__item'));
    let display = document.getElementsByClassName('slider__items')[0];
    let firstItem = item[0];
    let length = document.getElementsByClassName('slider__item').length;
    let headerWrapper = document.getElementById('header__wrapper');
    let dots = Array.from(document.getElementsByClassName('dot'));
    dots.forEach(elem => elem.classList.remove('active__dot'));
    introIndex += numb == -1 ? numb : 1;

    if(numb >= 1) {
        introIndex = numb - 1;
    }
    if(introIndex == length ) { 
        introIndex = 0;
    }else if(introIndex < 0) {
       introIndex = length-1;
    }
    


    firstItem.style.marginLeft = -100 * introIndex + '%';
    headerWrapper.style.backgroundImage = `url(../img/intro-bg${introIndex+1}.png)`;
    dots[introIndex].classList.add('active__dot');
    

    introTime = setInterval(() => introSlider(0), 5000);
}


let projectTitles = Array.from(document.querySelectorAll('.projects__titles > p'));
let titlesDisplay = document.getElementsByClassName('projects__titles')[0];

projectTitles.reverse().forEach((item, index) => {
    if(index != projectTitles.length - 1){
        titlesDisplay.insertBefore(item.cloneNode(true), titlesDisplay.firstChild)
    }
})
function startCarousel() {
    var container = document.querySelector('.projects__titles');
    var paragraphs = document.querySelectorAll('.projects__titles p');

    var currentIndex = 0;
    var totalItems = paragraphs.length;
    var itemWidth = paragraphs[0].offsetWidth + parseInt(window.getComputedStyle(paragraphs[0]).marginRight);

    function moveCarousel() {
        currentIndex++;
        if (currentIndex >= totalItems) {
            currentIndex = 0;
        }
        var newPosition = -currentIndex * itemWidth;
        container.style.transform = 'translateX(' + newPosition + 'px)';
    }

    // Устанавливаем интервал для движения карусели
    setInterval(moveCarousel, 2000); // Здесь 2000 миллисекунд (2 секунды) - интервал между сменой элементов
}

// Запускаем карусель при загрузке страницы
window.onload = startCarousel;

function prevNext(numb){
    let titles = Array.from(document.querySelectorAll('.projects__titles > p'));
    
    console.log(titles);
}



console.log(projectTitles);


