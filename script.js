const navigation = document.querySelector('.navbar');
const highlight = document.querySelector('.highlight');
const items = document.querySelectorAll('.navbar li');

//set initial position for highlight
highlight.style.width = items[0].offsetWidth + 'px';
highlight.style.left= items[0].offsetLeft + 'px';

items.forEach((item, index) => {
    item.addEventListener('click',(e) =>{
        // e.preventDefault();
        items.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        highlight.style.width = item.offsetWidth + 'px';
        highlight.style.left= item.offsetLeft + 'px';
    });
    item.addEventListener('mouseenter', () => {
        if (!item.classList.contains('active')) {
            const hoverWidth = item.offsetWidth * 0.8;
            const hoverLeft = item.offsetLeft + item.offsetWidth * 0.1;
    
            highlight.style.width = hoverWidth + 'px';
            highlight.style.left = hoverLeft + 'px';
        }
    });
    item.addEventListener('mouseleave', () => {
        const activeItem = document.querySelector('.navbar li.active');
        highlight.style.width = activeItem.offsetWidth + 'px';
        highlight.style.left = activeItem.offsetLeft + 'px';

    });

});

//handle window resize
window.addEventListener('resize', () =>{
    const activeItem = document.querySelector('.navbar li.active');
    highlight.style.width = activeItem.offsetWidth + 'px';
    highlight.style.left = activeItem.offsetLeft + 'px';

});