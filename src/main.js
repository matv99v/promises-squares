import loadImages from './loadImages';
import delayFunc  from './delayFunc';
import animation  from './animation';


// loadImages();
// delayFunc();

document.getElementById('btn').addEventListener('click', () => {
    const squares = document.getElementById('squareNum').value;
    const delay = document.getElementById('animationDelay').value;

    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }

    animation(squares, delay);
});
