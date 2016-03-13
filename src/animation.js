export default (divsPerLine, generalDurationMs) => {

const colors = [
    '#ff0000',
    '#ff4000',
    '#ff8000',
    '#ffbf00',
    '#ffff00',
    '#bfff00',
    '#80ff00',
    '#40ff00',
    '#00ff00',
    '#00ff40',
    '#00ff80',
    '#00ffbf',
    '#00ffff',
    '#00bfff',
    '#0080ff',
    '#0040ff',
    '#0000ff',
    '#4000ff',
    '#8000ff',
    '#bf00ff',
    '#ff00ff',
    '#ff00bf',
    '#ff0080',
    '#ff0040',
    '#ff0000'
]

    document.body.style.margin = '0';

    const squareDimmension  = window.innerWidth / divsPerLine;
    const rows              = Math.floor(window.innerHeight / squareDimmension);
    const numOfDivs         = divsPerLine * rows;
    const drawFrequencyMs   = generalDurationMs / numOfDivs;
    const divs              = [];

    for (let i = 0; i < numOfDivs; i++) {
        divs.push(null);
    }

    const createDiv = (color) => {
        const square                 = document.createElement('div');
        square.style.width           = squareDimmension + 'px';
        square.style.height          = squareDimmension + 'px';
        square.style.display         = 'inline-block';
        square.style.float           = 'left';
        square.style.backgroundColor = color;
        document.body.appendChild(square);
    };

    function waitAndDrawDiv(color) {
        return new Promise(resolve => {
            setTimeout( () => {
                createDiv(color);
                resolve();
            }, drawFrequencyMs);
        });
    }

    divs.reduce( (accumulation, curr, ind) => {
        const curColor = colors[ind % colors.length];
        return accumulation.then( () =>  waitAndDrawDiv(curColor) );
    }, Promise.resolve() );

};
