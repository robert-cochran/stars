import {Star} from './star'
// var Star = require('./star');

const starColours = {
    starfill:[255,255,240],//"rgb(255,255,240)", //"ivory",
    starstroke:[106,90,205],//"rgb(106,90,205)", //"slateblue", rgb(106,90,205)
}



export const createStarfield = (starfieldSize, twoCanvas)  => {
    let newStarfield = [];
    for (let i = 0; i < starfieldSize; i++) {
        let star = new Star(twoCanvas);
        // var rect = twoCanvas.makeRectangle(twoCanvas.width / 2, twoCanvas.height / 2, 50 ,50);
        star.position.fill = `rgb(${starColours.starfill[0]},${starColours.starfill[1]},${starColours.starfill[2]}}`//colours.boidfill;
        star.position.stroke = `rgb(${starColours.starfill[0]},${starColours.starfill[1]},255)`;
        newStarfield.push(star);
    }
    console.log(newStarfield)
    return newStarfield;
}
