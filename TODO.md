# todo 
- merge js/ files and js/src files
- move styling elements in js file to css
- add service-workers?
- write a version for boids
    - daniel shiffman has rudimentary example using his p5 lib but this hides
        a lot of the code since its built into his library
- webpack
    - improve the 'code splitting' and 'output management' once enough files 
        are added
- permformance (fan management)
    - theres something causing the fan to start going when using stars
      - solution1: using throttling to stop it?
      - solution2: calling requestAnimationFrame and limiting performance?
      - cause1: is it eating up too much memory? why does the fan start?
- maybe other view engines/libraries
    - pug (jade)
    - react
    - other template/view engines ones listed on the express generator
- update Readme
    - all the steps for running, 
    - tools used to run, 
    - why each tool was used if it diverts away from the bare minimum
        - e.g. webpack loader used to turn html template into js-content pages 
        - (maybe pug is used etc...)

