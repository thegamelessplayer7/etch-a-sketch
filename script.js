/*
create a container div inside of the index.html file

add hover class on hover

create grid of divs and append them to the container div

use flexbox to make divs into grid




*/
const grid = document.createElement('div');
container.appendChild(grid);
grid.classList.add('grid');


let square;
for (let i = 0; i < 16; i++) {
    square = document.createElement('div');
    square.className = 'new';
    grid.appendChild(square);
}
for (let i = 0; i < 16; i++) {
    squareTwo = document.createElement('div');
    squareTwo.className = 'new';
    grid.appendChild(squareTwo);
}


squareDivs = document.querySelectorAll('.new');

for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].addEventListener('mouseover', function() {
        squareDivs[i].classList.add('hover')
    })
}
