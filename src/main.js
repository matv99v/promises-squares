import loadImages from './loadImages';
import delayFunc  from './delayFunc';
import animation  from './animation';


// loadImages();
// delayFunc();

document.getElementById('btn').addEventListener('click', () => {
    const sq = document.getElementById('squareNum').value;
    const dur = document.getElementById('animationDur').value;

    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }

    animation(sq, dur);
});
