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


function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'reg';
    }
}

makeGrid(16, 16);

grid.addEventListener('mouseover', function(e) {
    if(e.target.className === 'reg') {
        e.target.classList.add('hover');
    }
})


const clearBtn = document.getElementById('clr-button')

clearBtn.addEventListener('click', () => {
    squareDivs = document.querySelectorAll('.reg');
    for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].classList.remove('hover');
    }
})  

const squaresBtn = document.getElementById('squares-btn');

squaresBtn.addEventListener('click', () => {
    let num = prompt('How many squares would you like to add?');
    makeGrid(num, num);
})
