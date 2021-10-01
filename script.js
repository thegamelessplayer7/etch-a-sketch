/*
create a container div inside of the index.html file

add hover class on hover

create grid of divs and append them to the container div

use flexbox to make divs into grid
*/


const container = document.getElementById('container');
const grid = document.createElement('div');
container.appendChild(grid);
grid.classList.add('grid');


function makeRows(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'new';
    }
}

makeRows(16, 16);


squareDivs = document.querySelectorAll('.new');
for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].addEventListener('mouseover', function() {
        squareDivs[i].classList.add('hover');
        

    })
}

const clearBtn = document.getElementById('clr-button')

clearBtn.addEventListener('click', () => {
    for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].classList.remove('hover');
    }
})