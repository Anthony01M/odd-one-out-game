document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const gridSize = 25;
    let oddIndex = Math.floor(Math.random() * gridSize);

    for (let i = 0; i < gridSize; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        if (i === oddIndex) {
            item.classList.add('odd');
        }
        item.addEventListener('click', () => {
            if (i === oddIndex) {
                alert('You found the odd one out!');
                location.reload();
            } else {
                alert('Try again!');
            }
        });
        grid.appendChild(item);
    }

    // no background color change this time! it gives it away directly and I'm too lazy to change the colors
});