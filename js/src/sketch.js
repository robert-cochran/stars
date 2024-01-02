// import { createCanvas, Image } from 'canvas';
import Two from 'two.js';
import { createStarfield } from './starfield.js'; 

// var { createCanvas, Image } = require('canvas');
// const Two = require('two.js');
// var createStarfield = require('./starfield').createStarfield;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const colours = {
    background:"rgb(10,10,10)", //"rgb(10,30,41)", //very dark shade of cyan-blue,
}

const createCanvas = (divId) => {
    let container = document.getElementById(divId);
    var two = new Two({
        type: Two.Types.webgl, // vs type: Two.Types.Canvas/svg/webgl
        fullscreen: false,
        autostart: true,
        height: 600,
        width: 1200,
    }).appendTo(((container.innerHTML = ""), container));    
    two.renderer.domElement.style.backgroundColor = colours.background; //document.getElementById("twodiv")
    return two;
}



const draw = (twoCanvas, flock) => {
    twoCanvas.bind('update', function() {
        flock.forEach( boid => {
            boid.edges();
            boid.updatePosition();
        });
    }); 
}


const createSketch = () => {
    const twoCanvas = createCanvas("contentWindow");
    const starfield = createStarfield(1000, twoCanvas);
    // draw(twoCanvas, starfield);        
    twoCanvas.bind('update', function() {
        starfield.forEach( star => {
            star.edges();
            star.updatePosition();
        });
    }); 
    twoCanvas.play();
}

export {createSketch};

//todo
/**
 * todo
 * 
 * range of hues of purple and blue for background
 * add galaxies?
 * alter speed somehow to make it seem more like floating through space
 * 
 */