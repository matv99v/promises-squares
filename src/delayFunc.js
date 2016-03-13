export default () => {

    const foo = () => Math.floor(Math.random() * 10);

    const delayed = (fn, ms) => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve( fn() );
            }, ms);
        });
    };
    

    console.log('start!');
    delayed( foo, 2000 )
    .then( (result) => {
        console.log(result);
        return delayed( foo, 3000 )
    }).then( (res) => console.log(res) );


};
