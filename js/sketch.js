import Two from 'https://cdn.skypack.dev/two.js@latest';
import {CreateStar, Star} from './stars.js';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const colours = {
    background:"rgb(10,10,10)", //"rgb(10,30,41)", //very dark shade of cyan-blue,
    boidfill:[255,255,240],//"rgb(255,255,240)", //"ivory",
    boidstroke:[106,90,205],//"rgb(106,90,205)", //"slateblue", rgb(106,90,205)
}

const createCanvas = () => {
    let container = document.getElementById("canvas");
    var two = new Two({
        type: Two.Types.webgl, // vs type: Two.Types.Canvas/svg/webgl
        fullscreen: true,
        autostart: true,
        // height: 150,
        // width: 300,
    }).appendTo(((container.innerHTML = ""), container));    
    //document.getElementById("twodiv")
    two.renderer.domElement.style.backgroundColor = colours.background; 
    return two;
}

const createStars = (starCount) => {
    let newStars = [];
    for (let i = 0; i < starCount; i++) {
        let star = new Star(twoCanvas);
        star.position.fill = 
            `rgb(${colours.boidfill[0]},${colours.boidfill[1]}, ${colours.boidfill[2]}}`
                //colours.boidfill;
        star.position.stroke = 
            `rgb(${colours.boidfill[0]},${colours.boidfill[1]},255)`;
        newStars.push(star);
    }
    console.log(newStars)
    return newStars;
}

const draw = (twoCanvas, stars) => {
    // var rect = twoCanvas.makeRectangle(twoCanvas.width / 2, twoCanvas.height / 2, 50 ,50);
    twoCanvas.bind('update', function() {
        stars.forEach( star => {
            star.edges();
            star.updatePosition();
        });
    }); 
}

const twoCanvas = createCanvas();
let stars = createStars(1000);

draw(twoCanvas, stars);


