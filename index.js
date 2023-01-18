document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('.arrow-left').addEventListener('click', () => move_scroll('left'));
    document.querySelector('.arrow-right').addEventListener('click', () => move_scroll('right'));
    window.onload = planets_view
    window.addEventListener('resize', planets_view);
})


let currentItem = 2;
const items = document.getElementsByClassName('item');
const maxItems = items.length;

items[currentItem].scrollIntoView({
    behavior: 'smooth',
    inline: 'center'
})

function move_scroll(scroll) {

    scroll === 'left' ? currentItem -= 1 : currentItem += 1;

    if (currentItem > items.length - 1) {
        currentItem = 0;
    } else {
        currentItem < 0 && (currentItem = items.length - 1);
    }

    document.querySelector('.current-item').classList.remove('current-item')

    items[currentItem].scrollIntoView({
        behavior: 'smooth',
        inline: 'center'
    })

    document.querySelector('.planet-name').innerHTML = items[currentItem].alt
    items[currentItem].classList.add('current-item')
}

function planets_view () {

    items[currentItem].scrollIntoView({
        behavior: 'smooth',
        inline: 'center'
    })

}