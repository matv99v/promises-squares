const loadImages = () => {

    const adresses = [
        'http://www.our-happy-cat.com/images/fearful-cat.jpg',
        'http://www.our-happy-cat.com/images/350xNxangry-cat-eyes.jpg.pagespeed.ic.mPb_mu73Jm.jpg',
        'http://www.our-happy-cat.com/images/250xNxdefensive-cat.jpg.pagespeed.ic.16XwjHxgmG.jpg'
    ];

    const addImage = (img) => {
        document.body.appendChild(img);
    };


    const loadImage = (url) => {
        return new Promise( (resolve, reject) => {
            const catImg = new Image();
            catImg.src = url;

            catImg.onload = () => resolve(catImg);
            catImg.onerror = () => reject(new Error('no way!'));
        })
    };

    Promise.all([
        loadImage(adresses[0]),
        loadImage(adresses[1]),
        loadImage(adresses[2])
    ]).then( (images) => {
        images.forEach(img => addImage(img));
    }).catch( (e) => document.write(e));

};

export default loadImages;
