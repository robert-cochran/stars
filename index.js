import { createSketch } from './src/sketch.js';

console.log("Hello World!");

createSketch();

// <a href="dist/[name].html"></a>



//for each link i want to generate a new <a> tag but i want this done in the template so its done in the build stage, not on the client side
//i want a new [content].html page created for each entry in the js also during the build stage
